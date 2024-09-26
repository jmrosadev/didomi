import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 15 * 1000,
  expect: {
    timeout: 5 * 1000,
  },
  fullyParallel: true,
  retries: 0,
  reporter: 'html',
  use: {
    baseURL: `http://localhost:5173/`,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

  webServer: {
    command: 'yarn dev',
    port: 5173,
    reuseExistingServer: true,
    stdout: 'pipe',
    stderr: 'pipe',
  },
})
