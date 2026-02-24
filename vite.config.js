import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/webbxy/',
  plugins: [react()],
  // dev server middleware: rewrite /webbxy/* -> /* so dev serves app at /webbxy
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.startsWith('/webbxy')) {
        // strip the prefix so Vite serves the index and assets correctly
        req.url = req.url.replace(/^\/webbxy/, '') || '/';
      }
      next();
    });
  },
})
