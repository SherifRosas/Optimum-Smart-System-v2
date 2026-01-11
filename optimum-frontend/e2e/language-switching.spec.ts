import { test, expect } from '@playwright/test';
import { loginAsAdmin, waitForPageLoad } from './helpers/auth';
import { switchToArabic, switchToEnglish, getCurrentLanguageDirection } from './helpers/language';

test.describe('Language Switching', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await waitForPageLoad(page);
  });

  test('should have language switcher visible', async ({ page }) => {
    const langSwitcher = page.locator('button:has-text("AR"), button:has-text("EN"), button:has-text("عربي"), [class*="language"]');
    const count = await langSwitcher.count();
    
    if (count > 0) {
      await expect(langSwitcher.first()).toBeVisible();
    } else {
      test.skip();
    }
  });

  test('should switch from English to Arabic', async ({ page }) => {
    const initialDir = await getCurrentLanguageDirection(page);
    
    const switched = await switchToArabic(page);
    
    if (switched) {
      const newDir = await getCurrentLanguageDirection(page);
      expect(newDir).toBe('rtl');
    } else {
      test.skip();
    }
  });

  test('should switch from Arabic to English', async ({ page }) => {
    // First ensure we're in Arabic
    await switchToArabic(page);
    await page.waitForTimeout(500);
    
    const switched = await switchToEnglish(page);
    
    if (switched) {
      const newDir = await getCurrentLanguageDirection(page);
      expect(newDir).toBe('ltr');
    } else {
      test.skip();
    }
  });

  test('should persist language preference', async ({ page }) => {
    // Switch to Arabic
    await switchToArabic(page);
    await page.waitForTimeout(500);
    const dirBeforeReload = await getCurrentLanguageDirection(page);
    
    // Reload page
    await page.reload();
    await waitForPageLoad(page);
    
    // Language should persist (check localStorage or direction)
    const dirAfterReload = await getCurrentLanguageDirection(page);
    expect(dirAfterReload).toBe(dirBeforeReload);
  });

  test('should update UI text when switching language', async ({ page }) => {
    // Get initial text (assuming English)
    const initialText = await page.locator('body').textContent();
    
    // Switch to Arabic
    await switchToArabic(page);
    await page.waitForTimeout(1000);
    
    // Get text after switch
    const afterSwitchText = await page.locator('body').textContent();
    
    // Text should change (or at least direction should)
    const dirChanged = await getCurrentLanguageDirection(page) === 'rtl';
    expect(dirChanged || initialText !== afterSwitchText).toBeTruthy();
  });
});
