import { test, expect } from '@playwright/test';

test('Login and verify dashboard', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await expect(page.locator('input[name="username"]')).toBeVisible();

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toHaveText('Dashboard');
});
