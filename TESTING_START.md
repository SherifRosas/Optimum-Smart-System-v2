# 🧪 Testing Process - Quick Start Guide

## ✅ Step 1: Verify Servers Are Running

### Check Backend (Port 8000)
```powershell
# Test backend health
curl http://localhost:8000/health/
```

**Expected:** `{"status": "healthy", ...}`

### Check Frontend (Port 3000)
Open browser: **http://localhost:3000**

**Expected:** Role Selection page loads

---

## 🚀 Step 2: Start Servers (If Not Running)

### Option A: Use PowerShell Script
```powershell
.\start_local.ps1
```

### Option B: Manual Start

**Terminal 1 - Backend:**
```powershell
cd optimum-backend
python manage.py runserver 8000
```

**Terminal 2 - Frontend:**
```powershell
cd optimum-frontend\frontend
npm run dev
```

---

## 📋 Step 3: Begin Testing

Follow the **COMPREHENSIVE_TEST_SCENARIO.md** document step by step:

### Phase 1: Master Admin Testing
1. ✅ Access Main Page (http://localhost:3000)
2. ✅ Master Admin Login
3. ✅ Master Admin Dashboard
4. ✅ User Management - Create Users

### Phase 2: User Role Testing
5. ✅ Sub-Admin Testing
6. ✅ Supplier Testing
7. ✅ Customer (Product Requester) Testing

### Phase 3: Order Management
8. ✅ Create Order (as Customer)
9. ✅ View Orders (as Admin/Supplier)
10. ✅ Update Order Status

### Phase 4: AI Features Testing
11. ✅ AI Chatbot
12. ✅ Order Analysis
13. ✅ AI Suggestions
14. ✅ AI Insights

### Phase 5: Complete Flow Testing
15. ✅ End-to-End Order Flow
16. ✅ Error Handling
17. ✅ Edge Cases

---

## 📝 Testing Checklist

Use this checklist as you test:

- [ ] **Phase 1: Master Admin**
  - [ ] Role Selection page loads
  - [ ] Master admin login works
  - [ ] Dashboard displays correctly
  - [ ] User creation works for all roles

- [ ] **Phase 2: User Roles**
  - [ ] Sub-admin can access their features
  - [ ] Supplier can manage orders
  - [ ] Customer can create orders

- [ ] **Phase 3: Orders**
  - [ ] Customer creates order successfully
  - [ ] Admin/Supplier can view orders
  - [ ] Order status updates work

- [ ] **Phase 4: AI Features**
  - [ ] AI chatbot responds
  - [ ] Order analysis displays
  - [ ] AI suggestions appear
  - [ ] AI insights are accurate

- [ ] **Phase 5: Final Checks**
  - [ ] All pages load without errors
  - [ ] No console errors
  - [ ] All features work as expected
  - [ ] Ready for deployment

---

## 🎯 Current Test Status

**Starting:** Phase 1 - Master Admin Testing

**Next Steps:**
1. Open http://localhost:3000
2. Verify Role Selection page loads
3. Click on "Admin" role
4. Login with master admin credentials
5. Begin testing dashboard and user management

---

## 📊 Test Results Template

Document your findings in **TEST_RESULTS_TEMPLATE.md**:

- ✅ Passed tests
- ❌ Failed tests
- ⚠️ Issues found
- 📝 Notes and observations

---

## 🆘 Need Help?

- **Servers not starting?** See troubleshooting in `COMPREHENSIVE_TEST_SCENARIO.md`
- **Login issues?** Check master admin account exists
- **Errors?** Check browser console and backend logs

---

**Ready to start testing!** 🚀


