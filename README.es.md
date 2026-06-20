<div align="center">

# 🔐 StoreIt

### La única solución de almacenamiento que necesitas

Una aplicación web moderna de **almacenamiento y compartición de archivos** construida con **Next.js 15**, **React 19** y **Appwrite**. Sube, organiza, comparte y gestiona tus archivos desde cualquier dispositivo.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-Backend-FD366E?logo=appwrite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)

[English](./README.md) · **Español**

</div>

---

## 📋 Tabla de contenidos

- [Características](#-características)
- [Capturas de pantalla](#-capturas-de-pantalla)
- [Stack tecnológico](#-stack-tecnológico)
- [Arquitectura](#-arquitectura)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Empezar](#-empezar)
- [Configuración de Appwrite](#-configuración-de-appwrite)
- [Variables de entorno](#-variables-de-entorno)
- [Scripts disponibles](#-scripts-disponibles)
- [Flujo de autenticación](#-flujo-de-autenticación)
- [Modelo de datos de archivos](#-modelo-de-datos-de-archivos)
- [Convenciones del código](#-convenciones-del-código)

---

## ✨ Características

- 🔑 **Autenticación sin contraseña** — inicio de sesión mediante OTP (One-Time Password) enviado por email.
- 📤 **Subida de archivos** — arrastrar y soltar con `react-dropzone` (límite de 50 MB por archivo).
- 🗂️ **Organización por categorías** — los archivos se clasifican automáticamente en `Documents`, `Images`, `Media` y `Others` según su extensión.
- 🔍 **Búsqueda global** — búsqueda de archivos en tiempo real con _debounce_.
- ↕️ **Ordenación** — por fecha de creación, nombre o tamaño (ascendente/descendente).
- ✏️ **Gestión de archivos** — renombrar, ver detalles, descargar y eliminar.
- 🤝 **Compartición** — comparte archivos con otros usuarios por email; los destinatarios ven los archivos compartidos con ellos.
- 📊 **Dashboard con métricas** — gráfico de uso de espacio (`recharts`) y resumen por tipo de archivo.
- 📱 **Diseño responsive** — navegación móvil dedicada y experiencia adaptada a todos los tamaños de pantalla.

---

## 📸 Capturas de pantalla

| Inicio de sesión | Verificación OTP |
|:---:|:---:|
| ![Inicio de sesión](docs/screenshots/sign-in.png) | ![OTP](docs/screenshots/otp.png) |

| Dashboard | Subida de archivos |
|:---:|:---:|
| ![Dashboard](docs/screenshots/dashboard.png) | ![Subida](docs/screenshots/upload.png) |

| Vista por categoría y compartición |
|:---:|
| ![Categoría](docs/screenshots/category.png) |

<details>
<summary>Cómo añadir capturas</summary>

1. Ejecuta la app en local (`npm run dev`).
2. Haz capturas de las pantallas relevantes.
3. Guárdalas en `docs/screenshots/` con los nombres referenciados arriba (`sign-in.png`, `otp.png`, `dashboard.png`, `upload.png`, `category.png`).
4. Aparecerán automáticamente al ver este README en GitHub.

</details>

---

## 🛠️ Stack tecnológico

### Framework & Core
| Tecnología | Versión | Uso |
|------------|---------|-----|
| **[Next.js](https://nextjs.org/)** | 15.0.2 | Framework React con App Router y Turbopack |
| **[React](https://react.dev/)** | 19 (RC) | Librería de UI |
| **[TypeScript](https://www.typescriptlang.org/)** | 5 | Tipado estático |

### Backend & Datos
| Tecnología | Versión | Uso |
|------------|---------|-----|
| **[Appwrite](https://appwrite.io/)** (`node-appwrite`) | 14.2.0 | Backend completo: autenticación, base de datos y almacenamiento |
| **Next.js Server Actions** | — | Capa de datos (sin rutas API ni middleware) |

### UI & Estilos
| Tecnología | Versión | Uso |
|------------|---------|-----|
| **[shadcn/ui](https://ui.shadcn.com/)** | — | Componentes basados en Radix (`components/ui/`) |
| **[Radix UI](https://www.radix-ui.com/)** | varios | Primitivas accesibles (dialog, dropdown, select, toast…) |
| **[Tailwind CSS](https://tailwindcss.com/)** | 3.4.1 | Estilos utility-first |
| **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** / **[clsx](https://github.com/lukeed/clsx)** | — | Composición de clases |
| **[class-variance-authority](https://cva.style/)** | 0.7.0 | Variantes de componentes |
| **[lucide-react](https://lucide.dev/)** / **[@radix-ui/react-icons](https://www.radix-ui.com/icons)** | — | Iconografía |
| **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** | 1.0.7 | Animaciones |
| **Poppins** (`next/font/google`) | — | Tipografía principal |

### Formularios & Validación
| Tecnología | Versión | Uso |
|------------|---------|-----|
| **[react-hook-form](https://react-hook-form.com/)** | 7.53.1 | Gestión de formularios |
| **[zod](https://zod.dev/)** | 3.23.8 | Validación de esquemas |
| **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** | 3.9.1 | Puente entre RHF y Zod |
| **[input-otp](https://input-otp.rodz.dev/)** | 1.2.5 | Campo de entrada para el OTP |

### Utilidades
| Tecnología | Versión | Uso |
|------------|---------|-----|
| **[react-dropzone](https://react-dropzone.js.org/)** | 14.3.5 | Subida de archivos por arrastre |
| **[recharts](https://recharts.org/)** | 2.13.3 | Gráficos del dashboard |
| **[use-debounce](https://github.com/xnimorz/use-debounce)** | 10.0.4 | Debounce en la búsqueda |

### Tooling
| Tecnología | Uso |
|------------|-----|
| **ESLint** (`next/core-web-vitals` + Prettier + Tailwind plugin) | Linting |
| **Prettier** | Formateo de código |
| **PostCSS** | Procesamiento de CSS |
| **Turbopack** | Bundler de desarrollo |

---

## 🏗️ Arquitectura

### Appwrite es el backend

Todo el acceso a datos del lado servidor pasa por `node-appwrite` mediante dos _client factories_ en `lib/appwrite/index.ts` (ambas `"use server"`):

- **`createSessionClient()`** — actúa como el usuario autenticado. Lee la cookie `appwrite-session` y llama a `client.setSession(...)`. Lanza `"No session"` si falta la cookie. Se usa cuando una operación debe estar limitada a / permisada como el usuario actual.
- **`createAdminClient()`** — actúa con la API secret key (`NEXT_APPWRITE_KEY`). Omite los permisos de usuario. La mayoría de operaciones de archivos/usuarios la usan y limitan manualmente las consultas por `owner`/`accountId`.

Todos los IDs de recursos de Appwrite (proyecto, base de datos, dos colecciones, bucket, endpoint, secreto) provienen de variables de entorno y están centralizados en `lib/appwrite/config.ts`.

### Server Actions como capa de datos

**No existe capa de rutas API** ni **`middleware.ts`**. Todas las mutaciones y lecturas viven en archivos `lib/actions/*.ts` marcados `"use server"`:

- `lib/actions/user.actions.ts` — flujo de autenticación y búsqueda del usuario actual.
- `lib/actions/file.actions.ts` — subir, listar, renombrar, compartir (`updateFileUsers`), eliminar y `getTotalSpaceUsed`.

Las Server Actions devuelven datos a través de `parseStringify` (`lib/utils.ts`, un `JSON.parse(JSON.stringify(...))`) para eliminar los internos no serializables de los documentos de Appwrite antes de cruzar a los componentes cliente. Tras una mutación, las acciones llaman a `revalidatePath(path)`.

### Protección de rutas

La protección de rutas **no se basa en middleware**. El área autenticada vive bajo `app/(root)/`, cuyo `layout.tsx` llama a `getCurrentUser()` y hace `redirect("/sign-in")` si no hay usuario. Ese layout es `export const dynamic = "force-dynamic"`.

---

## 📁 Estructura del proyecto

```
locked_it/
├── app/
│   ├── (auth)/                 # Rutas públicas
│   │   ├── layout.tsx
│   │   ├── sign-in/page.tsx
│   │   └── sign-up/page.tsx
│   ├── (root)/                 # Área autenticada
│   │   ├── layout.tsx          # getCurrentUser() + redirect (force-dynamic)
│   │   ├── page.tsx            # Dashboard
│   │   └── [type]/page.tsx     # Vistas por categoría (/documents, /images, …)
│   ├── globals.css
│   └── layout.tsx              # Root layout + fuente Poppins + metadata
│
├── components/                 # Componentes específicos de la app
│   ├── ActionDropdown.tsx      # Menú de acciones por archivo
│   ├── ActionsModalContent.tsx
│   ├── AuthForm.tsx            # Formulario sign-in / sign-up
│   ├── Card.tsx                # Tarjeta de archivo
│   ├── Chart.tsx               # Gráfico de uso de espacio
│   ├── FileUploader.tsx        # Subida con react-dropzone
│   ├── FormattedDateTime.tsx
│   ├── Header.tsx
│   ├── MobileNavigation.tsx
│   ├── OTPModal.tsx            # Verificación del OTP
│   ├── Search.tsx             # Búsqueda con debounce
│   ├── Sidebar.tsx
│   ├── Sort.tsx
│   ├── Thumbnail.tsx
│   └── ui/                     # Componentes generados por shadcn/ui
│
├── lib/
│   ├── actions/                # Server Actions ("use server")
│   │   ├── file.actions.ts
│   │   └── user.actions.ts
│   ├── appwrite/
│   │   ├── config.ts           # IDs de recursos desde env
│   │   └── index.ts            # createSessionClient / createAdminClient
│   └── utils.ts                # getFileType, parseStringify, URLs, etc.
│
├── constants/index.ts          # navItems, acciones, ordenaciones, MAX_FILE_SIZE
├── hooks/use-toast.ts          # Hook de notificaciones (shadcn)
├── types/index.d.ts            # Tipos globales ambient (sin importar)
├── public/assets/              # Iconos e imágenes
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

### Enrutado

Los _route groups_ separan responsabilidades:

- `app/(auth)/` — `sign-in`, `sign-up` (públicas).
- `app/(root)/` — dashboard (`page.tsx`) y la ruta dinámica `app/(root)/[type]/page.tsx` para las vistas por categoría (`/documents`, `/images`, `/media`, `/others`).

El segmento `[type]` se mapea a los valores `type` de Appwrite mediante `getFileTypesParams` en `lib/utils.ts` (p. ej. `media` → `["video", "audio"]`). La búsqueda y la ordenación se gobiernan por `searchParams` (`query`, `sort`).

---

## 🚀 Empezar

### Requisitos previos

- **Node.js** 18+ y **npm**.
- Una cuenta y proyecto de **[Appwrite](https://appwrite.io/)** (Cloud o self-hosted) — ver [Configuración de Appwrite](#-configuración-de-appwrite).

### Instalación

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>
cd locked_it

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local   # y rellenar los valores (ver abajo)

# 4. Arrancar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🧩 Configuración de Appwrite

StoreIt usa Appwrite para **Auth**, **Databases** y **Storage**. Crea los siguientes recursos en tu consola de Appwrite y copia cada ID en tu `.env.local`.

### 1. Proyecto

Crea un proyecto y añade una **plataforma Web** con hostname `localhost` (y tu dominio de producción más adelante). Copia el **Project ID** y el **API Endpoint**.

### 2. API key (servidor)

Crea una **API Key** con al menos `databases.read`, `databases.write`, `documents.read`, `documents.write`, `files.read`, `files.write`, `users.read`. Cópiala en `NEXT_APPWRITE_KEY` (solo servidor, nunca exponer).

### 3. Base de datos

Crea una **Database** y copia su ID. Dentro, crea dos colecciones.

#### Colección `users`

| Atributo    | Tipo   | Tamaño | Requerido | Notas                          |
|-------------|--------|--------|-----------|--------------------------------|
| `fullName`  | String | 255    | ✅        | Nombre visible del usuario     |
| `email`     | String | 255    | ✅        | Usado para buscar usuarios     |
| `avatar`    | String | 2000   | ✅        | URL del avatar (placeholder)   |
| `accountId` | String | 255    | ✅        | Enlaza con la Cuenta de Appwrite |

> Índice recomendado: clave en `email` y en `accountId` (usados por `getUserByEmail` y `getCurrentUser`).

#### Colección `files`

| Atributo       | Tipo    | Tamaño / Config      | Requerido | Notas                                   |
|----------------|---------|----------------------|-----------|-----------------------------------------|
| `type`         | String  | 255                  | ✅        | Uno de `image / document / video / audio / other` |
| `name`         | String  | 255                  | ✅        | Nombre del archivo (con extensión)      |
| `url`          | String  | 2000                 | ✅        | URL de vista construida desde el bucket |
| `extension`    | String  | 64                   | ✅        | Extensión del archivo                   |
| `size`         | Integer | —                    | ✅        | Tamaño en bytes                         |
| `owner`        | String  | 255                  | ✅        | `$id` del documento del propietario     |
| `accountId`    | String  | 255                  | ✅        | ID de cuenta de Appwrite del propietario |
| `users`        | String  | 255, **Array**       | ❌        | Emails con los que se comparte          |
| `bucketFileId` | String  | 255                  | ✅        | `$id` del binario en Storage            |

> Índices recomendados: `owner`, `type` y un índice fulltext en `name` (usado por la búsqueda). El array `users` se consulta con `Query.contains`.

### 4. Bucket de almacenamiento

Crea un **Bucket** y copia su ID en `NEXT_PUBLIC_APPWRITE_BUCKET`. El dashboard asume **2 GB** de almacenamiento disponible por usuario (`getTotalSpaceUsed` en `lib/actions/file.actions.ts`); ajústalo ahí si tu plan difiere. El límite de subida por archivo es **50 MB** (`MAX_FILE_SIZE` en `constants/index.ts`) — asegúrate de que el tamaño máximo del bucket sea ≥ ese valor.

### 5. Permisos

Como la mayoría de operaciones corren a través de `createAdminClient()` (API key), los permisos a nivel de documento pueden ser permisivos, pero la app **limita manualmente** cada consulta por `owner`/`accountId`/`users`, de modo que un usuario solo ve sus archivos propios o compartidos.

---

## 🔐 Variables de entorno

Crea un archivo `.env.local` en la raíz con:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=<id-del-proyecto>
NEXT_PUBLIC_APPWRITE_DATABASE=<id-de-la-base-de-datos>
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=<id-coleccion-users>
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=<id-coleccion-files>
NEXT_PUBLIC_APPWRITE_BUCKET=<id-del-bucket>
NEXT_APPWRITE_KEY=<api-secret-key>   # ⚠️ solo servidor, nunca exponer
```

> Las variables `NEXT_PUBLIC_*` se usan también directamente en `lib/utils.ts` para construir las URLs de los archivos. `NEXT_APPWRITE_KEY` es secreta y solo se usa en el servidor (`createAdminClient`).

---

## 📜 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Arranca el servidor de desarrollo (Next.js con `--turbopack`). |
| `npm run build` | Genera la build de producción. |
| `npm start` | Sirve la build de producción. |
| `npm run lint` | Ejecuta ESLint (core-web-vitals + Prettier + Tailwind). |

> ℹ️ No hay test runner configurado en este proyecto.

---

## 🔑 Flujo de autenticación (OTP, sin contraseña)

1. `createAccount` / `signInUser` buscan al usuario por email en la colección de usuarios y luego `sendEmailOTP` crea un _email token_ de Appwrite.
2. El usuario introduce el OTP; `verifySecret` llama a `account.createSession(accountId, otp)` y escribe el secreto de sesión en la cookie `appwrite-session` (`httpOnly`, `sameSite: strict`, `secure`).
3. Al registrarse, también se crea un documento de usuario en la colección de usuarios (la Cuenta de Appwrite ↔ el documento de la colección quedan enlazados vía `accountId`).

---

## 🗃️ Modelo de datos de archivos

- El **"tipo"** de archivo se deriva de la extensión mediante `getFileType` en `lib/utils.ts`, agrupándose en `image | document | video | audio | other`.
- Las subidas guardan el binario en el bucket de Appwrite y un documento de metadatos en la colección de archivos. `uploadFile` revierte el archivo del bucket si falla la escritura del documento.
- La **compartición** funciona almacenando los emails de los destinatarios en el array `users[]` del documento. `getFiles` devuelve los archivos donde el usuario actual es `owner` **O** aparece en `users`.
- El límite de tamaño de archivo es **50 MB** (`MAX_FILE_SIZE` en `constants/index.ts`).
- Los tipos globales ambient (`FileType`, `UploadFileProps`, `SearchParamProps`, etc.) se declaran en `types/index.d.ts` y se usan sin importar en todo el código.

---

## 📐 Convenciones del código

- Alias de importación `@/*` apunta a la raíz del repo (`tsconfig.json`).
- Las constantes (nav items, acciones de dropdown, opciones de orden, `MAX_FILE_SIZE`, avatar placeholder) viven en `constants/index.ts`.
- `components/ui/` es shadcn/ui generado — preferir componerlos antes que crear primitivas a mano; los componentes específicos de la app van directamente en `components/`.
- Los manejadores de error en `lib/actions/*` actualmente hacen `console.log` y luego re-lanzan el error.

---

<div align="center">

Construido con ❤️ usando **Next.js** + **Appwrite**

</div>
