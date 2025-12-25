import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  /* HTML report */
  reporter: 'html',

  /* Shared settings */
  use: {
    /* Base URL for cleaner tests */
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    /* Capture screenshot on failure */
    screenshot: 'only-on-failure',

    /* Capture video on failure */
    video: 'retain-on-failure',

    /* Capture trace on first retry */
    trace: 'on-first-retry',

    /* Run tests in headed mode if needed */
    headless: true,
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
