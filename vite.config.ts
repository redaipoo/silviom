import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/silviom/',
  build: {
    target: ['es2020', 'chrome80', 'safari13', 'firefox78'],
    cssTarget: ['chrome80', 'safari13', 'firefox78'],
  },
})
