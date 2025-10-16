import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'

// Documentation site build configuration
export default defineConfig({
  root: './src/docs',
  publicDir: '../../public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 1111
  },
  build: {
    outDir: '../../docs',
    emptyOutDir: true,
    chunkSizeWarningLimit: 12000,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  plugins: [vue()]
})
