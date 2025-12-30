# 🚀 START HERE - Quick Start Guide

## Problem: Connection Refused Error?

If you see "ERR_CONNECTION_REFUSED", the servers aren't running. Follow these steps:

---

## ✅ Solution: Start the Servers

### Method 1: Use PowerShell Script (Easiest)

1. **Open PowerShell in the project folder**
2. **Run:**
   ```powershell
   .\start_servers.ps1
   ```
3. **Wait for both servers to start** (about 10-15 seconds)
4. **Open your browser:** http://localhost:5173

The script will:
- ✅ Check if ports are available
- ✅ Start backend server (port 8000)
- ✅ Start frontend server (port 5173)
- ✅ Open browser automatically

---

### Method 2: Manual Start (Two Terminals)

#### Terminal 1 - Backend:
```powershell
cd optimum-backend
python manage.py runserver 8000
```

**Wait until you see:**
```
Starting development server at http://127.0.0.1:8000/
```

#### Terminal 2 - Frontend:
```powershell
cd optimum-frontend\frontend
npm install  # First time only
npm run dev
```

**Wait until you see:**
```
  ➜  Local:   http://localhost:5173/
```

#### Then Open Browser:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8000/api/
- **Health Check:** http://localhost:8000/health/

---

## 🔍 Verify Servers Are Running

### Test Backend:
```powershell
curl http://localhost:8000/health/
```

**Expected response:**
```json
{"status": "healthy", "timestamp": "...", "service": "optimum-smart-system"}
```

### Test Frontend:
Open browser: http://localhost:5173

---

## ❌ Still Not Working?

### Quick Fixes:

1. **Kill existing processes:**
   ```powershell
   Get-Process python | Stop-Process -Force
   Get-Process node | Stop-Process -Force
   ```

2. **Check if ports are free:**
   ```powershell
   netstat -ano | findstr ":8000 :5173"
   ```
   (Should show nothing if ports are free)

3. **Install dependencies:**
   ```powershell
   # Backend
   cd optimum-backend
   pip install -r requirements.txt
   
   # Frontend
   cd optimum-frontend\frontend
   npm install
   ```

4. **See TROUBLESHOOTING.md for more help**

---

## 📋 What Should Happen

### Backend Terminal Should Show:
```
Watching for file changes with StatReloader
Performing system checks...
System check identified no issues (0 silenced).
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

### Frontend Terminal Should Show:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## 🎯 Next Steps

Once servers are running:
1. ✅ Open http://localhost:5173 in browser
2. ✅ Test the application
3. ✅ See `DEPLOYMENT_GUIDE.md` for production deployment

---

**Need Help?** See `TROUBLESHOOTING.md` for detailed solutions.




