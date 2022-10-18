import { defineConfig } from 'vite'
import {join} from 'p'
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
