import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@kiraff/ui": path.resolve(__dirname, "../packages/kiraff-ui/src"),
    },
  },
  plugins: [react()],
})
