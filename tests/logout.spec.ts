import { test, expect } from '@playwright/test';

test('Logout from OrangeHRM application', async ({ page }) => {
  // Step 1: Open application
  await page.goto('/');

  // Step 2: Login
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Step 3: Verify dashboard loaded
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toHaveText('Dashboard');

  // Step 4: Open user dropdown (top right)
  await page.click('p.oxd-userdropdown-name');

  // Step 5: Click Logout
  await page.click('a:has-text("Logout")');

  // Step 6: Verify logout successful (login page)
  await expect(page).toHaveURL(/auth\/login/);
  await expect(page.locator('input[name="username"]')).toBeVisible();
});
