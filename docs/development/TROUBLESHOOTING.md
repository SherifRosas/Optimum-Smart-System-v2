# Troubleshooting Guide

## Connection Refused Error (ERR_CONNECTION_REFUSED)

### Problem
You see "This site can't be reached" or "ERR_CONNECTION_REFUSED" when trying to access:
- http://localhost:8000 (Backend)
- http://localhost:5173 (Frontend)

### Solution

#### Step 1: Check if Servers are Running
```powershell
# Check if ports are in use
netstat -ano | findstr ":8000 :5173"

# Check running processes
Get-Process | Where-Object {$_.ProcessName -like "*python*" -or $_.ProcessName -like "*node*"}
```

#### Step 2: Start Servers Properly

**Option A: Use the Startup Script (Recommended)**
```powershell
.\start_servers.ps1
```

**Option B: Manual Start**

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

#### Step 3: Verify Servers Started

**Test Backend:**
```powershell
curl http://localhost:8000/health/
```

Expected: `{"status": "healthy", ...}`

**Test Frontend:**
Open browser: http://localhost:5173

---

## Common Issues

### Issue 1: Port Already in Use

**Symptoms:**
- Error: "Address already in use"
- Multiple processes on same port

**Solution:**
```powershell
# Find process using port 8000
netstat -ano | findstr ":8000"
# Note the PID (last number)

# Kill the process
taskkill /PID <PID> /F

# Or kill all Python processes (careful!)
Get-Process python | Stop-Process -Force
```

### Issue 2: Backend Won't Start

**Check:**
```powershell
cd optimum-backend

# Check if dependencies are installed
pip list | findstr django

# Install if missing
pip install -r requirements.txt

# Check for errors
python manage.py check

# Run migrations
python manage.py migrate
```

### Issue 3: Frontend Won't Start

**Check:**
```powershell
cd optimum-frontend\frontend

# Check if node_modules exists
Test-Path node_modules

# If not, install dependencies
npm install

# Clear cache and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Issue 4: CORS Errors

**Symptoms:**
- Frontend can't connect to backend
- Browser console shows CORS errors

**Solution:**
1. Check `optimum-backend/optimum_system/settings.py`:
   ```python
   CORS_ALLOWED_ORIGINS = [
       "http://localhost:5173",
       "http://127.0.0.1:5173",
   ]
   ```

2. Restart backend server after changes

### Issue 5: Database Errors

**Symptoms:**
- Migration errors
- Database locked errors

**Solution:**
```powershell
cd optimum-backend

# Check migrations
python manage.py showmigrations

# Run migrations
python manage.py migrate

# If SQLite is locked, close all connections and try again
```

### Issue 6: Module Not Found Errors

**Backend:**
```powershell
cd optimum-backend
pip install -r requirements.txt
```

**Frontend:**
```powershell
cd optimum-frontend\frontend
npm install
```

---

## Quick Fixes

### Restart Everything
```powershell
# Stop all Python processes
Get-Process python | Stop-Process -Force

# Stop all Node processes
Get-Process node | Stop-Process -Force

# Wait a moment
Start-Sleep -Seconds 2

# Start again
.\start_servers.ps1
```

### Clean Install
```powershell
# Backend
cd optimum-backend
pip install --upgrade -r requirements.txt
python manage.py migrate

# Frontend
cd optimum-frontend\frontend
Remove-Item -Recurse -Force node_modules
npm install
```

### Check Logs

**Backend logs:**
- Check the terminal where you ran `python manage.py runserver`
- Look for error messages in red

**Frontend logs:**
- Check the terminal where you ran `npm run dev`
- Check browser console (F12)

---

## Verification Checklist

- [ ] Python is installed: `python --version`
- [ ] Node.js is installed: `node --version`
- [ ] Backend dependencies installed: `pip list | findstr django`
- [ ] Frontend dependencies installed: `Test-Path optimum-frontend\frontend\node_modules`
- [ ] Port 8000 is free: `netstat -ano | findstr ":8000"`
- [ ] Port 5173 is free: `netstat -ano | findstr ":5173"`
- [ ] Backend health check works: `curl http://localhost:8000/health/`
- [ ] Frontend loads: Open http://localhost:5173

---

## Still Having Issues?

1. **Check the server windows:**
   - Backend window should show: "Starting development server at http://127.0.0.1:8000/"
   - Frontend window should show: "Local: http://localhost:5173/"

2. **Check firewall:**
   - Windows Firewall might be blocking connections
   - Try disabling temporarily to test

3. **Check antivirus:**
   - Some antivirus software blocks localhost connections
   - Add exceptions for Python and Node.js

4. **Try different ports:**
   ```powershell
   # Backend on different port
   python manage.py runserver 8001
   
   # Frontend will auto-select next available port
   ```

---

## Getting Help

If you're still stuck:
1. Check server terminal output for errors
2. Check browser console (F12) for errors
3. Verify all steps in `LOCAL_RUN_INSTRUCTIONS.md`
4. Check `DEPLOYMENT_STATUS.md` for current system status

---

*Last Updated: 2024*




