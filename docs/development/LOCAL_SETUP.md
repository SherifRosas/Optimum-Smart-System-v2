# Local Development Setup Guide

This guide will help you set up and run the Optimum Smart System locally.

## Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.9+
- **Git**

## Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Optimum-Smart-System-v
```

### 2. Backend Setup

```bash
cd optimum-backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables (create .env file)
# Copy from .env.example and fill in values
# For local development, you can use defaults

# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Seed initial data (optional)
python manage.py seed_data

# Start development server
python manage.py runserver
```

The backend will be available at `http://localhost:8000`

### 3. Frontend Setup

```bash
cd optimum-frontend

# Install dependencies
npm install

# Set environment variables (create .env file)
# Copy from .env.example
# For local development:
# VITE_API_URL=http://localhost:8000/api
# VITE_WS_URL=ws://localhost:8000/ws

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Environment Variables

### Backend (.env in optimum-backend/)

```env
DJANGO_ENV=development
DEBUG=True
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
ADMIN_EMAIL=sherifrosas.ai@gmail.com
```

### Frontend (.env in optimum-frontend/)

```env
VITE_API_URL=http://localhost:8000/api
VITE_WS_URL=ws://localhost:8000/ws
```

## Running Both Servers

### Windows

**Option 1: Batch File (Recommended - Easiest)**
```powershell
.\start_servers.bat
```
Opens two command windows - one for each server.

**Option 2: PowerShell Script (Separate Windows)**
```powershell
.\start_local.ps1
```

**Option 3: PowerShell Script (Same Window)**
```powershell
.\start_local_simple.ps1
```

**Option 4: Manual (Separate Terminals)**
```powershell
# Terminal 1:
cd optimum-backend
python manage.py runserver

# Terminal 2:
cd optimum-frontend
npm run dev
```

### macOS/Linux

```bash
# Option 1: Use the provided script
./start_servers.sh

# Option 2: Run in separate terminals
# Terminal 1:
cd optimum-backend
python manage.py runserver

# Terminal 2:
cd optimum-frontend
npm run dev
```

## Access Points

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000/api
- **Admin Panel:** http://localhost:8000/admin/
- **API Documentation:** http://localhost:8000/api/schema/swagger-ui/

## Default Admin Credentials

- Username: `admin`
- Password: `admin123`

⚠️ **Change these in production!**

## Troubleshooting

### Backend Issues

1. **Port 8000 already in use:**
   ```bash
   python manage.py runserver 8001
   ```

2. **Migration errors:**
   ```bash
   python manage.py migrate --run-syncdb
   ```

3. **Module not found:**
   ```bash
   pip install -r requirements.txt
   ```

### Frontend Issues

1. **Port 3000 already in use:**
   ```bash
   npm run dev -- --port 3001
   ```

2. **API connection errors:**
   - Check that backend is running
   - Verify VITE_API_URL in .env
   - Check CORS settings in backend

3. **Module not found:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## Development Tips

1. **Hot Reload:** Both servers support hot reload
2. **API Testing:** Use the Swagger UI at `/api/schema/swagger-ui/`
3. **Database:** SQLite is used by default (db.sqlite3)
4. **Logs:** Check console output for errors

## Next Steps

- Read the [API Documentation](../api/README.md)
- Check [Troubleshooting Guide](TROUBLESHOOTING.md)
- Review [Deployment Guide](../deployment/README.md)

