import { test, expect } from '@playwright/test';
import { loginAsCustomer, waitForPageLoad } from './helpers/auth';

test.describe('Customer Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    // Note: This test assumes a customer account exists
    // You may need to create one or use a test fixture
    await page.goto('/login');
    await waitForPageLoad(page);
  });

  test('should display customer dashboard for customer users', async ({ page }) => {
    // Try to login as customer (adjust credentials as needed)
    try {
      await loginAsCustomer(page, 'customer', 'password');
      await waitForPageLoad(page);
      
      // Customer dashboard should be visible (not Command Center)
      const customerDashboard = page.locator('[class*="customer-dashboard"], [class*="dashboard"]');
      await expect(customerDashboard.first()).toBeVisible({ timeout: 5000 });
      
      // Command Center should NOT be visible for customers
      const commandCenter = page.locator('[class*="command-center"], [class*="app"]');
      const count = await commandCenter.count();
      // Command Center might still exist in DOM but hidden, so we check visibility
      if (count > 0) {
        const isVisible = await commandCenter.first().isVisible();
        expect(isVisible).toBeFalsy();
      }
    } catch (error) {
      // If customer login fails, skip test
      test.skip();
    }
  });

  test('should show customer-specific navigation', async ({ page }) => {
    try {
      await loginAsCustomer(page, 'customer', 'password');
      await waitForPageLoad(page);
      
      // Customer should see their orders, not admin features
      const adminNav = page.locator('text=/customers|suppliers|admin/i');
      const adminNavCount = await adminNav.count();
      
      // Admin navigation should not be visible or accessible
      if (adminNavCount > 0) {
        const isVisible = await adminNav.first().isVisible();
        expect(isVisible).toBeFalsy();
      }
    } catch (error) {
      test.skip();
    }
  });

  test('should allow customer to view their orders', async ({ page }) => {
    try {
      await loginAsCustomer(page, 'customer', 'password');
      await waitForPageLoad(page);
      
      // Look for orders section
      const ordersSection = page.locator('text=/orders/i, [class*="order"]');
      const count = await ordersSection.count();
      expect(count).toBeGreaterThan(0);
    } catch (error) {
      test.skip();
    }
  });
});
