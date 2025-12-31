# 🚀 Quick Start Testing Guide

## ✅ Servers Starting

The `start_local.ps1` script is running in the background. It will:
- Start backend server on port 8000
- Start frontend server on port 3000

**Wait 10-15 seconds for servers to fully start.**

---

## 🔍 Verify Servers Are Running

### Check Backend:
Open in browser: http://localhost:8000/health/

**Expected:** JSON response with `{"status": "healthy", ...}`

### Check Frontend:
Open in browser: http://localhost:3000

**Expected:** Optimum Smart System application loads

---

## 📋 Start Testing

### Step 1: Open Test Documents
1. Open `COMPREHENSIVE_TEST_SCENARIO.md` - Your test guide
2. Open `TEST_RESULTS_TEMPLATE.md` - To document results

### Step 2: Begin Testing
Start with **Phase 1: Master Admin Testing**

1. Navigate to http://localhost:3000
2. Login as master admin:
   - Email: `sherifrosas.ai@gmail.com`
   - Password: [your password]
3. Follow the test steps in `COMPREHENSIVE_TEST_SCENARIO.md`

---

## 🎯 Test Phases

1. **Phase 1:** Master Admin Testing
2. **Phase 2:** User Role Testing
3. **Phase 3:** Order Creation Flow
4. **Phase 4:** Complete Page Testing
5. **Phase 5:** AI Features Testing ⭐ (NEW - 8 comprehensive AI tests)
6. **Phase 6:** Feature Testing
7. **Phase 7:** Error Handling & Edge Cases

---

## 🤖 AI Testing Highlights

**Phase 5 includes:**
- AI Chat Widget Basic Functionality
- AI Chat Context Awareness
- AI Natural Language Order Creation
- AI Proactive Suggestions
- AI Error Handling
- AI Chat History & Persistence
- AI Role-Based Responses
- AI Advanced Features

**Current AI Rating:** 6.5/10  
**Target:** 10/10

---

## ⚠️ If Servers Don't Start

### Manual Start:

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

## 📝 Testing Tips

- Document everything in `TEST_RESULTS_TEMPLATE.md`
- Take screenshots of issues
- Test all user roles
- Pay special attention to AI features (Phase 5)
- Note any bugs or improvements needed

---

**Ready to test! Open http://localhost:3000 and begin! 🚀**


