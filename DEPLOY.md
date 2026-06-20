# Desplegar en Netlify

Pasos para subir el proyecto y dejarlo corriendo en Netlify.

## 1. Subir el código a GitHub
Ya hecho (este repo). Cada `git push` a `main` dispara un nuevo deploy automático.

## 2. Conectar el repo en Netlify
1. Entra a https://app.netlify.com → **Add new site → Import an existing project**.
2. Elige **GitHub** y selecciona el repositorio `locked_it`.
3. Netlify detecta la configuración desde `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs` (Server Actions + rutas dinámicas)
   - Node 20

## 3. Variables de entorno (OBLIGATORIO)
En **Site settings → Environment variables**, agrega las 7 variables de `.env.example`
con los valores reales de tu `.env.local`:

- `NEXT_PUBLIC_APPWRITE_ENDPOINT`
- `NEXT_PUBLIC_APPWRITE_PROJECT`
- `NEXT_PUBLIC_APPWRITE_DATABASE`
- `NEXT_PUBLIC_APPWRITE_USERS_COLLECTION`
- `NEXT_PUBLIC_APPWRITE_FILES_COLLECTION`
- `NEXT_PUBLIC_APPWRITE_BUCKET`
- `NEXT_APPWRITE_KEY`  ← secreta, marca "Contains secret values"

Sin estas variables el deploy compila pero la app falla en runtime.

## 4. Configurar Appwrite (CORS)
En la consola de Appwrite → tu proyecto → **Settings → Platforms → Add platform → Web**:
- Agrega el dominio que te dé Netlify, p. ej. `tu-sitio.netlify.app`
- Si usas dominio propio, agrégalo también.

Sin esto, el login OTP falla por CORS.

## 5. Deploy
Pulsa **Deploy site**. Cuando termine, abre la URL `*.netlify.app`.
Para futuros cambios: `git push` y Netlify redepliega solo.
