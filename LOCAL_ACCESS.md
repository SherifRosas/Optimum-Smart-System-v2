# 🚀 Local Access Guide - Version 2.4.0

**Status:** ✅ Servers Starting

---

## 📍 Access URLs

### Frontend (React App)
- **URL:** http://localhost:5173
- **Status:** Starting in separate PowerShell window
- **What you'll see:** Login page

### Backend API
- **URL:** http://localhost:8000/api
- **Status:** Starting in separate PowerShell window
- **API Docs:** http://localhost:8000/api/schema/swagger-ui/

### Admin Panel (Django)
- **URL:** http://localhost:8000/admin/
- **Login:** Use admin credentials below

---

## 🔐 Login Credentials

### Admin User
- **Username:** `admin`
- **Password:** `admin123`
- **Role:** Super Admin
- **Access:** Full system access

---

## ✅ What to Check

### 1. Verify Servers Are Running
Look for two PowerShell windows that opened:
- **Backend Window:** Should show "Starting development server at http://127.0.0.1:8000/"
- **Frontend Window:** Should show "Local: http://localhost:5173"

### 2. Open the Application
1. Open your browser
2. Go to: **http://localhost:5173**
3. You should see the login page

### 3. Login as Admin
1. Enter username: `admin`
2. Enter password: `admin123`
3. Click "Sign In"
4. You should see the **CommandCenter** (admin dashboard)

---

## 🎯 What to Test

### Navigation (v2.4.0 Feature)
1. ✅ Click "Orders" in sidebar → Should show OrderList
2. ✅ Click "Customers" in sidebar → Should show AdminUserManagement
3. ✅ Click "Suppliers" in sidebar → Should show SupplierCommunication
4. ✅ Click "Dashboard" → Should return to CommandCenter

### Language Switching (v2.4.0 Feature)
1. ✅ Click LanguageSwitcher in header (top right)
2. ✅ Switch to Arabic → All text should translate
3. ✅ Switch to English → All text should translate

### Dashboard Separation (v2.4.0 Fix)
1. ✅ Only CommandCenter should appear (NOT CustomerDashboard)
2. ✅ Version should show "v2.4.0" in header and footer

---

## ⚠️ Troubleshooting

### If Frontend Won't Load
1. Check the frontend PowerShell window for errors
2. Make sure port 5173 is not in use
3. Try: `cd optimum-frontend/frontend; npm run dev`

### If Backend Won't Start
1. Check the backend PowerShell window for errors
2. Make sure port 8000 is not in use
3. Make sure virtual environment is activated
4. Try: `cd optimum-backend; .\venv\Scripts\Activate.ps1; python manage.py runserver`

### If Login Fails
1. Make sure backend is running (check http://localhost:8000/api/health/)
2. Recreate admin user: `cd optimum-backend; python create_admin.py`

---

## 🛑 Stop Servers

To stop the servers:
1. Close the PowerShell windows (backend and frontend)
2. Or press `Ctrl+C` in each window

---

## 📝 Next Steps

After verifying everything works:
1. ✅ Test all navigation items
2. ✅ Test language switching
3. ✅ Verify version shows v2.4.0
4. ✅ Run E2E tests: `cd optimum-frontend; npm run test:e2e`

---

**Ready to test!** 🚀

Open http://localhost:5173 in your browser now!
