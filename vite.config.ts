import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    port:8080,
  },
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
    extensions: ["*", ".js", ".ts" ,".vue"],
  },
})
