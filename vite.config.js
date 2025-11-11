import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    allowedHosts: ['ying-sequential-taciturnly.ngrok-free.dev'],
    host: true
  },

})