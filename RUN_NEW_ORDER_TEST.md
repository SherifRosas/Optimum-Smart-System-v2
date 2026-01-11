# 🧪 Run New Order E2E Test

**Test File:** `optimum-frontend/e2e/new-order.spec.ts`  
**Status:** ✅ Ready to Run

---

## 🚀 Quick Run

### Prerequisites
1. ✅ Backend server running (http://localhost:8000)
2. ✅ Frontend server running (http://localhost:5173)
3. ✅ Admin user exists (`admin` / `admin123`)

### Run the Test

```powershell
cd Optimum-Smart-System-v2.4.0-TypeScript\optimum-frontend
npm run test:e2e new-order.spec.ts
```

### Run in UI Mode (See Browser)

```powershell
npm run test:e2e:ui new-order.spec.ts
```

### Run in Headed Mode (Watch Browser)

```powershell
npm run test:e2e:headed new-order.spec.ts
```

---

## 📋 What the Test Does

The automated test (`new-order.spec.ts`) includes 6 test cases:

1. **✅ Display New Order Button**
   - Verifies "New Order" button is visible in Command Center

2. **✅ Navigate to Order Form**
   - Clicks "New Order" button
   - Verifies Command Center hides
   - Verifies order form appears

3. **✅ Display All Required Fields**
   - Checks for Customer Name field
   - Checks for Phone Number field
   - Checks for Product Type field
   - Checks for Quantity field
   - Checks for Delivery Date field

4. **✅ Fill Out and Submit Form**
   - Fills all form fields with test data
   - Submits the form
   - Verifies API call is made or success message appears

5. **✅ Validate Required Fields**
   - Tries to submit empty form
   - Verifies validation errors appear

6. **✅ Navigate Back After Submission**
   - Submits complete form
   - Verifies navigation or form reset

---

## 🔧 Test Configuration

### Test Data
The test automatically generates unique test data:
- Customer Name: `Test Customer {timestamp}`
- Phone: `+2012345{random}`
- Product: `Test Product {timestamp}`
- Quantity: `5`
- Delivery Date: 7 days from now

### Selectors Used
- New Order Button: `button:has-text("New Order")`
- Form Fields: `input[name="customerName"]`, etc.
- Submit Button: `button[type="submit"]`

---

## ✅ Expected Results

All 6 tests should pass:
- ✅ New Order button visible
- ✅ Navigation works
- ✅ All fields visible
- ✅ Form submission works
- ✅ Validation works
- ✅ Post-submission navigation works

---

## 🐛 Troubleshooting

### Test Fails: "New Order button not found"
**Solution:**
- Verify Command Center is loaded
- Check if button text matches (might be translated)
- Increase timeout in test

### Test Fails: "Form not visible"
**Solution:**
- Check navigation is working
- Verify `currentView` state updates correctly
- Check browser console for errors

### Test Fails: "Form submission failed"
**Solution:**
- Verify backend server is running
- Check API endpoint is correct
- Verify admin user is authenticated
- Check network tab for API errors

---

## 📊 Test Output

When test runs successfully, you'll see:
```
Running 6 tests using 1 worker

  ✓ should display New Order button in Command Center
  ✓ should navigate to order form when clicking New Order button
  ✓ should display all required form fields
  ✓ should fill out and submit new order form
  ✓ should validate required fields
  ✓ should navigate back to dashboard after order creation

  6 passed (30s)
```

---

## 🔄 Continuous Testing

To run this test automatically:
1. Add to CI/CD pipeline
2. Run before deployments
3. Run after code changes
4. Schedule daily runs

---

**Ready to test!** 🚀

Run: `npm run test:e2e new-order.spec.ts`
