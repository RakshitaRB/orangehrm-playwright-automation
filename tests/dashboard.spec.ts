import { test, expect } from '@playwright/test';

test('Navigate to Admin page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await page.click('span:has-text("Admin")');
  await expect(page).toHaveURL(/admin/);
});
