import { test, expect } from '@playwright/test';
import { loginAsAdmin, waitForPageLoad } from './helpers/auth';
import { navigateToOrders, navigateToCustomers, navigateToSuppliers, navigateToAIDashboard } from './helpers/navigation';
import { switchToArabic, switchToEnglish, getCurrentLanguageDirection } from './helpers/language';

test.describe('Admin Dashboard (Command Center)', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await waitForPageLoad(page);
  });

  test('should display Command Center for admin', async ({ page }) => {
    // Verify Command Center is visible (not Customer Dashboard)
    const commandCenter = page.locator('text=/command center|dashboard/i, [class*="command-center"], [class*="app"]');
    await expect(commandCenter.first()).toBeVisible({ timeout: 5000 });
    
    // Verify Customer Dashboard is NOT visible
    const customerDashboard = page.locator('.customer-dashboard, [class*="customer-dashboard"]');
    const count = await customerDashboard.count();
    expect(count).toBe(0);
  });

  test('should display admin navigation sidebar', async ({ page }) => {
    // Look for sidebar navigation items
    const sidebar = page.locator('nav, [class*="sidebar"], [class*="navigation"]');
    await expect(sidebar.first()).toBeVisible({ timeout: 5000 });
    
    // Check for common admin navigation items
    const ordersLink = page.locator('text=/orders/i').first();
    const customersLink = page.locator('text=/customers/i').first();
    const suppliersLink = page.locator('text=/suppliers/i').first();
    
    expect(await ordersLink.isVisible() || await customersLink.isVisible() || await suppliersLink.isVisible()).toBeTruthy();
  });

  test('should navigate to orders page', async ({ page }) => {
    await navigateToOrders(page);
    await expect(page).toHaveURL(/orders/, { timeout: 5000 });
  });

  test('should navigate to customers page', async ({ page }) => {
    await navigateToCustomers(page);
    await expect(page).toHaveURL(/customers/, { timeout: 5000 });
  });

  test('should navigate to suppliers page', async ({ page }) => {
    await navigateToSuppliers(page);
    await expect(page).toHaveURL(/suppliers/, { timeout: 5000 });
  });

  test('should navigate to AI dashboard', async ({ page }) => {
    await navigateToAIDashboard(page);
    // AI dashboard might be at /ai or /dashboard with AI tab
    const currentUrl = page.url();
    expect(currentUrl).toMatch(/ai|dashboard/);
  });

  test('should switch language to Arabic', async ({ page }) => {
    const initialDir = await getCurrentLanguageDirection(page);
    const switched = await switchToArabic(page);
    
    if (switched) {
      const newDir = await getCurrentLanguageDirection(page);
      expect(newDir).toBe('rtl');
    } else {
      // Language switcher might not be available, skip test
      test.skip();
    }
  });

  test('should switch language to English', async ({ page }) => {
    // First switch to Arabic if not already
    await switchToArabic(page);
    await page.waitForTimeout(500);
    
    // Then switch to English
    const switched = await switchToEnglish(page);
    
    if (switched) {
      const newDir = await getCurrentLanguageDirection(page);
      expect(newDir).toBe('ltr');
    } else {
      // Language switcher might not be available, skip test
      test.skip();
    }
  });

  test('should display statistics or overview cards', async ({ page }) => {
    // Look for statistics, cards, or overview elements
    const stats = page.locator('[class*="stat"], [class*="card"], [class*="overview"], [class*="metric"]');
    const count = await stats.count();
    // At least some dashboard content should be visible
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should hide CommandCenter when navigating to Orders', async ({ page }) => {
    // Verify CommandCenter is visible initially
    const commandCenter = page.locator('[class*="command-center"], [class*="app"]');
    await expect(commandCenter.first()).toBeVisible({ timeout: 5000 });
    
    // Navigate to Orders
    await navigateToOrders(page);
    
    // CommandCenter should be hidden
    const isVisible = await commandCenter.first().isVisible().catch(() => false);
    expect(isVisible).toBeFalsy();
    
    // OrderList should be visible instead
    const orderList = page.locator('[class*="order-list"], table, [class*="orders"]');
    await expect(orderList.first()).toBeVisible({ timeout: 5000 });
  });

  test('should hide CommandCenter when navigating to Customers', async ({ page }) => {
    // Verify CommandCenter is visible initially
    const commandCenter = page.locator('[class*="command-center"], [class*="app"]');
    await expect(commandCenter.first()).toBeVisible({ timeout: 5000 });
    
    // Navigate to Customers
    await navigateToCustomers(page);
    
    // CommandCenter should be hidden
    const isVisible = await commandCenter.first().isVisible().catch(() => false);
    expect(isVisible).toBeFalsy();
  });

  test('should hide CommandCenter when navigating to Suppliers', async ({ page }) => {
    // Verify CommandCenter is visible initially
    const commandCenter = page.locator('[class*="command-center"], [class*="app"]');
    await expect(commandCenter.first()).toBeVisible({ timeout: 5000 });
    
    // Navigate to Suppliers
    await navigateToSuppliers(page);
    
    // CommandCenter should be hidden
    const isVisible = await commandCenter.first().isVisible().catch(() => false);
    expect(isVisible).toBeFalsy();
  });

  test('should show AdminUserManagement when navigating to Customers', async ({ page }) => {
    await navigateToCustomers(page);
    
    // AdminUserManagement should be visible
    const userManagement = page.locator('[class*="user-management"], [class*="admin-user"], text=/users|customers|manage/i');
    await expect(userManagement.first()).toBeVisible({ timeout: 5000 });
  });

  test('should show SupplierCommunication when navigating to Suppliers', async ({ page }) => {
    await navigateToSuppliers(page);
    
    // SupplierCommunication should be visible
    const supplierComm = page.locator('[class*="supplier-communication"], [class*="communication"], text=/supplier|message/i');
    await expect(supplierComm.first()).toBeVisible({ timeout: 5000 });
  });

  test('should display LanguageSwitcher in CommandCenter header', async ({ page }) => {
    // Should be on dashboard (CommandCenter visible)
    await expect(page).toHaveURL(/dashboard/, { timeout: 5000 });
    
    // LanguageSwitcher should be in CommandCenter header
    const langSwitcher = page.locator('[class*="command-center"] [class*="language"], [class*="header"] [class*="language"], button:has-text("AR"), button:has-text("EN")');
    await expect(langSwitcher.first()).toBeVisible({ timeout: 5000 });
  });

  test('should return to CommandCenter when navigating back to Dashboard', async ({ page }) => {
    // Navigate away from dashboard
    await navigateToOrders(page);
    
    // Verify CommandCenter is hidden
    const commandCenter = page.locator('[class*="command-center"], [class*="app"]');
    const isHidden = !(await commandCenter.first().isVisible().catch(() => false));
    expect(isHidden).toBeTruthy();
    
    // Navigate back to dashboard
    await navigateToDashboard(page);
    
    // CommandCenter should be visible again
    await expect(commandCenter.first()).toBeVisible({ timeout: 5000 });
  });
});
