import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/pet-project/',
  plugins: [react()],
  // dev server middleware: rewrite /pet-project/* -> /* so local dev matches GitHub Pages base
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.startsWith('/pet-project')) {
        req.url = req.url.replace(/^\/pet-project/, '') || '/';
      }
      next();
    });
  },
})
