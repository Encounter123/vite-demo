const { resolve } = require('path')
const { viteMockServe } = require('vite-plugin-mock')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    },
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
      supportTs: false
    })
  ]
})