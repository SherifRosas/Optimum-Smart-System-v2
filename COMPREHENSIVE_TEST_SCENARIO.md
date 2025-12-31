# 🧪 Comprehensive Test Scenario - Optimum Smart System

**Date:** December 30, 2024  
**Purpose:** Complete end-to-end testing of all features before production deployment  
**Estimated Time:** 2-3 hours

---

## 📋 Pre-Test Checklist

Before starting, ensure:

- [ ] Backend server is running (http://localhost:8000)
- [ ] Frontend server is running (http://localhost:3000)
- [ ] Backend health check passes: http://localhost:8000/health/
- [ ] Frontend loads without errors
- [ ] Browser console shows no critical errors
- [ ] Master admin account exists (email: `sherifrosas.ai@gmail.com`)

---

## 🎯 Test Scenario Flow

### Phase 1: Master Admin Testing

#### Test 1.1: Access Main Page
**Steps:**
1. Open browser and navigate to http://localhost:3000
2. Verify Role Selection page loads correctly
3. Check all role options are visible:
   - Admin
   - Supplier  
   - Customer (Product Requester)
4. Click "Login" button
5. Verify navigation to login page works

**Expected Results:**
- ✅ Page loads without errors
- ✅ All role options visible
- ✅ Navigation works smoothly
- ✅ No console errors

**Notes:**
```
[Document any issues here]
```

---

#### Test 1.2: Master Admin Login
**Steps:**
1. On login page, enter credentials:
   - Email: `sherifrosas.ai@gmail.com`
   - Password: [your master admin password]
2. Click "Login" button
3. Wait for authentication
4. Verify redirect to dashboard
5. Check user profile/header shows admin role

**Expected Results:**
- ✅ Login successful
- ✅ Redirected to dashboard
- ✅ User profile shows admin role
- ✅ No authentication errors

**Notes:**
```
[Document any issues here]
```

---

#### Test 1.3: Master Admin Dashboard
**Steps:**
1. Verify dashboard loads with statistics
2. Check digital counters animate correctly:
   - Total Orders
   - Active Orders
   - Total Revenue
   - Pending Orders
3. Verify all navigation links are accessible
4. Test responsive design:
   - Resize browser to mobile size
   - Check layout adapts correctly
5. Click through all main navigation items

**Expected Results:**
- ✅ Dashboard loads with data
- ✅ Counters animate smoothly
- ✅ All navigation links work
- ✅ Responsive design works
- ✅ No performance issues

**Notes:**
```
[Document any issues here]
```

---

#### Test 1.4: Admin User Management
**Steps:**
1. Navigate to "Admin User Management" page
2. Verify user list loads (if any users exist)
3. Test user creation form:

   **Create Sub-Admin:**
   - Click "Create New User" or "Add User"
   - Fill form:
     - First Name: `Test`
     - Last Name: `SubAdmin`
     - Email: `subadmin@test.com`
     - Phone: `+1234567890`
     - Company: `Test Company`
     - Role: `SUB_ADMIN`
     - Password: (optional - will be auto-generated)
   - Submit form
   - **SAVE THE GENERATED PASSWORD** (if shown)
   - Verify user appears in user list

   **Create Supplier:**
   - Create new user:
     - First Name: `Test`
     - Last Name: `Supplier`
     - Email: `supplier@test.com`
     - Phone: `+1234567891`
     - Company: `Supplier Company`
     - Role: `SUPPLIER`
   - Submit form
   - **SAVE THE GENERATED PASSWORD**
   - Verify user appears in list

   **Create Customer (Product Requester):**
   - Create new user:
     - First Name: `Test`
     - Last Name: `Customer`
     - Email: `customer@test.com`
     - Phone: `+1234567892`
     - Company: `Customer Company`
     - Role: `PRODUCT_REQUESTER`
   - Submit form
   - **SAVE THE GENERATED PASSWORD**
   - Verify user appears in list

4. Test user edit functionality:
   - Click edit on one of the created users
   - Modify some fields
   - Save changes
   - Verify changes are reflected

5. Test user status changes:
   - Change a user status to "Pending"
   - Change to "Suspended"
   - Change back to "Active"
   - Verify status updates correctly

**Expected Results:**
- ✅ User list loads
- ✅ All three user types can be created
- ✅ Generated passwords are shown (if auto-generated)
- ✅ Users appear in list after creation
- ✅ Edit functionality works
- ✅ Status changes work

**Test Accounts Created:**
```
Sub-Admin:
  Email: subadmin@test.com
  Password: [SAVE HERE]
  
Supplier:
  Email: supplier@test.com
  Password: [SAVE HERE]
  
Customer:
  Email: customer@test.com
  Password: [SAVE HERE]
```

**Notes:**
```
[Document any issues here]
```

---

### Phase 2: User Role Testing

#### Test 2.1: Sub-Admin Account Testing
**Steps:**
1. Logout from master admin account
2. Navigate to login page
3. Login with sub-admin credentials:
   - Email: `subadmin@test.com`
   - Password: [saved password]
4. Verify dashboard loads
5. Test admin features:
   - Navigate to User Management (should have access)
   - Navigate to Orders page
   - Navigate to Customer Management
   - Navigate to Supplier Management
6. Verify sub-admin has similar access to master admin
7. Test order management features

**Expected Results:**
- ✅ Login successful
- ✅ Dashboard loads
- ✅ Admin features accessible
- ✅ User management accessible
- ✅ Order management works

**Notes:**
```
[Document any issues here]
```

---

#### Test 2.2: Supplier Account Testing
**Steps:**
1. Logout from current account
2. Login with supplier credentials:
   - Email: `supplier@test.com`
   - Password: [saved password]
3. Verify supplier dashboard loads
4. Test supplier-specific features:

   **View Assigned Orders:**
   - Navigate to "Orders" or "My Orders"
   - Verify orders list loads
   - Check if any orders are assigned to this supplier

   **Update Order Status:**
   - If orders exist, click on one
   - Try to update order status
   - Verify status update works

   **Send Messages:**
   - Navigate to messaging/communication feature
   - Try to send a message to a customer
   - Verify message sends successfully

   **View Order Requests:**
   - Navigate to "Order Requests" page
   - Verify requests are visible
   - Test accepting/responding to requests

5. Navigate through all supplier-accessible pages:
   - Dashboard
   - Orders
   - Order Requests
   - Messages/Communication
   - Profile
   - Settings

**Expected Results:**
- ✅ Supplier dashboard loads
- ✅ Can view assigned orders
- ✅ Can update order status
- ✅ Can send messages
- ✅ Can view order requests
- ✅ All supplier pages accessible

**Notes:**
```
[Document any issues here]
```

---

#### Test 2.3: Customer Account Testing
**Steps:**
1. Logout from current account
2. Login with customer credentials:
   - Email: `customer@test.com`
   - Password: [saved password]
3. Verify customer dashboard loads
4. Test customer-specific features:

   **View Own Orders:**
   - Navigate to "My Orders" or "Orders"
   - Verify only customer's own orders are visible
   - Check order details are correct

   **Create New Order Request:**
   - Navigate to "New Order Request" or "Create Order"
   - Fill out order form (we'll test this in detail in Phase 3)
   - Verify form loads correctly

   **Track Order Status:**
   - If orders exist, view order details
   - Check status is displayed correctly
   - Verify status updates are visible

   **View Order History:**
   - Navigate to order history/list
   - Verify past orders are shown
   - Check filtering/sorting works

5. Navigate through all customer-accessible pages:
   - Dashboard
   - My Orders
   - New Order Request
   - Order History
   - Profile
   - Settings

**Expected Results:**
- ✅ Customer dashboard loads
- ✅ Can view own orders
- ✅ Can access order creation form
- ✅ Can track order status
- ✅ Can view order history
- ✅ All customer pages accessible

**Notes:**
```
[Document any issues here]
```

---

### Phase 3: Order Creation Flow Testing

#### Test 3.1: Customer Creates Order
**Steps:**
1. As customer, navigate to "New Order Request" page
2. Test order form fields:

   **Product Type:**
   - Enter a product type (e.g., "Electronics", "Furniture")
   - Verify field accepts input
   - Test with special characters

   **Quantity:**
   - Enter quantity: `10`
   - Try invalid values (0, negative, very large)
   - Verify validation works

   **Delivery Date:**
   - Select a future date
   - Try selecting past date (should show error)
   - Verify date picker works

   **Notes:**
   - Enter optional notes
   - Test with long text
   - Test with special characters

3. Test AI Auto-Fill Feature (if available):
   - Click "AI Fill" or similar button
   - Wait for AI to populate form
   - Verify form fields are filled
   - Modify AI suggestions if needed

4. Submit Order:
   - Fill all required fields
   - Click "Submit" or "Create Order"
   - Wait for confirmation
   - Verify success message appears

5. Verify Order in Customer View:
   - Navigate to "My Orders"
   - Verify new order appears in list
   - Click on order to view details
   - Verify all details are correct

**Expected Results:**
- ✅ Form loads correctly
- ✅ All fields work
- ✅ Validation works (prevents invalid input)
- ✅ AI auto-fill works (if available)
- ✅ Order submission successful
- ✅ Success message appears
- ✅ Order appears in customer's order list
- ✅ Order details are correct

**Order Created:**
```
Product Type: [ENTERED VALUE]
Quantity: [ENTERED VALUE]
Delivery Date: [SELECTED DATE]
Order ID: [SAVE IF SHOWN]
```

**Notes:**
```
[Document any issues here]
```

---

#### Test 3.2: Verify Order in Admin View
**Steps:**
1. Logout from customer account
2. Login as master admin
3. Navigate to "Orders" page
4. Verify new order appears in order list:
   - Search for the order (by customer name, product type, or order ID)
   - Verify order is visible
5. Click on order to view details:
   - Verify customer information is correct
   - Verify product type matches
   - Verify quantity matches
   - Verify delivery date matches
   - Verify notes are displayed
   - Verify order status (should be "PENDING" or default status)
6. Check order assignment:
   - Verify if supplier is assigned (may be auto-assigned by AI)
   - If no supplier, test manual assignment

**Expected Results:**
- ✅ Order appears in admin order list
- ✅ Order details are correct
- ✅ All information matches what customer entered
- ✅ Order status is appropriate
- ✅ Supplier assignment works (if applicable)

**Notes:**
```
[Document any issues here]
```

---

#### Test 3.3: Test Order Status Updates
**Steps:**
1. As Admin:
   - Open the order created in Test 3.1
   - Update order status (e.g., PENDING → IN_PROGRESS)
   - Save changes
   - Verify status updates

2. As Supplier (if order is assigned):
   - Logout from admin
   - Login as supplier
   - Navigate to assigned orders
   - Find the order
   - Update order status (e.g., IN_PROGRESS → COMPLETED)
   - Save changes
   - Verify status updates

3. As Customer:
   - Logout from supplier
   - Login as customer
   - Navigate to "My Orders"
   - Find the order
   - Verify status updates are reflected
   - Check order shows current status

4. Test All Status Transitions:
   - PENDING → IN_PROGRESS
   - IN_PROGRESS → COMPLETED
   - Any other status transitions available
   - Verify each transition works correctly

**Expected Results:**
- ✅ Admin can update order status
- ✅ Supplier can update assigned order status
- ✅ Customer sees status updates in real-time
- ✅ All status transitions work
- ✅ Status changes persist correctly

**Notes:**
```
[Document any issues here]
```

---

### Phase 4: Complete Page Testing

For each page listed below, test as the appropriate user role:

#### Pages to Test:

1. **Dashboard** (All roles)
   - [ ] Loads without errors
   - [ ] Displays correct data for role
   - [ ] All widgets/components work
   - [ ] Navigation works
   - [ ] Responsive design

2. **Orders List** (All roles - filtered by role)
   - [ ] Loads order list
   - [ ] Filters work correctly
   - [ ] Search works
   - [ ] Sorting works
   - [ ] Pagination works (if applicable)
   - [ ] Role-specific filtering works

3. **Order Details** (All roles)
   - [ ] Loads order details
   - [ ] All information displayed
   - [ ] Edit functionality works (if applicable)
   - [ ] Status updates work
   - [ ] Messages/comments work

4. **New Order Request** (Customer only)
   - [ ] Form loads
   - [ ] All fields work
   - [ ] Validation works
   - [ ] AI auto-fill works
   - [ ] Submission works

5. **Order Reception** (Admin/Supplier)
   - [ ] Page loads
   - [ ] Order requests visible
   - [ ] Accept/reject works
   - [ ] Assignment works

6. **Customer Management** (Admin)
   - [ ] Customer list loads
   - [ ] Create customer works
   - [ ] Edit customer works
   - [ ] Delete customer works (if applicable)
   - [ ] Search/filter works

7. **Supplier Management** (Admin)
   - [ ] Supplier list loads
   - [ ] Create supplier works
   - [ ] Edit supplier works
   - [ ] Delete supplier works (if applicable)
   - [ ] Search/filter works

8. **Admin User Management** (Admin only)
   - [ ] User list loads
   - [ ] Create user works
   - [ ] Edit user works
   - [ ] Status changes work
   - [ ] Role assignment works

9. **Accounting/Financial Dashboard** (Admin)
   - [ ] Financial data loads
   - [ ] Charts/graphs display
   - [ ] Calculations are correct
   - [ ] Date filters work
   - [ ] Export works (if applicable)

10. **AI Chat/Dashboard** (All roles)
    - [ ] AI chat widget loads
    - [ ] Can open/close chat widget
    - [ ] Can send messages
    - [ ] AI responds with relevant answers
    - [ ] Chat history loads correctly
    - [ ] Session persistence works (refresh page)
    - [ ] AI suggestions appear
    - [ ] Context-aware responses work
    - [ ] Error handling works (test with backend offline)
    - [ ] Fallback responses work
    - [ ] Message timestamps display (if implemented)
    - [ ] Typing indicators work (if implemented)
    - [ ] Natural language order creation (if implemented)
    - [ ] Proactive suggestions appear
    - [ ] Role-based AI responses (admin vs customer)

11. **User Profile** (All roles)
    - [ ] Profile loads
    - [ ] Can view own profile
    - [ ] Can edit profile
    - [ ] Changes save correctly
    - [ ] Avatar upload works (if applicable)

12. **User Settings** (All roles)
    - [ ] Settings page loads
    - [ ] Can change preferences
    - [ ] Can change password
    - [ ] Notifications settings work
    - [ ] Changes persist

13. **About Page** (All roles)
    - [ ] Page loads
    - [ ] Information displays correctly
    - [ ] Links work
    - [ ] Responsive design

**For Each Page, Verify:**
- [ ] Page loads without errors
- [ ] All interactive elements work
- [ ] Data displays correctly
- [ ] Form submissions work
- [ ] Navigation works
- [ ] Responsive design works
- [ ] Error handling works
- [ ] No console errors

**Notes:**
```
[Document any issues found for each page]
```

---

### Phase 5: Feature Testing

#### Authentication Features
- [ ] Login with valid credentials works
- [ ] Login with invalid credentials shows error
- [ ] Logout functionality works
- [ ] Session persists on page refresh
- [ ] Protected routes redirect unauthorized users
- [ ] Token refresh works (if applicable)

#### Real-time Features
- [ ] WebSocket connection establishes
- [ ] Real-time order updates work
- [ ] Real-time messaging works
- [ ] Notifications appear in real-time

#### AI Features
- [ ] AI chat responds correctly
- [ ] AI order suggestions work
- [ ] AI form auto-fill works
- [ ] AI analysis displays correctly
- [ ] AI natural language order creation works
- [ ] AI context awareness works
- [ ] AI proactive suggestions appear
- [ ] AI error handling and recovery works

#### Data Management
- [ ] Create operations work (orders, users, customers, suppliers)
- [ ] Read operations work (view lists, details)
- [ ] Update operations work (edit orders, users, etc.)
- [ ] Delete operations work (if applicable)
- [ ] Search functionality works
- [ ] Filtering works
- [ ] Sorting works
- [ ] Pagination works

**Notes:**
```
[Document any issues here]
```

---

### Phase 7: Error Handling & Edge Cases

#### Error Scenarios
- [ ] Network errors handled gracefully (disconnect backend, show error message)
- [ ] Invalid form submissions show validation errors
- [ ] Unauthorized access attempts redirect to login
- [ ] Missing data shows appropriate empty states
- [ ] API errors display user-friendly messages

#### Edge Cases
- [ ] Empty states (no orders, no users) display correctly
- [ ] Very long text inputs handled correctly
- [ ] Special characters in inputs work
- [ ] Past dates rejected (where applicable)
- [ ] Far future dates accepted (where applicable)
- [ ] Boundary values handled (quantity: 0, negative, very large)
- [ ] Rapid clicking doesn't cause duplicate submissions

**Notes:**
```
[Document any issues here]
```

---

## 📊 Test Results Summary

### Overall Status
- [ ] All Phase 1 tests passed
- [ ] All Phase 2 tests passed
- [ ] All Phase 3 tests passed
- [ ] All Phase 4 tests passed
- [ ] All Phase 5 tests passed
- [ ] All Phase 6 tests passed

### Issues Found
```
[List any issues found during testing]
```

### Critical Issues
```
[List any critical issues that must be fixed before deployment]
```

### Minor Issues
```
[List minor issues that can be fixed post-deployment]
```

---

## 🚀 Ready for Deployment?

- [ ] All critical tests passed
- [ ] No blocking issues
- [ ] All user roles functional
- [ ] Order creation flow works end-to-end
- [ ] All pages accessible and functional
- [ ] Error handling works
- [ ] No console errors
- [ ] Performance is acceptable

**If all checked, proceed to deployment phase!**

---

**Test Completed By:** _______________  
**Date:** _______________  
**Time Taken:** _______________  
**Overall Result:** [ ] PASS [ ] FAIL [ ] PASS WITH ISSUES

