# 🚀 Local Development - Quick Start

## Prerequisites
- Docker Desktop installed and running
- Python 3.9+
- Node.js 18+

## Quick Start (Windows)

### 1. Start Backend (Terminal 1)
```bash
cd optimum-backend
start-local.bat
```

### 2. Start Frontend (Terminal 2)
```bash
cd optimum-frontend
start-local.bat
```

## Quick Start (Linux/Mac)

### 1. Start Backend (Terminal 1)
```bash
cd optimum-backend
chmod +x start-local.sh
./start-local.sh
```

### 2. Start Frontend (Terminal 2)
```bash
cd optimum-frontend
chmod +x start-local.sh
./start-local.sh
```

## What Gets Started

### Backend:
- ✅ PostgreSQL (Docker)
- ✅ Redis (Docker)
- ✅ Django ASGI server (port 8000)
- ✅ Celery worker
- ✅ Celery beat

### Frontend:
- ✅ Vite dev server (port 5173)

## Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000/api/
- **API Docs**: http://localhost:8000/api/docs/
- **Admin**: http://localhost:8000/admin/ (admin/admin123)
- **WebSocket**: ws://localhost:8000/ws/orders/

## Troubleshooting

**Docker not starting?**
```bash
docker-compose -f docker-compose.local.yml up -d
```

**Database connection error?**
Wait 10 seconds for PostgreSQL to initialize, then try again.

**Port already in use?**
Stop other services using ports 8000, 5173, 5432, or 6379.

See [LOCAL_DEVELOPMENT_GUIDE.md](../LOCAL_DEVELOPMENT_GUIDE.md) for detailed instructions.










