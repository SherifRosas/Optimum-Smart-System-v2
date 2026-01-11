import { test, expect } from '@playwright/test';
import { loginAsAdmin, waitForPageLoad } from './helpers/auth';
import { navigateToOrders, navigateToCustomers, navigateToSuppliers, navigateToDashboard, navigateToAIDashboard } from './helpers/navigation';
import { switchToArabic, getCurrentLanguageDirection } from './helpers/language';

test.describe('Version 2.4.0 Specific Features', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await waitForPageLoad(page);
  });

  test('v2.4.0: All sidebar navigation items should display content', async ({ page }) => {
    // Test Orders navigation
    await navigateToOrders(page);
    const orderList = page.locator('[class*="order-list"], table, [class*="orders"]');
    await expect(orderList.first()).toBeVisible({ timeout: 5000 });
    
    // Test Customers navigation
    await navigateToCustomers(page);
    const userManagement = page.locator('[class*="user-management"], [class*="admin-user"]');
    await expect(userManagement.first()).toBeVisible({ timeout: 5000 });
    
    // Test Suppliers navigation
    await navigateToSuppliers(page);
    const supplierComm = page.locator('[class*="supplier-communication"], [class*="communication"]');
    await expect(supplierComm.first()).toBeVisible({ timeout: 5000 });
  });

  test('v2.4.0: CommandCenter should hide when navigating away', async ({ page }) => {
    // Start on dashboard
    await expect(page).toHaveURL(/dashboard/, { timeout: 5000 });
    const commandCenter = page.locator('[class*="command-center"], [class*="app"]');
    await expect(commandCenter.first()).toBeVisible({ timeout: 5000 });
    
    // Navigate to Orders - CommandCenter should hide
    await navigateToOrders(page);
    const isVisible = await commandCenter.first().isVisible().catch(() => false);
    expect(isVisible).toBeFalsy();
    
    // Navigate back - CommandCenter should show
    await navigateToDashboard(page);
    await expect(commandCenter.first()).toBeVisible({ timeout: 5000 });
  });

  test('v2.4.0: LanguageSwitcher should be visible on all pages', async ({ page }) => {
    const langSwitcher = page.locator('button:has-text("AR"), button:has-text("EN"), [class*="language"]');
    
    // Test on Dashboard (CommandCenter)
    await navigateToDashboard(page);
    await expect(langSwitcher.first()).toBeVisible({ timeout: 5000 });
    
    // Test on Orders page
    await navigateToOrders(page);
    await expect(langSwitcher.first()).toBeVisible({ timeout: 5000 });
    
    // Test on Customers page
    await navigateToCustomers(page);
    await expect(langSwitcher.first()).toBeVisible({ timeout: 5000 });
    
    // Test on Suppliers page
    await navigateToSuppliers(page);
    await expect(langSwitcher.first()).toBeVisible({ timeout: 5000 });
    
    // Test on AI Dashboard
    await navigateToAIDashboard(page);
    await expect(langSwitcher.first()).toBeVisible({ timeout: 5000 });
  });

  test('v2.4.0: All components should be translated', async ({ page }) => {
    // Switch to Arabic
    await switchToArabic(page);
    await page.waitForTimeout(1000);
    
    // Verify RTL is applied
    const dir = await getCurrentLanguageDirection(page);
    expect(dir).toBe('rtl');
    
    // Navigate to different pages and verify Arabic text appears
    await navigateToOrders(page);
    const arabicText = await page.locator('body').textContent();
    // Should contain Arabic characters (Unicode range for Arabic)
    const hasArabic = /[\u0600-\u06FF]/.test(arabicText || '');
    expect(hasArabic).toBeTruthy();
    
    // Navigate to Customers
    await navigateToCustomers(page);
    const arabicText2 = await page.locator('body').textContent();
    const hasArabic2 = /[\u0600-\u06FF]/.test(arabicText2 || '');
    expect(hasArabic2).toBeTruthy();
  });

  test('v2.4.0: CSS layout should not hide content', async ({ page }) => {
    // Navigate to Orders
    await navigateToOrders(page);
    
    // Check that OrderList is not hidden by CSS
    const orderList = page.locator('[class*="order-list"], table').first();
    const isVisible = await orderList.isVisible();
    expect(isVisible).toBeTruthy();
    
    // Check computed styles
    const styles = await orderList.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        position: computed.position,
        visibility: computed.visibility,
        display: computed.display,
        opacity: computed.opacity,
        height: computed.height,
        width: computed.width
      };
    });
    
    // Should be visible and have dimensions
    expect(styles.visibility).not.toBe('hidden');
    expect(styles.display).not.toBe('none');
    expect(parseFloat(styles.opacity)).toBeGreaterThan(0);
    expect(parseInt(styles.height)).toBeGreaterThan(0);
  });

  test('v2.4.0: Customers navigation should show AdminUserManagement', async ({ page }) => {
    // Navigate to Customers
    await navigateToCustomers(page);
    
    // Verify AdminUserManagement is visible (this was a bug fix in v2.4.0)
    const userManagement = page.locator('[class*="user-management"], [class*="admin-user"], text=/users|customers|manage/i');
    await expect(userManagement.first()).toBeVisible({ timeout: 5000 });
    
    // Verify it's not hidden by CSS
    const styles = await userManagement.first().evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        visibility: computed.visibility,
        display: computed.display,
        opacity: computed.opacity
      };
    });
    
    expect(styles.visibility).not.toBe('hidden');
    expect(styles.display).not.toBe('none');
  });
});
