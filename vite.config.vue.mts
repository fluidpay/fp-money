import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'

// Vue component build configuration
export default defineConfig({
  publicDir: false,
  build: {
    target: 'es2020',
    lib: {
      entry: path.resolve(process.cwd(), 'src/fp-money/vue/index.ts'),
      name: 'FPMoneyVue',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'umd.cjs'}`
    },
    outDir: path.resolve(process.cwd(), 'dist/vue'),
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
        assetFileNames: 'style.css'
      }
    }
  },
  plugins: [vue()]
})
