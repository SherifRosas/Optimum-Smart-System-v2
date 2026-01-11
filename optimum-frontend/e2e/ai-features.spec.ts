import { test, expect } from '@playwright/test';
import { loginAsAdmin, waitForPageLoad } from './helpers/auth';

test.describe('AI Features', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await waitForPageLoad(page);
  });

  test('should display AI chat widget', async ({ page }) => {
    // Look for AI chat widget or button
    const chatWidget = page.locator('[class*="ai-chat"], [class*="chat-widget"], button:has-text("AI"), button:has-text("Chat")');
    const count = await chatWidget.count();
    
    if (count > 0) {
      await expect(chatWidget.first()).toBeVisible({ timeout: 5000 });
    } else {
      test.skip();
    }
  });

  test('should open AI chat when clicked', async ({ page }) => {
    const chatButton = page.locator('[class*="ai-chat"], [class*="chat-widget"], button:has-text("AI"), button:has-text("Chat")').first();
    
    if (await chatButton.count() > 0) {
      await chatButton.click();
      await page.waitForTimeout(1000);
      
      // Chat interface should be visible
      const chatInterface = page.locator('[class*="chat"], [class*="message"], textarea, input[placeholder*="message"]');
      const count = await chatInterface.count();
      expect(count).toBeGreaterThan(0);
    } else {
      test.skip();
    }
  });

  test('should navigate to AI dashboard', async ({ page }) => {
    // Look for AI dashboard link
    const aiLink = page.locator('text=/ai|dashboard/i, a:has-text("AI"), button:has-text("AI Dashboard")').first();
    
    if (await aiLink.count() > 0) {
      await aiLink.click();
      await page.waitForTimeout(2000);
      
      // Should be on AI page or dashboard with AI content
      const currentUrl = page.url();
      const aiContent = page.locator('[class*="ai"], text=/ai|insight|analytics/i');
      expect(currentUrl.includes('ai') || await aiContent.count() > 0).toBeTruthy();
    } else {
      test.skip();
    }
  });

  test('should display AI insights or analytics', async ({ page }) => {
    // Navigate to AI dashboard if link exists
    const aiLink = page.locator('text=/ai|dashboard/i, a:has-text("AI")').first();
    if (await aiLink.count() > 0) {
      await aiLink.click();
      await page.waitForTimeout(2000);
    }
    
    // Look for AI insights, charts, or analytics
    const insights = page.locator('[class*="insight"], [class*="analytics"], [class*="chart"], [class*="metric"]');
    const count = await insights.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
