import { Page } from '@playwright/test';

/**
 * Switch language to Arabic
 */
export async function switchToArabic(page: Page) {
  const langButton = page.locator('button:has-text("AR"), button:has-text("عربي"), [class*="language"]').first();
  if (await langButton.count() > 0) {
    await langButton.click();
    await page.waitForTimeout(500);
    // Verify RTL is applied
    const isRTL = await page.evaluate(() => document.documentElement.dir === 'rtl');
    return isRTL;
  }
  return false;
}

/**
 * Switch language to English
 */
export async function switchToEnglish(page: Page) {
  const langButton = page.locator('button:has-text("EN"), button:has-text("English"), [class*="language"]').first();
  if (await langButton.count() > 0) {
    await langButton.click();
    await page.waitForTimeout(500);
    // Verify LTR is applied
    const isLTR = await page.evaluate(() => document.documentElement.dir === 'ltr' || !document.documentElement.dir);
    return isLTR;
  }
  return false;
}

/**
 * Get current language direction
 */
export async function getCurrentLanguageDirection(page: Page): Promise<'rtl' | 'ltr'> {
  return await page.evaluate(() => {
    return (document.documentElement.dir || 'ltr') as 'rtl' | 'ltr';
  });
}
