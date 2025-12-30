# Quick Reference Guide

## 🚀 Start Development

### Windows

**Option 1: Batch File (Easiest)**
```powershell
.\start_servers.bat
```
or
```cmd
start_servers.bat
```
Opens two command windows - one for each server. Most reliable!

**Option 2: PowerShell - Separate Windows**
```powershell
.\start_local.ps1
```
Opens two PowerShell windows - one for each server.

**Option 3: PowerShell - Same Window**
```powershell
.\start_local_simple.ps1
```
Runs both servers in the same window.

### macOS/Linux
```bash
./start_local.sh
```

### Manual
```bash
# Terminal 1 - Backend
cd optimum-backend
python manage.py runserver

# Terminal 2 - Frontend
cd optimum-frontend
npm run dev
```

## 🔗 URLs

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000/api
- **Admin Panel:** http://localhost:8000/admin/
- **API Docs:** http://localhost:8000/api/schema/swagger-ui/

## ⚙️ Environment Variables

### Backend (`optimum-backend/.env`)
```env
DJANGO_ENV=development
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000
ADMIN_EMAIL=sherifrosas.ai@gmail.com
```

### Frontend (`optimum-frontend/.env`)
```env
VITE_API_URL=http://localhost:8000/api
VITE_WS_URL=ws://localhost:8000/ws
```

## 🧪 Run Tests

### Backend
```bash
cd optimum-backend
pytest
```

### Frontend
```bash
cd optimum-frontend
npm test
```

## 📦 Build for Production

### Backend
```bash
cd optimum-backend
python manage.py collectstatic --noinput
```

### Frontend
```bash
cd optimum-frontend
npm run build
```

## 🔧 Common Commands

### Django
```bash
# Migrations
python manage.py migrate
python manage.py makemigrations

# Create superuser
python manage.py createsuperuser

# Seed data
python manage.py seed_data

# Shell
python manage.py shell
```

### Frontend
```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Type check
npm run type-check
```

## 🐛 Troubleshooting

### Backend won't start
- Check Python version: `python --version` (need 3.9+)
- Activate virtual environment
- Install dependencies: `pip install -r requirements.txt`
- Check port 8000 is free

### Frontend won't start
- Check Node version: `node --version` (need 18+)
- Install dependencies: `npm install`
- Check port 3000 is free

### API connection errors
- Verify backend is running
- Check `VITE_API_URL` in frontend `.env`
- Check CORS settings in backend

### Database errors
- Run migrations: `python manage.py migrate`
- Check database file exists (SQLite)
- Verify DATABASE_URL (PostgreSQL)

## 📚 Documentation

- [Local Setup](docs/development/LOCAL_SETUP.md)
- [Deployment Guide](docs/deployment/DEPLOYMENT_GUIDE.md)
- [Project Review](PROJECT_REVIEW.md)
- [Implementation Summary](IMPLEMENTATION_COMPLETE.md)

## 🔐 Default Credentials

**Admin Panel:**
- Username: `admin`
- Password: `admin123`

⚠️ **Change in production!**

## 🌍 Production URLs

- **Frontend:** https://optimum-smart-system-navy.vercel.app
- **Backend:** https://sherifrosas.pythonanywhere.com/api
- **Admin:** https://sherifrosas.pythonanywhere.com/admin/

