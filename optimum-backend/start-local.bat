@echo off
REM Start Local Development Environment with Full v2.0 Features (Windows)

echo 🚀 Starting Optimum Smart System - Local Development
echo ==================================================

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker is not running. Please start Docker Desktop.
    pause
    exit /b 1
)

REM Start Docker Compose services (only PostgreSQL and Redis)
echo 📦 Starting Docker services (PostgreSQL, Redis)...
docker-compose -f docker-compose.local.yml up -d

REM Wait for services to be ready
echo ⏳ Waiting for services to be ready...
timeout /t 5 /nobreak >nul

echo ✅ Docker services started

REM Activate virtual environment
if exist venv\Scripts\activate.bat (
    echo 🐍 Activating virtual environment...
    call venv\Scripts\activate.bat
) else (
    echo 📦 Creating virtual environment...
    python -m venv venv
    call venv\Scripts\activate.bat
    echo 📦 Installing dependencies...
    pip install -r requirements_v2.txt
)

REM Set environment variables
set DJANGO_SETTINGS_MODULE=optimum_system.settings_v2
set DEBUG=True
set DATABASE_URL=postgresql://optimum_user:optimum_pass@localhost:5432/optimum_db
set REDIS_URL=redis://localhost:6379/0

REM Run migrations
echo 🗄️  Running database migrations...
python manage.py migrate

REM Create superuser if needed
echo 👤 Checking for superuser...
python manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@example.com', 'admin123')"

REM Collect static files
echo 📁 Collecting static files...
python manage.py collectstatic --noinput

REM Start Celery worker in new window
echo ⚙️  Starting Celery worker...
start "Celery Worker" cmd /k "celery -A optimum_system worker --loglevel=info"

REM Start Celery beat in new window
echo ⏰ Starting Celery beat...
start "Celery Beat" cmd /k "celery -A optimum_system beat --loglevel=info"

REM Start Django development server with ASGI
echo 🌐 Starting Django server with ASGI (WebSocket support)...
echo.
echo ==================================================
echo ✅ All services started!
echo ==================================================
echo 📡 API: http://localhost:8000/api/
echo 📚 API Docs: http://localhost:8000/api/docs/
echo 🔌 WebSocket: ws://localhost:8000/ws/orders/
echo 👤 Admin: http://localhost:8000/admin/ (admin/admin123)
echo.
echo Press Ctrl+C to stop the server
echo ==================================================

REM Start ASGI server
daphne -b 0.0.0.0 -p 8000 optimum_system.asgi:application

REM Cleanup
docker-compose -f docker-compose.local.yml down

