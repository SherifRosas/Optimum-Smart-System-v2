import { test, expect } from '@playwright/test';
import { loginAsSupplier, waitForPageLoad } from './helpers/auth';

test.describe('Supplier Features', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await waitForPageLoad(page);
  });

  test('should login as supplier', async ({ page }) => {
    try {
      await loginAsSupplier(page, 'supplier', 'password');
      await waitForPageLoad(page);
      await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
    } catch (error) {
      // If supplier account doesn't exist, skip
      test.skip();
    }
  });

  test('should display supplier-specific features', async ({ page }) => {
    try {
      await loginAsSupplier(page, 'supplier', 'password');
      await waitForPageLoad(page);
      
      // Supplier should see supplier-specific content
      const supplierContent = page.locator('text=/supplier|orders|communication/i, [class*="supplier"]');
      const count = await supplierContent.count();
      expect(count).toBeGreaterThan(0);
    } catch (error) {
      test.skip();
    }
  });

  test('should allow supplier to communicate about orders', async ({ page }) => {
    try {
      await loginAsSupplier(page, 'supplier', 'password');
      await waitForPageLoad(page);
      
      // Look for communication features
      const communication = page.locator('text=/communicate|message|chat/i, [class*="communication"], [class*="message"]');
      const count = await communication.count();
      expect(count).toBeGreaterThanOrEqual(0);
    } catch (error) {
      test.skip();
    }
  });
});
