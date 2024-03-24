import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://chasweley.github.io/dynamic-page/',
  plugins: [react()]
})
