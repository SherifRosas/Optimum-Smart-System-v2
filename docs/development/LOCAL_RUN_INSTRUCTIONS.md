# Local Run Instructions

## Quick Start

### Method 1: PowerShell Script (Easiest)
```powershell
.\start_local.ps1
```

This will start both backend and frontend automatically.

### Method 2: Manual Start

#### Terminal 1 - Backend Server
```powershell
cd optimum-backend
python manage.py migrate
python manage.py runserver 8000
```

**Backend will be available at:**
- API: http://localhost:8000/api/
- Admin: http://localhost:8000/admin/
- Health: http://localhost:8000/health/
- API Docs: http://localhost:8000/api/docs/

#### Terminal 2 - Frontend Server
```powershell
cd optimum-frontend\frontend
npm install  # First time only
npm run dev
```

**Frontend will be available at:**
- http://localhost:5173

---

## Verify Everything Works

### 1. Test Backend Health
```powershell
curl http://localhost:8000/health/
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "...",
  "service": "optimum-smart-system"
}
```

### 2. Test Frontend
Open browser: http://localhost:5173

### 3. Test API Connection
Frontend should automatically connect to backend at `http://localhost:8000/api`

---

## Common Issues

### Backend won't start
```powershell
# Check if port 8000 is in use
netstat -ano | findstr :8000

# Install dependencies
cd optimum-backend
pip install -r requirements.txt

# Run migrations
python manage.py migrate
```

### Frontend won't start
```powershell
# Clear cache and reinstall
cd optimum-frontend\frontend
rm -r node_modules
rm package-lock.json
npm install
npm run dev
```

### Port already in use
```powershell
# Backend: Use different port
python manage.py runserver 8001

# Frontend: Vite will auto-select next available port
```

---

## Development Workflow

1. **Start Backend** (Terminal 1)
   ```powershell
   cd optimum-backend
   python manage.py runserver
   ```

2. **Start Frontend** (Terminal 2)
   ```powershell
   cd optimum-frontend\frontend
   npm run dev
   ```

3. **Make Changes**
   - Backend: Auto-reloads on file changes
   - Frontend: Hot module replacement (HMR)

4. **Run Tests**
   ```powershell
   # Backend tests
   cd optimum-backend
   python -m pytest -v
   
   # Frontend type check
   cd optimum-frontend\frontend
   npm run type-check
   ```

---

## Environment Setup

### Backend Environment Variables
Create `optimum-backend/.env`:
```env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

### Frontend Environment Variables
Create `optimum-frontend/frontend/.env.local`:
```env
REACT_APP_API_URL=http://localhost:8000/api
```

---

## Stopping Servers

### If using PowerShell script
Press `Ctrl+C` in the terminal running the script

### If running manually
Press `Ctrl+C` in each terminal

---

## Next Steps

Once local development is working:
1. See `DEPLOYMENT_GUIDE.md` for production deployment
2. Check `SYSTEM_STATUS.md` for system health
3. Review `LONG_TERM_RELIABILITY_PLAN.md` for maintenance

---

*Happy coding! 🚀*




