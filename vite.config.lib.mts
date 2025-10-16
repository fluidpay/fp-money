import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'node:url'

// Core library build configuration
export default defineConfig({
  publicDir: false,
  build: {
    target: 'es2020',
    lib: {
      entry: path.resolve(process.cwd(), 'src/fp-money/index.ts'),
      name: 'FPMoney',
      formats: ['es', 'umd'],
      fileName: (format) => `fp-money.${format === 'es' ? 'es' : 'umd'}.js`
    },
    rollupOptions: {
      output: {
        assetFileNames: 'style.css'
      }
    },
    outDir: path.resolve(process.cwd(), 'dist')
  },
  plugins: []
})
