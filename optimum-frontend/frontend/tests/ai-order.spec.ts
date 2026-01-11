import { test, expect } from '@playwright/test';

test.describe('AI Chat Order Flow', () => {
    test('should create an order via AI chat', async ({ page }) => {
        // 1. Mock API Responses
        await page.route('**/api/auth/login/', async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    access: 'mock-token',
                    refresh: 'mock-refresh',
                    user: { id: 1, username: 'admin', role: 'ADMIN' }
                }),
            });
        });

        await page.route('**/api/ai/chat/', async route => {
            // Return a structured response that triggers the Confirmation UI
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    response: "I can create an order for 5 Laptops. Do you want to proceed?",
                    suggested_action: {
                        type: "create_order",
                        data: {
                            items: [{ product: "Laptop", quantity: 5 }],
                            supplier: "TechCorp"
                        }
                    }
                }),
            });
        });

        await page.route('**/api/orders/', async route => {
            await route.fulfill({ status: 201, body: JSON.stringify({ id: 999, status: 'PENDING' }) });
        });

        // 2. Navigate to Login (or assume already checking auth)
        // Since we mock login, we can perform the flow.
        await page.goto('/login');

        // Fill Login
        await page.getByPlaceholder('Username').fill('admin');
        await page.getByPlaceholder('Password').fill('password');
        await page.getByRole('button', { name: 'Sign In' }).click();

        // 3. Verify Dashboard Access (Wait for navigation)
        await expect(page).toHaveURL(/\/dashboard/);

        // 4. Open AI Chat
        // Assuming there is a chat widget or button locally.
        // If widget is always floating:
        const chatButton = page.locator('.ai-chat-trigger').or(page.getByLabel('Open Chat'));
        if (await chatButton.isVisible()) {
            await chatButton.click();
        } else {
            // Navigate to chat page if widget not found
            await page.goto('/ai-chat');
        }

        // 5. Interact with AI
        const input = page.getByPlaceholder('Ask anything...');
        await input.fill('Order 5 laptops');
        await page.keyboard.press('Enter');

        // 6. Verify Response & Action
        await expect(page.getByText('I can create an order for 5 Laptops')).toBeVisible();

        // 7. Click "Create Order" action button
        // Assuming the SuggestedAction component renders a button
        const actionButton = page.getByRole('button', { name: 'Create Order' });
        await expect(actionButton).toBeVisible();
        await actionButton.click();

        // 8. Verify Success Toast or Notification
        await expect(page.getByText(/Order created successfully/i)).toBeVisible();
    });
});
