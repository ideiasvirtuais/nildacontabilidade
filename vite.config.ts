import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// FTP_BUILD=1 → build SPA (para deploy estático no cPanel/Apache via `bun run build:ftp`).
// Sem a env → build SSR padrão (usado pelo publish do Lovable).
const isFtpBuild = process.env.FTP_BUILD === '1'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    // Tailwind v4: precisa do plugin para processar @import "tailwindcss" source(none)
    // e @source "../src". Sem ele o CSS sai envolto em @media source(none){...} (invalido).
    tailwindcss(),
    tanstackStart(
      isFtpBuild
        ? { spa: { enabled: true }, server: { entry: 'server' } }
        : { server: { entry: 'server' } },
    ),
    viteReact(),
  ],
})
