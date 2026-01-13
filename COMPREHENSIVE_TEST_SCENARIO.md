# 🧪 Comprehensive Test Scenario - Full System Workflow
**Version:** 2.4.0  
**Date:** 2026-01-13  
**Purpose:** Complete end-to-end testing from scratch

---

## 📋 Test Scenario Overview

**Goal:** Test the complete order lifecycle with AI-powered supplier selection

**Starting Point:**
- ✅ Zero orders
- ✅ Zero customers  
- ✅ Zero suppliers
- ✅ Only master admin exists

**Workflow:**
1. Master admin login
2. Create 1 subadmin
3. Create 7 customers
4. Create 7 suppliers
5. Each customer creates an order (7 orders total)
6. AI automatically sends orders to all suppliers for price offers
7. Suppliers submit price offers
8. AI evaluates and picks best price
9. AI sends confirmation to chosen supplier
10. Supplier confirms order with all properties
11. Track delivery
12. On delivery day, customer confirms receipt with notes

---

## 🚀 QUICK START - Automated Script

### Run Automated Test:
```bash
cd Optimum-Smart-System-v2.4.0-TypeScript/optimum-backend
python comprehensive_test_scenario.py
```

This will automatically:
- ✅ Verify clean database
- ✅ Create all users (1 subadmin, 7 customers, 7 suppliers)
- ✅ Create 7 orders
- ✅ Create product requests
- ✅ Create 49 supplier offers (7×7)
- ✅ Run AI evaluation
- ✅ Assign orders to suppliers

**Then continue with manual steps below for supplier confirmation and delivery tracking.**

---

## 📖 MANUAL STEP-BY-STEP GUIDE

### **PHASE 1: PREPARATION - Clean Database**

#### Step 1.1: Verify Clean State
```bash
cd Optimum-Smart-System-v2.4.0-TypeScript/optimum-backend
python manage.py shell
```

```python
from orders.models import Order
from customers.models import Customer
from suppliers.models import Supplier
from django.contrib.auth.models import User

print(f"Orders: {Order.objects.count()}")
print(f"Customers: {Customer.objects.count()}")
print(f"Suppliers: {Supplier.objects.count()}")
print(f"Users: {User.objects.count()}")
```

**✅ Expected Result:** Orders=0, Customers=0, Suppliers=0, Users=1 (admin only)

**Or run automated script which will verify this automatically.**

---

### **PHASE 2: ADMIN SETUP**

#### Step 2.1: Login as Master Admin (Frontend)
1. Open frontend: `http://localhost:3000`
2. Login with:
   - **Email/Username:** `SherifRosas` or `sherifrosas.ai@gmail.com`
   - **Password:** `01224576070#MoonLand`
3. Verify: Should see **Command Center** (not Customer Dashboard)

**✅ Expected Result:** Successfully logged in, Command Center visible

---

### **PHASE 3: CREATE USERS**

#### Step 3.1: Create 1 Subadmin
**Via Frontend (User Management):**
1. Navigate to: **User Management** (or press `7` or click in navigation)
2. Click: **"Create New User"** or **"Add User"**
3. Fill form:
   - **Username:** `SubAdmin1`
   - **Email:** `subadmin1@optimum.com`
   - **Password:** `SubAdmin123!@#`
   - **Role:** `ADMIN` (or `Sub Admin`)
   - **Status:** `ACTIVE`
4. Click: **"Create User"**

**✅ Expected Result:** Subadmin created successfully

**Alternative (Backend Script):**
```bash
cd optimum-backend
USER_EMAIL=subadmin1@optimum.com USER_USERNAME=SubAdmin1 USER_PASSWORD=SubAdmin123!@# python create_user.py
```

**Or run automated script - it will create this automatically.**

---

#### Step 3.2: Create 7 Customers

**Option A: Via Frontend (New Order - Auto-creates customer)**
When creating orders, customers are auto-created if they don't exist.

**Option B: Via API or Admin Panel**

**Customer 1:**
- **Name:** `Ahmed Mohamed`
- **Phone:** `01001234567`
- **Email:** `ahmed.mohamed@example.com`
- **Address:** `123 Main Street, Cairo, Egypt`

**Customer 2:**
- **Name:** `Fatima Ali`
- **Phone:** `01001234568`
- **Email:** `fatima.ali@example.com`
- **Address:** `456 Park Avenue, Alexandria, Egypt`

**Customer 3:**
- **Name:** `Mohamed Hassan`
- **Phone:** `01001234569`
- **Email:** `mohamed.hassan@example.com`
- **Address:** `789 Business District, Giza, Egypt`

**Customer 4:**
- **Name:** `Sara Ibrahim`
- **Phone:** `01001234570`
- **Email:** `sara.ibrahim@example.com`
- **Address:** `321 Tech Park, New Cairo, Egypt`

**Customer 5:**
- **Name:** `Omar Khaled`
- **Phone:** `01001234571`
- **Email:** `omar.khaled@example.com`
- **Address:** `654 Innovation Hub, Maadi, Egypt`

**Customer 6:**
- **Name:** `Layla Mahmoud`
- **Phone:** `01001234572`
- **Email:** `layla.mahmoud@example.com`
- **Address:** `987 Commerce Center, Zamalek, Egypt`

**Customer 7:**
- **Name:** `Youssef Nour`
- **Phone:** `01001234573`
- **Email:** `youssef.nour@example.com`
- **Address:** `147 Digital Plaza, Heliopolis, Egypt`

**✅ Expected Result:** 7 customers created

**Or run automated script - it will create all 7 automatically.**

---

#### Step 3.3: Create 7 Suppliers

**Via Frontend (Supplier Management) or API:**

**Supplier 1:**
- **Name:** `Tech Solutions Egypt`
- **Contact Person:** `Amr Fahmy`
- **Email:** `amr@techsolutions.eg`
- **Phone:** `01009876543`
- **Address:** `100 Tech Street, Cairo`
- **Rating:** `4.5`
- **Active:** `Yes`

**Supplier 2:**
- **Name:** `Digital World Trading`
- **Contact Person:** `Nada Samir`
- **Email:** `nada@digitalworld.eg`
- **Phone:** `01009876544`
- **Address:** `200 Digital Avenue, Alexandria`
- **Rating:** `4.3`
- **Active:** `Yes`

**Supplier 3:**
- **Name:** `Electronics Hub`
- **Contact Person:** `Karim Adel`
- **Email:** `karim@electronicshub.eg`
- **Phone:** `01009876545`
- **Address:** `300 Electronics Plaza, Giza`
- **Rating:** `4.7`
- **Active:** `Yes`

**Supplier 4:**
- **Name:** `Smart Devices Co.`
- **Contact Person:** `Dina Magdy`
- **Email:** `dina@smartdevices.eg`
- **Phone:** `01009876546`
- **Address:** `400 Smart City, New Cairo`
- **Rating:** `4.2`
- **Active:** `Yes`

**Supplier 5:**
- **Name:** `Future Tech Ltd`
- **Contact Person:** `Tamer Rizk`
- **Email:** `tamer@futuretech.eg`
- **Phone:** `01009876547`
- **Address:** `500 Future Park, Maadi`
- **Rating:** `4.6`
- **Active:** `Yes`

**Supplier 6:**
- **Name:** `Innovation Systems`
- **Contact Person:** `Rania Hany`
- **Email:** `rania@innovationsys.eg`
- **Phone:** `01009876548`
- **Address:** `600 Innovation Center, Zamalek`
- **Rating:** `4.4`
- **Active:** `Yes`

**Supplier 7:**
- **Name:** `Premium Electronics`
- **Contact Person:** `Hassan Mostafa`
- **Email:** `hassan@premiumelec.eg`
- **Phone:** `01009876549`
- **Address:** `700 Premium District, Heliopolis`
- **Rating:** `4.8`
- **Active:** `Yes`

**✅ Expected Result:** 7 suppliers created

**Or run automated script - it will create all 7 automatically.**

---

### **PHASE 4: CREATE ORDERS (7 Orders - One per Customer)**

#### Step 4.1: Customer 1 Creates Order
**Via Frontend (New Order):**
1. Navigate to: **New Order** (or press `2`)
2. Fill form:
   - **Customer Name:** `Ahmed Mohamed`
   - **Phone:** `01001234567`
   - **Product Type:** `iPhone 15 Pro Max 256GB`
   - **Quantity:** `2`
   - **Delivery Date:** `2026-01-20` (7 days from today)
   - **Notes:** `Urgent order, need premium packaging`
3. Click: **"Submit Order"** or **"Create Order"**

**✅ Expected Result:** Order created, status = "pending"

#### Step 4.2-4.7: Create Remaining 6 Orders

**Order 2 (Customer: Fatima Ali):**
- **Product:** `Samsung Galaxy S24 Ultra 512GB`
- **Quantity:** `1`
- **Delivery Date:** `2026-01-21`
- **Notes:** `Gift packaging required`

**Order 3 (Customer: Mohamed Hassan):**
- **Product:** `MacBook Pro 16" M3 Pro`
- **Quantity:** `1`
- **Delivery Date:** `2026-01-22`
- **Notes:** `Need for business presentation`

**Order 4 (Customer: Sara Ibrahim):**
- **Product:** `iPad Pro 12.9" 256GB`
- **Quantity:** `3`
- **Delivery Date:** `2026-01-23`
- **Notes:** `Bulk order for company`

**Order 5 (Customer: Omar Khaled):**
- **Product:** `Dell XPS 15 Laptop`
- **Quantity:** `2`
- **Delivery Date:** `2026-01-24`
- **Notes:** `High performance required`

**Order 6 (Customer: Layla Mahmoud):**
- **Product:** `Sony WH-1000XM5 Headphones`
- **Quantity:** `5`
- **Delivery Date:** `2026-01-25`
- **Notes:** `Corporate gift order`

**Order 7 (Customer: Youssef Nour):**
- **Product:** `Apple Watch Ultra 2`
- **Quantity:** `4`
- **Delivery Date:** `2026-01-26`
- **Notes:** `Team fitness tracking devices`

**✅ Expected Result:** 7 orders created, all status = "pending"

**Or run automated script - it will create all 7 orders automatically.**

---

### **PHASE 5: AI AUTOMATIC SUPPLIER NOTIFICATION**

#### Step 5.1: Verify AI System Sends Orders to All Suppliers
**Expected Behavior:**
- System should automatically notify all 7 active suppliers about each order
- Each supplier should receive notification for all 7 orders
- Total: 7 orders × 7 suppliers = 49 notifications

**Check via Backend:**
```python
from product_requests.models import ProductRequest, SupplierOffer

# Check if product requests were created
requests = ProductRequest.objects.all()
print(f"Product Requests: {requests.count()}")

# Check supplier offers
offers = SupplierOffer.objects.all()
print(f"Supplier Offers: {offers.count()}")
```

**✅ Expected Result:** 
- 7 ProductRequests created (one per order)
- Status: "notified_suppliers" or "collecting_offers"
- All suppliers notified

**Automated script creates product requests automatically.**

---

### **PHASE 6: SUPPLIERS SUBMIT PRICE OFFERS**

#### Step 6.1: Supplier 1 Submits Offers for All 7 Orders
**Login as Supplier 1:**
1. Logout from admin
2. Login as Supplier 1 user (create user account if needed)
3. Navigate to: **Product Requests** or **Offers**

**Submit Offers:**
- **Order 1 (iPhone):** Price: `45,000 EGP`, Delivery: `2026-01-19`
- **Order 2 (Samsung):** Price: `38,000 EGP`, Delivery: `2026-01-20`
- **Order 3 (MacBook):** Price: `85,000 EGP`, Delivery: `2026-01-21`
- **Order 4 (iPad):** Price: `12,000 EGP` each, Delivery: `2026-01-22`
- **Order 5 (Dell):** Price: `55,000 EGP`, Delivery: `2026-01-23`
- **Order 6 (Sony):** Price: `8,500 EGP` each, Delivery: `2026-01-24`
- **Order 7 (Watch):** Price: `15,000 EGP` each, Delivery: `2026-01-25`

#### Step 6.2: Supplier 2 Submits Offers (Best Prices)
- **Order 1:** Price: `44,500 EGP`, Delivery: `2026-01-18` ⭐ (Better price)
- **Order 2:** Price: `37,500 EGP`, Delivery: `2026-01-19` ⭐ (Better price)
- **Order 3:** Price: `84,000 EGP`, Delivery: `2026-01-20` ⭐ (Better price)
- **Order 4:** Price: `11,800 EGP` each, Delivery: `2026-01-21` ⭐ (Better price)
- **Order 5:** Price: `54,500 EGP`, Delivery: `2026-01-22` ⭐ (Better price)
- **Order 6:** Price: `8,200 EGP` each, Delivery: `2026-01-23` ⭐ (Better price)
- **Order 7:** Price: `14,800 EGP` each, Delivery: `2026-01-24` ⭐ (Better price)

#### Step 6.3-6.7: Suppliers 3-7 Submit Offers
Each supplier submits competitive offers for all 7 orders.

**✅ Expected Result:** 
- Each order has 7 offers (one from each supplier)
- Total: 49 offers submitted
- Status: "pending" for all offers

**Automated script creates all 49 offers automatically with Supplier 2 having best prices.**

---

### **PHASE 7: AI EVALUATES AND PICKS BEST PRICE**

#### Step 7.1: Trigger AI Evaluation
**Via Admin Panel or API:**
1. Navigate to: **Product Requests** or **AI Insights**
2. For each order, click: **"Evaluate Offers"** or **"AI Recommendation"**
3. AI should:
   - Analyze all 7 offers
   - Consider: Price, Delivery Date, Supplier Rating, Past Performance
   - Select best offer
   - Update ProductRequest status to "ai_recommended"

**Expected AI Selection (Example):**
- **Order 1:** Supplier 2 (best price: 44,500 EGP)
- **Order 2:** Supplier 2 (best price: 37,500 EGP)
- **Order 3:** Supplier 2 (best price: 84,000 EGP)
- **Order 4:** Supplier 2 (best price: 11,800 EGP each)
- **Order 5:** Supplier 2 (best price: 54,500 EGP)
- **Order 6:** Supplier 2 (best price: 8,200 EGP each)
- **Order 7:** Supplier 2 (best price: 14,800 EGP each)

**✅ Expected Result:**
- AI recommends best offer for each order
- ProductRequest status = "ai_recommended"
- Recommended supplier stored in `recommended_supplier` field

**Automated script runs AI evaluation automatically.**

---

### **PHASE 8: AI SENDS CONFIRMATION TO CHOSEN SUPPLIER**

#### Step 8.1: Verify Notification Sent
**Expected Behavior:**
- System automatically notifies chosen supplier (Supplier 2 in this case)
- Notification includes:
  - Order details
  - Agreed price
  - Delivery date
  - All order properties/requirements

**Check via Backend:**
```python
from product_requests.models import ProductRequest

requests = ProductRequest.objects.filter(status='ai_recommended')
for req in requests:
    print(f"Order: {req.title}")
    print(f"Recommended Supplier: {req.recommended_supplier}")
    print(f"AI Recommendation: {req.ai_recommendation}")
```

**✅ Expected Result:**
- All 7 orders have recommended supplier
- Supplier 2 receives notifications for all 7 orders
- Status: "assigned" or ready for supplier confirmation

**Automated script assigns orders to suppliers automatically.**

---

### **PHASE 9: SUPPLIER CONFIRMS ORDER**

#### Step 9.1: Supplier 2 Confirms All Orders
**Login as Supplier 2:**
1. Logout from current user
2. Login as Supplier 2 user account
3. Navigate to: **My Orders** or **Assigned Orders**

**For Each Order (1-7):**
1. Click on order
2. Review:
   - Customer details
   - Product specifications
   - Quantity
   - Agreed price
   - Delivery date
   - Special requirements/notes
3. Click: **"Confirm Order"** or **"Accept Order"**
4. Add confirmation notes:
   - "Order confirmed. Will prepare premium packaging as requested."
   - "Confirmed. Will ensure quality check before delivery."
   - etc.

**✅ Expected Result:**
- All 7 orders confirmed by Supplier 2
- Status: "assigned" or "in_preparation"
- Orders linked to Supplier 2
- Confirmation notes added

**⚠️ Manual Step Required:** This must be done via frontend as Supplier 2 user.

---

### **PHASE 10: TRACK DELIVERY**

#### Step 10.1: Update Order Status (Supplier Side)
**As Supplier 2:**
1. Navigate to: **My Orders**
2. For each order, update status:
   - **Day 1:** Status → "in-preparation"
   - **Day 2-3:** Status → "ready"
   - **Delivery Day:** Status → "delivered"

**Or Admin can update:**
1. Login as admin
2. Navigate to: **Orders**
3. Update status for each order

**✅ Expected Result:**
- Orders progress through statuses
- Delivery tracking visible
- Status updates logged

**⚠️ Manual Step Required:** Update statuses through frontend.

---

### **PHASE 11: CUSTOMER CONFIRMS RECEIPT**

#### Step 11.1: Customer Receives Order Confirmation Request
**On Delivery Day:**
- System should send notification/email to customer
- Customer can confirm via:
  - Frontend (if customer has account)
  - SMS/Email link
  - Admin can mark as delivered

#### Step 11.2: Customer 1 Confirms Receipt
**Via Frontend (Customer Dashboard) or Admin:**
1. Navigate to: **Orders** → Order #1
2. Click: **"Confirm Delivery"** or **"Mark as Received"**
3. Customer fills:
   - **Received:** ✅ Yes
   - **Condition:** Good/Excellent/Damaged
   - **Notes:** 
     - "Received in perfect condition. Premium packaging was excellent. Thank you!"
   - **Rating:** 5/5
4. Click: **"Submit Confirmation"**

#### Step 11.3: Customers 2-7 Confirm Receipt
**Repeat for each customer:**
- Customer 2: "Product received. Gift packaging was beautiful. Very satisfied."
- Customer 3: "Received on time. Quality is excellent. Will order again."
- Customer 4: "All 3 iPads received. Perfect for our team. Thank you!"
- Customer 5: "Laptops received. Performance is great. Highly recommend."
- Customer 6: "All 5 headphones received. Great quality. Corporate team loves them."
- Customer 7: "All 4 watches received. Perfect for fitness tracking. Excellent service."

**✅ Expected Result:**
- All 7 orders marked as "delivered"
- Customer confirmations received
- Notes and ratings recorded
- Order lifecycle complete

**⚠️ Manual Step Required:** Customer confirmations via frontend.

---

## 📊 VERIFICATION CHECKLIST

### Final State Verification:
```python
from orders.models import Order
from customers.models import Customer
from suppliers.models import Supplier
from product_requests.models import ProductRequest, SupplierOffer
from django.contrib.auth.models import User

print("=" * 50)
print("FINAL SYSTEM STATE")
print("=" * 50)
print(f"✅ Users: {User.objects.count()} (Expected: 9 - 1 master admin + 1 subadmin + 7 suppliers)")
print(f"✅ Customers: {Customer.objects.count()} (Expected: 7)")
print(f"✅ Suppliers: {Supplier.objects.count()} (Expected: 7)")
print(f"✅ Orders: {Order.objects.count()} (Expected: 7)")
print(f"✅ Product Requests: {ProductRequest.objects.count()} (Expected: 7)")
print(f"✅ Supplier Offers: {SupplierOffer.objects.count()} (Expected: 49)")
print(f"✅ Delivered Orders: {Order.objects.filter(status='delivered').count()} (Expected: 7)")
print("=" * 50)
```

---

## 🎯 TESTING WORKFLOW SUMMARY

### Automated (Script):
1. ✅ Verify clean database
2. ✅ Create 1 subadmin
3. ✅ Create 7 customers
4. ✅ Create 7 suppliers
5. ✅ Create 7 orders
6. ✅ Create 7 product requests
7. ✅ Create 49 supplier offers
8. ✅ Run AI evaluation
9. ✅ Assign orders to suppliers

### Manual (Frontend):
1. ⚠️ Login as Supplier 2 and confirm all 7 orders
2. ⚠️ Update order statuses through delivery cycle
3. ⚠️ Have customers confirm receipt with notes

---

## 🔄 QUICK TEST COMMANDS

### Run Full Automated Test:
```bash
cd Optimum-Smart-System-v2.4.0-TypeScript/optimum-backend
python comprehensive_test_scenario.py
```

### Verify Results:
```bash
python manage.py shell
```
```python
from orders.models import Order
from customers.models import Customer
from suppliers.models import Supplier
from product_requests.models import ProductRequest, SupplierOffer

print(f"Customers: {Customer.objects.count()}")
print(f"Suppliers: {Supplier.objects.count()}")
print(f"Orders: {Order.objects.count()}")
print(f"Product Requests: {ProductRequest.objects.count()}")
print(f"Supplier Offers: {SupplierOffer.objects.count()}")
```

---

## 📝 RECOMMENDATIONS

### Suggested Improvements:
1. **Automated Notifications:** Email/SMS when orders are assigned
2. **Real-time Updates:** WebSocket for live status updates
3. **Supplier Dashboard:** Better interface for suppliers to manage offers
4. **Customer Portal:** Self-service portal for customers
5. **Analytics:** Track AI selection accuracy and customer satisfaction

---

**Ready to start testing! 🚀**

**Step 1:** Run automated script
**Step 2:** Continue with manual steps for supplier confirmation and delivery
