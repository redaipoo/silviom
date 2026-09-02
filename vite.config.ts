import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: ['es2018', 'chrome70', 'safari12', 'firefox65'],
    cssTarget: ['chrome70', 'safari12', 'firefox65'],
    modulePreload: false,
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
  },
})
