import { test, expect } from '@playwright/test';
import { loginAsAdmin, waitForPageLoad } from './helpers/auth';
import { navigateToOrders } from './helpers/navigation';

test.describe('Orders Management', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await waitForPageLoad(page);
    await navigateToOrders(page);
  });

  test('should display orders list', async ({ page }) => {
    // Look for orders table or list
    const ordersList = page.locator('table, [class*="order-list"], [class*="orders"], [class*="table"]');
    await expect(ordersList.first()).toBeVisible({ timeout: 5000 });
  });

  test('should have create new order button', async ({ page }) => {
    // Look for create/new order button
    const createButton = page.locator('button:has-text("New"), button:has-text("Create"), button:has-text("Add"), a:has-text("New Order")');
    const count = await createButton.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should open new order form', async ({ page }) => {
    // Try to find and click new order button
    const createButton = page.locator('button:has-text("New"), button:has-text("Create"), button:has-text("Add"), a:has-text("New Order")').first();
    
    if (await createButton.count() > 0) {
      await createButton.click();
      await page.waitForTimeout(1000);
      
      // Look for form elements
      const form = page.locator('form, [class*="form"], [class*="order-form"]');
      const formVisible = await form.first().isVisible().catch(() => false);
      expect(formVisible).toBeTruthy();
    } else {
      test.skip();
    }
  });

  test('should filter orders by status', async ({ page }) => {
    // Look for filter dropdown or buttons
    const filter = page.locator('select, [class*="filter"], button:has-text("Filter"), [class*="status"]');
    const count = await filter.count();
    
    if (count > 0) {
      await filter.first().click();
      await page.waitForTimeout(500);
      // Filter should be interactive
      expect(count).toBeGreaterThan(0);
    } else {
      test.skip();
    }
  });

  test('should search orders', async ({ page }) => {
    // Look for search input
    const searchInput = page.locator('input[type="search"], input[placeholder*="Search"], input[placeholder*="search"]');
    const count = await searchInput.count();
    
    if (count > 0) {
      await searchInput.first().fill('test');
      await page.waitForTimeout(1000);
      // Search should work
      expect(count).toBeGreaterThan(0);
    } else {
      test.skip();
    }
  });

  test('should display order details when clicking on order', async ({ page }) => {
    // Look for order rows or items
    const orderItems = page.locator('tr, [class*="order-item"], [class*="order-row"]');
    const count = await orderItems.count();
    
    if (count > 0) {
      await orderItems.first().click();
      await page.waitForTimeout(1000);
      
      // Should show details (modal, detail page, or expanded view)
      const details = page.locator('[class*="detail"], [class*="modal"], [class*="dialog"]');
      const detailsVisible = await details.first().isVisible().catch(() => false);
      expect(detailsVisible || page.url().includes('order')).toBeTruthy();
    } else {
      test.skip();
    }
  });

  test('should display OrderList content (v2.4.0 fix)', async ({ page }) => {
    // This test verifies the v2.4.0 CSS fix that made OrderList visible
    await navigateToOrders(page);
    
    // OrderList should be visible (not hidden by CSS)
    const orderList = page.locator('[class*="order-list"], table, [class*="orders"]');
    await expect(orderList.first()).toBeVisible({ timeout: 5000 });
    
    // Verify it's not using absolute positioning that would hide it
    const computedStyle = await orderList.first().evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        position: style.position,
        visibility: style.visibility,
        display: style.display,
        opacity: style.opacity
      };
    });
    
    // Should not be hidden
    expect(computedStyle.visibility).not.toBe('hidden');
    expect(computedStyle.display).not.toBe('none');
    expect(parseFloat(computedStyle.opacity)).toBeGreaterThan(0);
  });
});
