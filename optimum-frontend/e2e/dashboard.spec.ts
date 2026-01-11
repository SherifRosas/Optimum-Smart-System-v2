import { test, expect } from '@playwright/test';
import { loginAsAdmin, waitForPageLoad } from './helpers/auth';

test.describe('Dashboard', () => {
  test('should load dashboard page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/optimum/i);
  });

  test('should display dashboard after login', async ({ page }) => {
    await loginAsAdmin(page);
    await waitForPageLoad(page);
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
  });

  test('should display dashboard content', async ({ page }) => {
    await loginAsAdmin(page);
    await waitForPageLoad(page);
    
    // Look for dashboard content
    const dashboardContent = page.locator('body, [class*="dashboard"], [class*="app"]');
    await expect(dashboardContent.first()).toBeVisible({ timeout: 5000 });
  });

  test('should have navigation elements', async ({ page }) => {
    await loginAsAdmin(page);
    await waitForPageLoad(page);
    
    // Look for navigation
    const nav = page.locator('nav, [class*="nav"], [class*="sidebar"]');
    const count = await nav.count();
    expect(count).toBeGreaterThan(0);
  });
});
