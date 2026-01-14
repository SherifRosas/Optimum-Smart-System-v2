# 🧪 Manual Testing Guide - Test Scenario

**Date:** January 14, 2026  
**Version:** 2.4.0

---

## 🎯 Testing Workflow

Follow these steps to manually test the complete system workflow:

---

## Step 1: Start Servers ✅

```powershell
cd Optimum-Smart-System-v2.4.0-TypeScript
.\start-development.ps1
```

**Wait 10-15 seconds** for both servers to start:
- ✅ Backend: http://localhost:8000
- ✅ Frontend: http://localhost:3000

---

## Step 2: Login as Master Admin

1. Open browser: **http://localhost:3000**
2. Login with:
   - **Username:** `SherifRosas`
   - **Password:** `01224576070#MoonLand`
3. You should see the **Command Center** dashboard

**✅ Expected:** Command Center appears (not Customer Dashboard)

---

## Step 3: Verify Accounts Created

### Check Subadmin
- Navigate to "Users" or "User Management"
- Look for: `SubAdmin1` (subadmin1@optimum.com)

### Check Customers
- Look for 7 customer accounts:
  - `customer1_ahmed` through `customer7_youssef`
  - All with role: **Product Requester**

### Check Suppliers
- Look for 7 supplier accounts:
  - `supplier1_tech` through `supplier7_premium`
  - All with role: **Supplier**

**✅ Expected:** All 15 accounts visible (1 subadmin + 7 customers + 7 suppliers)

---

## Step 4: Test Customer Login & Order Creation

### 4.1 Login as Customer
1. **Logout** from admin account
2. Login as customer:
   - **Username:** `customer1_ahmed`
   - **Password:** `Customer123!@#`
3. You should see **Customer Dashboard** (not Command Center)

**✅ Expected:** Customer Dashboard appears

### 4.2 Create Order
1. Navigate to "New Order" or "Create Order"
2. Fill out the form:
   - **Product Type:** `iPhone 15 Pro Max 256GB`
   - **Quantity:** `1`
   - **Delivery Date:** Select a date 7 days from now
   - **Notes:** `Test order from customer1`
3. Click **"Submit"** or **"Create Order"**

**✅ Expected:** 
- Order created successfully
- Success message displayed
- Order appears in "My Orders"

### 4.3 Repeat for Other Customers
- Login as each customer (`customer2_fatima`, `customer3_mohamed`, etc.)
- Create one order per customer
- Use different products for variety

**✅ Expected:** 7 orders created (one per customer)

---

## Step 5: Verify AI Processing

### 5.1 Login as Admin
1. Logout from customer
2. Login as admin: `SherifRosas` / `01224576070#MoonLand`

### 5.2 Check Product Requests
1. Navigate to "Product Requests" or "AI Requests"
2. You should see 7 product requests (one per order)

**✅ Expected:** 7 product requests visible

### 5.3 Check Supplier Offers
1. Navigate to "Supplier Offers" or "Offers"
2. You should see **49 offers** (7 orders × 7 suppliers)

**✅ Expected:** 49 offers created

### 5.4 Check AI Recommendations
1. Navigate to "AI Recommendations" or check product requests
2. Each request should have:
   - Status: **"AI Recommended"**
   - Recommended Supplier: One of the 7 suppliers
   - AI Score: A score value

**✅ Expected:** 7 AI recommendations completed

### 5.5 Check Order Assignments
1. Navigate to "Orders"
2. Each order should have:
   - Status: **"In Preparation"**
   - Supplier: Assigned supplier name

**✅ Expected:** All 7 orders assigned to suppliers

---

## Step 6: Test Supplier Login & Order Confirmation

### 6.1 Login as Supplier
1. **Logout** from admin
2. Login as supplier:
   - **Username:** `supplier2_digital` (or any supplier)
   - **Password:** `Supplier123!@#`
3. You should see **Supplier Dashboard**

**✅ Expected:** Supplier Dashboard appears

### 6.2 View Assigned Orders
1. Navigate to "My Orders" or "Assigned Orders"
2. You should see orders assigned to you by AI

**✅ Expected:** At least one order assigned to this supplier

### 6.3 Confirm Order
1. Click on an assigned order
2. Review order details:
   - Customer name
   - Product type
   - Quantity
   - Delivery date
   - Price
3. Click **"Confirm Order"** or **"Accept Order"**
4. Add confirmation notes (optional)
5. Click **"Submit"**

**✅ Expected:**
- Order status updates to "Confirmed" or "Accepted"
- Success message displayed
- Order appears in "Confirmed Orders"

### 6.4 Repeat for Other Suppliers
- Login as other suppliers
- Confirm their assigned orders

**✅ Expected:** All orders confirmed by suppliers

---

## Step 7: Test Order Status Updates

### 7.1 Update to "Ready"
1. Login as supplier
2. Navigate to "My Orders"
3. Find a confirmed order
4. Update status to **"Ready"**
5. Add notes: `Order is ready for delivery`

**✅ Expected:** Status updates to "Ready"

### 7.2 Update to "Delivered"
1. On delivery day, update status to **"Delivered"**
2. Add delivery notes: `Delivered successfully`

**✅ Expected:** Status updates to "Delivered"

---

## Step 8: Test Customer Receipt Confirmation

### 8.1 Login as Customer
1. Logout from supplier
2. Login as customer (e.g., `customer1_ahmed`)
3. Navigate to "My Orders"

### 8.2 Confirm Receipt
1. Find the delivered order
2. Click on the order
3. Review delivery details
4. Click **"Confirm Receipt"**
5. Add notes: `Received in good condition. Thank you!`
6. Click **"Submit"**

**✅ Expected:**
- Receipt confirmed
- Success message displayed
- Order marked as "Completed" or "Confirmed"

---

## Step 9: Verify Complete Workflow

### 9.1 Login as Admin
1. Login as admin: `SherifRosas`

### 9.2 Check System Status
Navigate to different sections and verify:

- **Orders:** All orders show correct status
- **Product Requests:** All show "AI Recommended" or "Assigned"
- **Supplier Offers:** All 49 offers visible
- **AI Recommendations:** All 7 recommendations completed
- **Customers:** All 7 customers have orders
- **Suppliers:** All 7 suppliers have assigned orders

**✅ Expected:** Complete workflow visible and functional

---

## 📊 Test Checklist

### Phase 1: Account Creation ✅
- [ ] Admin can login
- [ ] Command Center appears for admin
- [ ] Subadmin account exists
- [ ] 7 customer accounts exist
- [ ] 7 supplier accounts exist

### Phase 2: Order Creation ✅
- [ ] Customer can login
- [ ] Customer Dashboard appears
- [ ] Customer can create order
- [ ] Order appears in "My Orders"
- [ ] All 7 customers created orders

### Phase 3: AI Processing ✅
- [ ] Product requests created (7)
- [ ] Supplier offers created (49)
- [ ] AI recommendations completed (7)
- [ ] Orders assigned to suppliers (7)

### Phase 4: Supplier Actions ✅
- [ ] Supplier can login
- [ ] Supplier Dashboard appears
- [ ] Supplier sees assigned orders
- [ ] Supplier can confirm orders
- [ ] All orders confirmed

### Phase 5: Delivery Tracking ✅
- [ ] Status updates to "Ready"
- [ ] Status updates to "Delivered"
- [ ] Delivery notes added

### Phase 6: Customer Confirmation ✅
- [ ] Customer sees delivered order
- [ ] Customer can confirm receipt
- [ ] Receipt notes added
- [ ] Order marked as completed

---

## 🐛 Troubleshooting

### Issue: Can't login
- **Check:** Username and password are correct
- **Check:** Account exists in database
- **Check:** Backend server is running

### Issue: Orders not appearing
- **Check:** Orders were created successfully
- **Check:** Database has orders
- **Check:** Frontend is connected to backend

### Issue: AI not processing
- **Check:** Product requests were created
- **Check:** Supplier offers exist
- **Check:** AI service is running

### Issue: Supplier can't see orders
- **Check:** Orders are assigned to this supplier
- **Check:** Supplier account is correct
- **Check:** Order status is correct

---

## 📝 Notes

- All test data was created by the automated script
- Login credentials are in `CORRECT_TEST_SCENARIO_SUMMARY.md`
- Script: `comprehensive_test_scenario_correct.py`
- Verification: `verify_test_results.py`

---

**Happy Testing! 🚀**
