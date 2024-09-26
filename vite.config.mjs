import path from 'node:path'
import process from 'node:process'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    root: './src',
    manifest: true,
    build: {
      outDir: '../build',
    },
    publicDir: './public',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
    server: {
      https: false,
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})
