import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  server: {
    host: '0.0.0.0'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/mixin.scss";'
      }
    }
  }
})
