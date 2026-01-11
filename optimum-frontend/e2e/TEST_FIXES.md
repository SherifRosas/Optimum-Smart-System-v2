# E2E Test Fixes - Login Helper Updates

## Issue
Tests were failing because the login helper wasn't using the correct selectors and wasn't handling the full page reload properly.

## Fixes Applied

### 1. Updated Login Selectors
- Changed from generic selectors to specific IDs: `#username` and `#password`
- These match the actual Login component structure (`Login.tsx`)

### 2. Improved Navigation Handling
- The login uses `window.location.href = '/dashboard'` which triggers a full page reload
- Updated to use `Promise.all()` with `waitForNavigation()` to properly wait for the reload
- Increased timeout to 20 seconds to handle slower connections

### 3. Better Error Handling
- Checks if still on login page after submission
- Extracts and reports error messages from the page
- More descriptive error messages

## Prerequisites for Running Tests

### 1. Backend Server Must Be Running
```powershell
cd optimum-backend
python manage.py runserver 8000
```

### 2. Test Users Must Exist
The CI pipeline creates test users automatically, but for local testing you need to create them:

```python
# In Django shell: python manage.py shell
from django.contrib.auth.models import User
from authentication.models import UserProfile

# Create admin user
admin, _ = User.objects.get_or_create(username='admin', defaults={'email': 'admin@test.com'})
admin.set_password('password')
admin.save()
profile, _ = UserProfile.objects.get_or_create(user=admin, defaults={'role': 'ADMIN', 'status': 'ACTIVE'})

# Create customer user
customer, _ = User.objects.get_or_create(username='customer', defaults={'email': 'customer@test.com'})
customer.set_password('password')
customer.save()
profile, _ = UserProfile.objects.get_or_create(user=customer, defaults={'role': 'PRODUCT_REQUESTER', 'status': 'ACTIVE'})

# Create supplier user
supplier, _ = User.objects.get_or_create(username='supplier', defaults={'email': 'supplier@test.com'})
supplier.set_password('password')
supplier.save()
profile, _ = UserProfile.objects.get_or_create(user=supplier, defaults={'role': 'SUPPLIER', 'status': 'ACTIVE'})
```

### 3. Frontend Server
Playwright config will start the frontend automatically (unless in CI mode), but you can also start it manually:

```powershell
cd optimum-frontend
npm run dev
```

## Running Tests

### All Tests
```powershell
cd optimum-frontend
npm run test:e2e
```

### Single Browser
```powershell
npm run test:e2e:chromium
```

### With UI (Interactive)
```powershell
npm run test:e2e:ui
```

## Common Issues

### 1. Login Timeout
**Symptom:** `TimeoutError: page.waitForURL: Timeout 10000ms exceeded`

**Solutions:**
- Ensure backend is running on port 8000
- Check that test users exist in database
- Verify backend API is accessible at `http://localhost:8000/api`
- Check browser console for errors

### 2. Element Not Found
**Symptom:** `TimeoutError: Waiting for selector '#username'`

**Solutions:**
- Ensure frontend is running
- Check that you're on the correct URL (`/login`)
- Verify the Login component is rendering correctly

### 3. Navigation Not Detected
**Symptom:** Tests pass login but fail on subsequent steps

**Solutions:**
- The login might have failed silently - check for error messages
- Verify the redirect URL is correct
- Check browser console for JavaScript errors

## Test Results Summary

After fixes:
- **Total Tests:** 162 (54 tests × 3 browsers)
- **Expected Pass Rate:** Should improve significantly with fixed login helpers
- **Known Issues:** Some tests may still fail if backend/frontend aren't running

## Next Steps

1. Ensure backend and frontend are running
2. Create test users in database
3. Run tests: `npm run test:e2e`
4. Review failures and check screenshots/videos in `test-results/` directory
5. Fix any remaining issues based on test output
