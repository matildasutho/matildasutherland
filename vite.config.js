import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Each page is its own HTML entry so it loads directly on any static host
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        cowgirlManifesto: fileURLToPath(
          new URL('./cowgirl-manifesto/index.html', import.meta.url)
        ),
        videos: fileURLToPath(new URL('./videos/index.html', import.meta.url)),
        listen: fileURLToPath(new URL('./listen/index.html', import.meta.url)),
      },
    },
  },
})
