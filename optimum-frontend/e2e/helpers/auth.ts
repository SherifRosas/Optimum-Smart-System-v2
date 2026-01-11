import { Page } from '@playwright/test';

/**
 * Login as admin user
 */
export async function loginAsAdmin(page: Page) {
  await page.goto('/login');
  await page.waitForLoadState('domcontentloaded');
  
  // Wait for login form to be visible - use the actual ID from Login.tsx
  await page.waitForSelector('#username', { timeout: 10000 });
  
  // Fill username using the ID
  await page.fill('#username', 'admin');
  
  // Fill password using the ID
  await page.fill('#password', 'password');
  
  // Click submit button - the button text is "Sign In"
  const submitButton = page.locator('button[type="submit"]:has-text("Sign In"), button:has-text("Sign In")').first();
  await submitButton.waitFor({ state: 'visible', timeout: 5000 });
  
  // Click and wait for navigation - login uses window.location.href which triggers a full page reload
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 }),
    submitButton.click()
  ]);
  
  // Wait a bit for the page to settle after navigation
  await page.waitForTimeout(2000);
  
  // Verify we're not on login page anymore
  const currentUrl = page.url();
  if (currentUrl.includes('/login')) {
    // Check for error message
    const errorMsg = await page.locator('[class*="error"], [class*="alert"], .auth-error-text').first().textContent().catch(() => null);
    throw new Error(`Login failed. Still on login page. Error: ${errorMsg || 'Unknown error'}`);
  }
  
  // Wait for page to fully load
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {
    // If networkidle times out, that's okay - just wait for load
    return page.waitForLoadState('load');
  });
}

/**
 * Login as supplier user
 */
export async function loginAsSupplier(page: Page, username: string = 'supplier', password: string = 'password') {
  await page.goto('/login');
  await page.waitForLoadState('domcontentloaded');
  
  await page.waitForSelector('#username', { timeout: 10000 });
  await page.fill('#username', username);
  await page.fill('#password', password);
  
  const submitButton = page.locator('button[type="submit"]:has-text("Sign In")').first();
  await submitButton.waitFor({ state: 'visible', timeout: 5000 });
  
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 }),
    submitButton.click()
  ]);
  
  await page.waitForTimeout(2000);
  const currentUrl = page.url();
  if (currentUrl.includes('/login')) {
    const errorMsg = await page.locator('[class*="error"], .auth-error-text').first().textContent().catch(() => null);
    throw new Error(`Login failed for supplier. Error: ${errorMsg || 'Unknown error'}`);
  }
  
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {
    return page.waitForLoadState('load');
  });
}

/**
 * Login as customer/product requester
 */
export async function loginAsCustomer(page: Page, username: string = 'customer', password: string = 'password') {
  await page.goto('/login');
  await page.waitForLoadState('domcontentloaded');
  
  await page.waitForSelector('#username', { timeout: 10000 });
  await page.fill('#username', username);
  await page.fill('#password', password);
  
  const submitButton = page.locator('button[type="submit"]:has-text("Sign In")').first();
  await submitButton.waitFor({ state: 'visible', timeout: 5000 });
  
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 20000 }),
    submitButton.click()
  ]);
  
  await page.waitForTimeout(2000);
  const currentUrl = page.url();
  if (currentUrl.includes('/login')) {
    const errorMsg = await page.locator('[class*="error"], .auth-error-text').first().textContent().catch(() => null);
    throw new Error(`Login failed for customer. Error: ${errorMsg || 'Unknown error'}`);
  }
  
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {
    return page.waitForLoadState('load');
  });
}

/**
 * Logout from the application
 */
export async function logout(page: Page) {
  await page.click('button:has-text("Logout"), a:has-text("Logout"), button:has-text("Sign Out")');
  await page.waitForURL(/login/, { timeout: 5000 });
}

/**
 * Wait for page to be fully loaded
 */
export async function waitForPageLoad(page: Page) {
  await page.waitForLoadState('networkidle');
  await page.waitForLoadState('domcontentloaded');
}
