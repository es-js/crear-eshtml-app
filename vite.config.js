import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import EsJS from '@es-js/vite-plugin-esjs'
import EsHTML from '@es-js/vite-plugin-eshtml'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/es-js/esjs
    EsJS(),

    // https://github.com/es-js/esjs
    EsHTML(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./fuente', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.esjs',
      '.eshtml',
    ],
  },
  server: {
    port: 3000,
  },
})
