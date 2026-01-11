# E2E Testing Guide

This directory contains end-to-end (E2E) tests for the Optimum Smart System frontend using Playwright.

## Test Structure

### Test Files
- `auth.spec.ts` - Authentication flow tests (login, logout, session persistence)
- `admin-dashboard.spec.ts` - Admin dashboard (Command Center) tests
- `orders.spec.ts` - Order management tests
- `new-order.spec.ts` - New order creation from Command Center (automated test) ⭐
- `customer-dashboard.spec.ts` - Customer dashboard tests
- `supplier.spec.ts` - Supplier-specific feature tests
- `language-switching.spec.ts` - Language switching (Arabic/English) tests
- `ai-features.spec.ts` - AI chat and dashboard tests
- `dashboard.spec.ts` - General dashboard tests
- `v2.4.0-specific.spec.ts` - Version 2.4.0 specific feature tests (navigation fixes, CSS layout, translations)

### Helper Utilities
Located in `helpers/` directory:
- `auth.ts` - Authentication helpers (login, logout)
- `navigation.ts` - Navigation helpers (navigate to different pages)
- `language.ts` - Language switching helpers

## Running Tests

### Prerequisites
1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers (first time only):
   ```bash
   npx playwright install
   ```

### Run All Tests
```bash
npm run test:e2e
```

### Run Tests in UI Mode (Interactive)
```bash
npm run test:e2e:ui
```

### Run Tests in Headed Mode (See Browser)
```bash
npm run test:e2e:headed
```

### Run Tests in Debug Mode
```bash
npm run test:e2e:debug
```

### Run Tests for Specific Browser
```bash
# Chrome/Chromium
npm run test:e2e:chromium

# Firefox
npm run test:e2e:firefox

# Safari/WebKit
npm run test:e2e:webkit
```

### Run Specific Test File
```bash
npx playwright test auth.spec.ts
```

### Run Specific Test
```bash
npx playwright test auth.spec.ts -g "should login successfully"
```

## Test Configuration

Tests are configured in `playwright.config.ts`:
- **Test Directory**: `./e2e`
- **Base URL**: `http://localhost:3000` (or from `VITE_API_URL` env var)
- **Browsers**: Chromium, Firefox, WebKit
- **Retries**: 2 retries in CI, 0 locally
- **Screenshots**: On failure only
- **Videos**: Retained on failure

## CI/CD Integration

E2E tests run automatically in GitHub Actions on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`

The CI pipeline:
1. Sets up PostgreSQL database
2. Runs backend migrations
3. Creates test users (admin, customer, supplier)
4. Starts backend server
5. Builds frontend
6. Runs E2E tests
7. Uploads test reports and videos as artifacts

## Test Users

The CI pipeline creates the following test users:
- **Admin**: `admin` / `password` (role: ADMIN)
- **Customer**: `customer` / `password` (role: PRODUCT_REQUESTER)
- **Supplier**: `supplier` / `password` (role: SUPPLIER)

For local testing, ensure these users exist in your database or create them manually.

## Writing New Tests

### Basic Test Structure
```typescript
import { test, expect } from '@playwright/test';
import { loginAsAdmin } from './helpers/auth';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('should do something', async ({ page }) => {
    // Test implementation
  });
});
```

### Using Helpers
```typescript
import { loginAsAdmin } from './helpers/auth';
import { navigateToOrders } from './helpers/navigation';
import { switchToArabic } from './helpers/language';

// Login
await loginAsAdmin(page);

// Navigate
await navigateToOrders(page);

// Switch language
await switchToArabic(page);
```

### Best Practices
1. Use `waitForPageLoad()` after navigation
2. Use descriptive test names
3. Group related tests in `test.describe()` blocks
4. Use `test.skip()` for tests that require specific conditions
5. Use `test.beforeEach()` for common setup
6. Clean up after tests if needed

## Debugging Tests

### View Test Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

### Debug Mode
Run tests in debug mode to step through:
```bash
npm run test:e2e:debug
```

### Screenshots and Videos
- Screenshots: Saved on test failure in `test-results/`
- Videos: Saved on test failure in `test-results/`
- Traces: Available on retry in CI

## Troubleshooting

### Tests Fail Locally
1. Ensure backend is running on `http://localhost:8000`
2. Ensure frontend is running on `http://localhost:3000`
3. Check that test users exist in database
4. Clear browser cache and cookies

### Tests Timeout
- Increase timeout in `playwright.config.ts`
- Check network connectivity
- Verify backend/frontend are running

### Selectors Not Found
- Use browser DevTools to inspect elements
- Use Playwright's codegen: `npx playwright codegen http://localhost:3000`
- Check if elements are dynamically loaded (add waits)

## CI/CD Artifacts

When tests run in CI:
- **Test Report**: Available as `playwright-report` artifact
- **Videos**: Available as `playwright-videos` artifact (retained for 7 days)
- **Test Results**: JSON results available in `test-results/results.json`

Download artifacts from GitHub Actions run page to debug failures.
