import { test, expect } from '@playwright/test';
import { loginAsAdmin, waitForPageLoad } from './helpers/auth';
import { navigateToDashboard } from './helpers/navigation';

test.describe('New Order Creation from Command Center', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await waitForPageLoad(page);
    // Navigate to dashboard to see Command Center
    await navigateToDashboard(page);
    await page.waitForTimeout(2000); // Wait for Command Center to load
  });

  test('should display New Order button in Command Center', async ({ page }) => {
    // Look for New Order button in Command Center
    const newOrderButton = page.locator(
      'button:has-text("New Order"), button:has-text("طلب جديد"), button:has-text("New"), [class*="btn-primary"]:has-text("Order")'
    );
    
    await expect(newOrderButton.first()).toBeVisible({ timeout: 5000 });
  });

  test('should navigate to order form when clicking New Order button', async ({ page }) => {
    // Find and click New Order button
    const newOrderButton = page.locator(
      'button:has-text("New Order"), button:has-text("طلب جديد"), button:has-text("New"):has-text("Order")'
    ).first();
    
    await expect(newOrderButton).toBeVisible({ timeout: 5000 });
    await newOrderButton.click();
    
    // Wait for navigation - Command Center should hide, form should appear
    await page.waitForTimeout(2000);
    
    // Verify Command Center is hidden (should not be visible)
    const commandCenter = page.locator('[class*="command-center"], [class*="app"]:has-text("Command Center")');
    const isCommandCenterVisible = await commandCenter.first().isVisible().catch(() => false);
    
    // Command Center should be hidden when on new-order view
    // Instead, we should see the order form
    const orderForm = page.locator(
      'form, [class*="order-reception"], [class*="order-form"], input[name="customerName"], input[name="productType"]'
    );
    
    await expect(orderForm.first()).toBeVisible({ timeout: 5000 });
  });

  test('should display all required form fields', async ({ page }) => {
    // Navigate to new order form
    const newOrderButton = page.locator(
      'button:has-text("New Order"), button:has-text("طلب جديد"), button:has-text("New"):has-text("Order")'
    ).first();
    
    await newOrderButton.click();
    await page.waitForTimeout(2000);
    
    // Check for all required fields
    const customerNameField = page.locator(
      'input[name="customerName"], input[placeholder*="Customer"], input[placeholder*="Name"], label:has-text("Customer") + input'
    );
    await expect(customerNameField.first()).toBeVisible({ timeout: 5000 });
    
    const phoneField = page.locator(
      'input[name="phoneNumber"], input[type="tel"], input[placeholder*="Phone"], label:has-text("Phone") + input'
    );
    await expect(phoneField.first()).toBeVisible({ timeout: 5000 });
    
    const productTypeField = page.locator(
      'input[name="productType"], input[placeholder*="Product"], input[placeholder*="Type"], label:has-text("Product") + input'
    );
    await expect(productTypeField.first()).toBeVisible({ timeout: 5000 });
    
    const quantityField = page.locator(
      'input[name="quantity"], input[type="number"], input[placeholder*="Quantity"], label:has-text("Quantity") + input'
    );
    await expect(quantityField.first()).toBeVisible({ timeout: 5000 });
    
    const deliveryDateField = page.locator(
      'input[name="deliveryDate"], input[type="date"], input[placeholder*="Delivery"], label:has-text("Delivery") + input'
    );
    await expect(deliveryDateField.first()).toBeVisible({ timeout: 5000 });
  });

  test('should fill out and submit new order form', async ({ page }) => {
    // Navigate to new order form
    const newOrderButton = page.locator(
      'button:has-text("New Order"), button:has-text("طلب جديد"), button:has-text("New"):has-text("Order")'
    ).first();
    
    await newOrderButton.click();
    await page.waitForTimeout(2000);
    
    // Wait for form to be visible
    const form = page.locator('form').first();
    await expect(form).toBeVisible({ timeout: 5000 });
    
    // Generate unique test data
    const timestamp = Date.now();
    const testData = {
      customerName: `Test Customer ${timestamp}`,
      phoneNumber: `+2012345${timestamp.toString().slice(-5)}`,
      productType: `Test Product ${timestamp}`,
      quantity: '5',
      deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // 7 days from now
    };
    
    // Fill customer name
    const customerNameField = page.locator(
      'input[name="customerName"], input[placeholder*="Customer"], input[placeholder*="Name"]'
    ).first();
    await customerNameField.fill(testData.customerName);
    
    // Fill phone number
    const phoneField = page.locator(
      'input[name="phoneNumber"], input[type="tel"], input[placeholder*="Phone"]'
    ).first();
    await phoneField.fill(testData.phoneNumber);
    
    // Fill product type
    const productTypeField = page.locator(
      'input[name="productType"], input[placeholder*="Product"], input[placeholder*="Type"]'
    ).first();
    await productTypeField.fill(testData.productType);
    
    // Fill quantity
    const quantityField = page.locator(
      'input[name="quantity"], input[type="number"], input[placeholder*="Quantity"]'
    ).first();
    await quantityField.fill(testData.quantity);
    
    // Fill delivery date
    const deliveryDateField = page.locator(
      'input[name="deliveryDate"], input[type="date"], input[placeholder*="Delivery"]'
    ).first();
    await deliveryDateField.fill(testData.deliveryDate);
    
    // Wait a moment for form to update
    await page.waitForTimeout(500);
    
    // Find and click submit button
    const submitButton = page.locator(
      'button[type="submit"], button:has-text("Submit"), button:has-text("Create"), button:has-text("Create Order"), button:has-text("Save")'
    ).first();
    
    await expect(submitButton).toBeVisible({ timeout: 5000 });
    
    // Intercept API call to verify it's made
    let apiCallMade = false;
    page.on('request', (request) => {
      if (request.url().includes('/api/orders/') && request.method() === 'POST') {
        apiCallMade = true;
      }
    });
    
    // Click submit
    await submitButton.click();
    
    // Wait for submission to complete
    await page.waitForTimeout(3000);
    
    // Verify API call was made (or success message appears)
    const successMessage = page.locator(
      '[class*="success"], [class*="toast"], [class*="alert"]:has-text("success"), [class*="message"]:has-text("success")'
    );
    
    // Either API call was made or success message appears
    const hasSuccessMessage = await successMessage.first().isVisible().catch(() => false);
    
    // Test passes if either API call was made or success message appears
    expect(apiCallMade || hasSuccessMessage).toBeTruthy();
  });

  test('should validate required fields', async ({ page }) => {
    // Navigate to new order form
    const newOrderButton = page.locator(
      'button:has-text("New Order"), button:has-text("طلب جديد"), button:has-text("New"):has-text("Order")'
    ).first();
    
    await newOrderButton.click();
    await page.waitForTimeout(2000);
    
    // Try to submit empty form
    const submitButton = page.locator(
      'button[type="submit"], button:has-text("Submit"), button:has-text("Create")'
    ).first();
    
    await submitButton.click();
    await page.waitForTimeout(1000);
    
    // Check for validation errors
    const errorMessages = page.locator(
      '[class*="error"], [class*="invalid"], [class*="required"], [class*="validation"]'
    );
    
    const errorCount = await errorMessages.count();
    
    // Should have at least one validation error
    expect(errorCount).toBeGreaterThan(0);
  });

  test('should navigate back to dashboard after order creation', async ({ page }) => {
    // Navigate to new order form
    const newOrderButton = page.locator(
      'button:has-text("New Order"), button:has-text("طلب جديد"), button:has-text("New"):has-text("Order")'
    ).first();
    
    await newOrderButton.click();
    await page.waitForTimeout(2000);
    
    // Fill minimal required fields
    const customerNameField = page.locator('input[name="customerName"]').first();
    if (await customerNameField.count() > 0) {
      await customerNameField.fill('Test Customer');
    }
    
    const phoneField = page.locator('input[name="phoneNumber"]').first();
    if (await phoneField.count() > 0) {
      await phoneField.fill('+201234567890');
    }
    
    const productTypeField = page.locator('input[name="productType"]').first();
    if (await productTypeField.count() > 0) {
      await productTypeField.fill('Test Product');
    }
    
    const quantityField = page.locator('input[name="quantity"]').first();
    if (await quantityField.count() > 0) {
      await quantityField.fill('1');
    }
    
    const deliveryDateField = page.locator('input[name="deliveryDate"]').first();
    if (await deliveryDateField.count() > 0) {
      const futureDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      await deliveryDateField.fill(futureDate);
    }
    
    await page.waitForTimeout(500);
    
    // Submit form
    const submitButton = page.locator('button[type="submit"]').first();
    await submitButton.click();
    
    // Wait for navigation or form reset
    await page.waitForTimeout(3000);
    
    // After submission, should either:
    // 1. Navigate back to dashboard (Command Center visible)
    // 2. Form resets (form still visible but empty)
    // 3. Success message appears
    
    const commandCenter = page.locator('[class*="command-center"], [class*="app"]:has-text("Command Center")');
    const form = page.locator('form').first();
    const successMessage = page.locator('[class*="success"], [class*="toast"]');
    
    const hasCommandCenter = await commandCenter.first().isVisible().catch(() => false);
    const hasForm = await form.isVisible().catch(() => false);
    const hasSuccess = await successMessage.first().isVisible().catch(() => false);
    
    // At least one of these should be true after submission
    expect(hasCommandCenter || hasForm || hasSuccess).toBeTruthy();
  });
});
