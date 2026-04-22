
import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.fill('input[name="username"]','Admin');
  await page.fill('input[name="password"]','admin123');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Dashboard')).toBeVisible();
});
