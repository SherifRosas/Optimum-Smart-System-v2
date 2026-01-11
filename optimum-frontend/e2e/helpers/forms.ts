import { Page } from '@playwright/test';

/**
 * Fill out new order form
 */
export async function fillNewOrderForm(
  page: Page,
  data: {
    customerName: string;
    phoneNumber: string;
    productType: string;
    quantity: string;
    deliveryDate: string;
    notes?: string;
  }
) {
  // Wait for form to be visible
  const form = page.locator('form').first();
  await form.waitFor({ state: 'visible', timeout: 5000 });

  // Fill customer name
  const customerNameField = page.locator(
    'input[name="customerName"], input[placeholder*="Customer"], input[placeholder*="Name"]'
  ).first();
  await customerNameField.fill(data.customerName);

  // Fill phone number
  const phoneField = page.locator(
    'input[name="phoneNumber"], input[type="tel"], input[placeholder*="Phone"]'
  ).first();
  await phoneField.fill(data.phoneNumber);

  // Fill product type
  const productTypeField = page.locator(
    'input[name="productType"], input[placeholder*="Product"], input[placeholder*="Type"]'
  ).first();
  await productTypeField.fill(data.productType);

  // Fill quantity
  const quantityField = page.locator(
    'input[name="quantity"], input[type="number"], input[placeholder*="Quantity"]'
  ).first();
  await quantityField.fill(data.quantity);

  // Fill delivery date
  const deliveryDateField = page.locator(
    'input[name="deliveryDate"], input[type="date"], input[placeholder*="Delivery"]'
  ).first();
  await deliveryDateField.fill(data.deliveryDate);

  // Fill notes if provided
  if (data.notes) {
    const notesField = page.locator(
      'textarea[name="notes"], textarea[placeholder*="Notes"], textarea[placeholder*="notes"]'
    ).first();
    if (await notesField.count() > 0) {
      await notesField.fill(data.notes);
    }
  }

  // Wait for form to update
  await page.waitForTimeout(500);
}

/**
 * Submit new order form
 */
export async function submitNewOrderForm(page: Page) {
  const submitButton = page.locator(
    'button[type="submit"], button:has-text("Submit"), button:has-text("Create"), button:has-text("Create Order")'
  ).first();

  await submitButton.waitFor({ state: 'visible', timeout: 5000 });
  await submitButton.click();
  
  // Wait for submission
  await page.waitForTimeout(2000);
}

/**
 * Generate test order data
 */
export function generateTestOrderData() {
  const timestamp = Date.now();
  return {
    customerName: `Test Customer ${timestamp}`,
    phoneNumber: `+2012345${timestamp.toString().slice(-5)}`,
    productType: `Test Product ${timestamp}`,
    quantity: '5',
    deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
    notes: `Test order created at ${new Date().toISOString()}`
  };
}
