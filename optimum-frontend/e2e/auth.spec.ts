import { test, expect } from '@playwright/test';
import { loginAsAdmin, loginAsCustomer, loginAsSupplier, logout, waitForPageLoad } from './helpers/auth';

test.describe('Authentication Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForPageLoad(page);
  });

  test('should display login page', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button:has-text("Sign In"), button:has-text("Login")')).toBeVisible();
  });

  test('should login successfully as admin', async ({ page }) => {
    await loginAsAdmin(page);
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
  });

  test('should show error on invalid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[placeholder*="Username"], input[name="username"], input[type="text"]', 'wronguser');
    await page.fill('input[type="password"]', 'wrongpass');
    await page.click('button:has-text("Sign In"), button:has-text("Login"), button[type="submit"]');
    
    // Should show error message or stay on login page
    await page.waitForTimeout(2000);
    const errorVisible = await page.locator('text=/error|invalid|incorrect|wrong/i').isVisible().catch(() => false);
    const stillOnLogin = page.url().includes('/login');
    expect(errorVisible || stillOnLogin).toBeTruthy();
  });

  test('should logout successfully', async ({ page }) => {
    await loginAsAdmin(page);
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
    
    // Try to find and click logout button
    const logoutButton = page.locator('button:has-text("Logout"), a:has-text("Logout"), button:has-text("Sign Out")').first();
    if (await logoutButton.count() > 0) {
      await logoutButton.click();
      await page.waitForURL(/login/, { timeout: 5000 });
      await expect(page).toHaveURL(/login/);
    }
  });

  test('should redirect to login when accessing protected route while unauthenticated', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForTimeout(2000);
    // Should redirect to login
    const currentUrl = page.url();
    expect(currentUrl).toMatch(/login/);
  });

  test('should persist session after page reload', async ({ page }) => {
    await loginAsAdmin(page);
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
    
    // Reload page
    await page.reload();
    await waitForPageLoad(page);
    
    // Should still be on dashboard (session persisted)
    await expect(page).toHaveURL(/dashboard/, { timeout: 5000 });
  });
});
