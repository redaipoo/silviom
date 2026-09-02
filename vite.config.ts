import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/silviom/',
  build: {
    target: ['es2019', 'chrome75', 'safari13', 'firefox68'],
    cssTarget: ['chrome75', 'safari13', 'firefox68'],
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
})
