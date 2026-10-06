import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' permite publicar o site em qualquer pasta ou subdomínio.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
