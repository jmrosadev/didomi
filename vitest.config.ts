/// <reference types="vitest" />

import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: [
      './src/**/*.test.{ts,tsx}',
      './tests/**/*.test.{ts,tsx}',
    ],
    setupFiles: ['./tests/setup.ts'],
    restoreMocks: true,
    coverage: {
      include: [
        'src/**/*.{ts,tsx}',
        'tests/**/*.test.{ts,tsx}',
      ],
      all: true,
      reporter: ['html'],
    },
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
})
