# 📋 How to View Order Information

**Date:** January 11, 2026

---

## 🔍 How Orders Are Identified

Orders don't have a "name" field. Instead, they are identified by:

1. **Order ID** - Unique number (e.g., "Order #123")
2. **Customer Name** - Who placed the order
3. **Product Type** - What was ordered
4. **Order Display Format:** `Order #{id} - {Customer Name} ({Product Type})`

---

## 📊 Where to View Orders

### Option 1: Orders List Page
1. Login as admin
2. Click "Orders" in the sidebar
3. You'll see a list of all orders with:
   - **Order #ID** (e.g., "Order #123")
   - **Customer Name**
   - **Product Type**
   - **Quantity**
   - **Status**
   - **Delivery Date**
   - **Created Date**

### Option 2: Command Center Dashboard
1. Login as admin
2. You'll see "Recent Orders" section
3. Shows last 4 orders with basic info

---

## 🔎 How to Find a Specific Order

### By Order ID
- Look for "Order #123" in the orders list
- Use search box and type the order ID number

### By Customer Name
- Use search box in Orders page
- Type customer name
- Orders will filter automatically

### By Product Type
- Use search box
- Type product name (e.g., "Laptop", "Desktop")
- Orders will filter

---

## 📝 Order Information Displayed

Each order shows:

```
Order #123
├── Customer: Ahmed Hassan
├── Phone: +201234567890
├── Product: Laptop
├── Quantity: 5
├── Delivery Date: Jan 18, 2026
├── Status: Pending
└── Created: Jan 11, 2026
```

---

## 🔍 Quick Ways to Check Order Name/ID

### In the UI:
1. Go to Orders page
2. Look at the top of each order card: "Order #123"
3. That's the order identifier

### Via Browser Console:
1. Open browser console (F12)
2. Type: `localStorage.getItem('orders')` (if stored)
3. Or check Network tab for API responses

### Via API:
```bash
# Get all orders
curl http://localhost:8000/api/orders/

# Get specific order
curl http://localhost:8000/api/orders/123/
```

---

## 💡 Tips

- **Order ID** is the unique identifier
- **Customer Name** helps identify who placed it
- **Product Type** shows what was ordered
- Use **Search** to find orders quickly
- **Filter by Status** to see pending/delivered orders

---

## 🎯 Example

If you created an order with:
- Customer: "Test Customer 1234567890"
- Product: "Test Product 1234567890"

You'll see it as:
- **Order #X** (where X is the auto-generated ID)
- Customer: Test Customer 1234567890
- Product: Test Product 1234567890

---

**To view orders:** Click "Orders" in the sidebar after logging in as admin!
