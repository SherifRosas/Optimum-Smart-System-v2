# 🧪 Test Guide: Create New Order from Command Center

**Date:** January 11, 2026  
**Version:** 2.4.0

---

## ✅ How to Test

### Step 1: Access Command Center
1. Open browser: http://localhost:5173
2. Login as admin:
   - Username: `admin`
   - Password: `admin123`
3. You should see the **Command Center** dashboard

### Step 2: Click "New Order" Button
1. Look for the **"New Order"** button in the top-right area of Command Center
2. It should have a ➕ icon and say "New Order" (or "طلب جديد" in Arabic)
3. Click the button

### Step 3: Verify Navigation
- ✅ Command Center should disappear
- ✅ Order Reception form should appear
- ✅ Form should have fields for:
  - Customer Name
  - Phone Number
  - Product Type
  - Quantity
  - Delivery Date
  - Notes (optional)

### Step 4: Fill Out the Form
1. **Customer Name:** Enter a name (e.g., "Ahmed Hassan")
2. **Phone Number:** Enter phone (e.g., "+201234567890")
3. **Product Type:** Enter product (e.g., "Laptop", "Desktop", "Monitor")
4. **Quantity:** Enter number (e.g., "5")
5. **Delivery Date:** Select a future date
6. **Notes:** Optional notes

### Step 5: Submit the Order
1. Click "Submit" or "Create Order" button
2. You should see a success message
3. Form should reset or navigate back

### Step 6: Verify Order Created
1. Navigate to "Orders" in sidebar
2. Your new order should appear in the list
3. Check order details are correct

---

## 🔍 Expected Behavior

### When Clicking "New Order":
- ✅ Command Center hides (currentView changes to 'new-order')
- ✅ Order Reception form appears
- ✅ Form is fully functional
- ✅ All fields are visible and editable

### After Submitting:
- ✅ Success toast notification appears
- ✅ Order is created in backend
- ✅ Order appears in Orders list
- ✅ Form resets or navigates back

---

## 🐛 Troubleshooting

### Issue: "New Order" button doesn't do anything
**Solution:**
- Check browser console for errors (F12)
- Verify `onNavigate` prop is passed to CommandCenter
- Check if `currentView` state is updating

### Issue: Form doesn't appear
**Solution:**
- Check if `OrderReception` component is imported correctly
- Verify the 'new-order' case exists in App.tsx switch statement
- Check browser console for component errors

### Issue: Form appears but can't submit
**Solution:**
- Check backend server is running (http://localhost:8000)
- Verify API endpoint is correct
- Check browser console for API errors
- Verify user is authenticated

### Issue: Order created but doesn't appear in list
**Solution:**
- Refresh the Orders list
- Check backend database
- Verify order was actually created
- Check API response in browser console

---

## 📋 Test Checklist

- [ ] Can access Command Center
- [ ] "New Order" button is visible
- [ ] Clicking button navigates to form
- [ ] Form fields are all visible
- [ ] Can fill out all fields
- [ ] Form validation works
- [ ] Can submit the form
- [ ] Success message appears
- [ ] Order appears in Orders list
- [ ] Order details are correct

---

## 🔧 Technical Details

### Navigation Flow:
1. User clicks "New Order" in CommandCenter
2. `onNavigate('new-order')` is called
3. `setCurrentView('new-order')` updates state
4. CommandCenter returns `null` (currentView !== 'dashboard')
5. App.tsx switch statement matches 'new-order' case
6. `OrderReception` component renders

### Components Involved:
- **CommandCenter.tsx** - Has the "New Order" button
- **App.tsx** - Handles navigation and renders OrderReception
- **OrderReception.jsx** - The order creation form
- **ordersAPI** - Handles API call to create order

### API Endpoint:
- **POST** `/api/orders/`
- **Payload:** Order data (customer, product_type, quantity, delivery_date, notes)

---

## ✅ Success Criteria

The test is successful if:
1. ✅ Button is clickable and visible
2. ✅ Navigation works smoothly
3. ✅ Form appears and is functional
4. ✅ Order can be created successfully
5. ✅ Order appears in the list
6. ✅ No console errors

---

**Ready to test!** 🚀
