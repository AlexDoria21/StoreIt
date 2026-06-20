# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (Next.js with `--turbopack`)
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint (Next core-web-vitals + Prettier + Tailwind plugin)

There is no test runner configured in this project.

## Overview

A file-storage / file-sharing web app ("store_it") built on **Next.js 15 App Router** (React 19 RC) with **Appwrite** as the entire backend (auth, database, file storage). UI is **shadcn/ui** (Radix primitives in `components/ui/`) styled with **Tailwind CSS**. Forms use `react-hook-form` + `zod`.

## Architecture

### Appwrite is the backend
All server-side data access goes through `node-appwrite` via two client factories in `lib/appwrite/index.ts` (both `"use server"`):

- **`createSessionClient()`** — acts as the logged-in user. Reads the `appwrite-session` cookie and calls `client.setSession(...)`. Throws `"No session"` if the cookie is missing. Use this when an operation should be scoped to / permissioned as the current user.
- **`createAdminClient()`** — acts with the API secret key (`NEXT_APPWRITE_KEY`). Bypasses user permissions. Most file/user operations use this and manually scope queries by `owner`/`accountId`.

All Appwrite resource IDs (project, database, two collections, bucket, endpoint, secret) come from env vars and are centralized in `lib/appwrite/config.ts`. The `NEXT_PUBLIC_*` ones are also read directly in `lib/utils.ts` for building file URLs.

### Server Actions are the data layer
There is **no API route layer** and **no `middleware.ts`**. All mutations and reads live in `lib/actions/*.ts` files marked `"use server"`:

- `lib/actions/user.actions.ts` — auth flow and current-user lookup
- `lib/actions/file.actions.ts` — upload, list, rename, share (`updateFileUsers`), delete, and `getTotalSpaceUsed`

Server Actions return data passed through `parseStringify` (`lib/utils.ts`, a `JSON.parse(JSON.stringify(...))`) to strip non-serializable Appwrite document internals before crossing to client components. After mutations, actions call `revalidatePath(path)` — callers pass the current `path` so the right route re-renders.

### Auth flow (OTP, no password)
1. `createAccount` / `signInUser` look up the user by email in the users collection, then `sendEmailOTP` creates an Appwrite email token.
2. The user enters the OTP; `verifySecret` calls `account.createSession(accountId, otp)` and writes the session secret into the `appwrite-session` cookie (`httpOnly`, `sameSite: strict`, `secure`).
3. On sign-up, a user document is also created in the users collection (Appwrite Account ↔ users-collection document linked via `accountId`).

Route protection is **not** middleware-based. The authenticated area lives under `app/(root)/` whose `layout.tsx` calls `getCurrentUser()` and `redirect("/sign-in")` if absent. That layout is `export const dynamic = "force-dynamic"`.

### Routing
Route groups separate concerns:
- `app/(auth)/` — `sign-in`, `sign-up` (public)
- `app/(root)/` — dashboard (`page.tsx`) and the dynamic `app/(root)/[type]/page.tsx` for category views (`/documents`, `/images`, `/media`, `/others`)

The `[type]` segment is mapped to Appwrite `type` values by `getFileTypesParams` in `lib/utils.ts` (e.g. `media` → `["video", "audio"]`). Search and sort are driven by `searchParams` (`query`, `sort`).

### File model and types
File "type" is derived from extension by `getFileType` in `lib/utils.ts`, bucketed into `image | document | video | audio | other`. Uploads store the binary in the Appwrite bucket and a metadata document in the files collection; `uploadFile` rolls back the bucket file if the document write fails. Sharing works by storing recipient emails in the file document's `users[]` array; `getFiles` returns files where the current user is `owner` OR appears in `users`.

Global ambient types (`FileType`, action prop types like `UploadFileProps`, `SearchParamProps`, etc.) are declared in `types/index.d.ts` and used unimported across the codebase.

## Conventions

- Import alias `@/*` maps to the repo root (`tsconfig.json`).
- Constants (nav items, dropdown actions, sort options, `MAX_FILE_SIZE`, placeholder avatar) live in `constants/index.ts`.
- `components/ui/` is generated shadcn/ui — prefer composing these over hand-rolling primitives; app-specific components live directly in `components/`.
- `lib/actions/*` error handlers currently `console.log` then re-throw; several copied messages say "Failed to rename file" in non-rename actions.

## Environment

Requires `.env.local` with: `NEXT_PUBLIC_APPWRITE_ENDPOINT`, `NEXT_PUBLIC_APPWRITE_PROJECT`, `NEXT_PUBLIC_APPWRITE_DATABASE`, `NEXT_PUBLIC_APPWRITE_USERS_COLLECTION`, `NEXT_PUBLIC_APPWRITE_FILES_COLLECTION`, `NEXT_PUBLIC_APPWRITE_BUCKET`, and `NEXT_APPWRITE_KEY` (secret, server-only).
