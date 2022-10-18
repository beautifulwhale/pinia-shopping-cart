import { defineConfig } from 'vite'
import {join}
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':join(__dirname,'src')
    }
  }
})
