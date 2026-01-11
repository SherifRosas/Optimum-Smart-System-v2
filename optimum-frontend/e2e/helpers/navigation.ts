import { Page } from '@playwright/test';

/**
 * Navigate to a specific page by clicking navigation link
 */
export async function navigateTo(page: Page, pageName: string) {
  const link = page.locator(`text=/${pageName}/i, a:has-text("${pageName}"), button:has-text("${pageName}")`).first();
  await link.click();
  await page.waitForLoadState('networkidle');
}

/**
 * Navigate to orders page
 */
export async function navigateToOrders(page: Page) {
  await navigateTo(page, 'orders');
  await page.waitForURL(/orders/, { timeout: 5000 });
}

/**
 * Navigate to customers page
 */
export async function navigateToCustomers(page: Page) {
  await navigateTo(page, 'customers');
  await page.waitForURL(/customers/, { timeout: 5000 });
}

/**
 * Navigate to suppliers page
 */
export async function navigateToSuppliers(page: Page) {
  await navigateTo(page, 'suppliers');
  await page.waitForURL(/suppliers/, { timeout: 5000 });
}

/**
 * Navigate to dashboard
 */
export async function navigateToDashboard(page: Page) {
  await navigateTo(page, 'dashboard');
  await page.waitForURL(/dashboard/, { timeout: 5000 });
}

/**
 * Navigate to AI dashboard
 */
export async function navigateToAIDashboard(page: Page) {
  await navigateTo(page, 'ai');
  await page.waitForURL(/ai/, { timeout: 5000 });
}
