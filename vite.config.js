import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/vite-savor/'  // 生产环境使用仓库名作为基础路径
    : '/',                 // 开发环境使用根路径
  plugins: [vue()]
})


