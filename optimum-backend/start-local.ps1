# PowerShell script to start local development
# Usage: .\start-local.ps1

Write-Host "🚀 Starting Optimum Smart System - Local Development" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# Check if Docker is running
try {
    docker info | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Docker not running"
    }
} catch {
    Write-Host "❌ Docker is not running. Please start Docker Desktop." -ForegroundColor Red
    Write-Host "   After Docker starts, run this script again." -ForegroundColor Yellow
    exit 1
}

# Start Docker Compose services (only PostgreSQL and Redis)
Write-Host "📦 Starting Docker services (PostgreSQL, Redis)..." -ForegroundColor Yellow
docker-compose -f docker-compose.local.yml up -d

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to start Docker services" -ForegroundColor Red
    exit 1
}

# Wait for services to be ready
Write-Host "⏳ Waiting for services to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

Write-Host "✅ Docker services started" -ForegroundColor Green

# Activate virtual environment
if (Test-Path "venv\Scripts\Activate.ps1") {
    Write-Host "🐍 Activating virtual environment..." -ForegroundColor Yellow
    & .\venv\Scripts\Activate.ps1
} else {
    Write-Host "📦 Creating virtual environment..." -ForegroundColor Yellow
    python -m venv venv
    & .\venv\Scripts\Activate.ps1
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    pip install -r requirements_v2.txt
}

# Set environment variables
$env:DJANGO_SETTINGS_MODULE = "optimum_system.settings_v2"
$env:DEBUG = "True"
$env:DATABASE_URL = "postgresql://optimum_user:optimum_pass@localhost:5432/optimum_db"
$env:REDIS_URL = "redis://localhost:6379/0"

# Run migrations
Write-Host "🗄️  Running database migrations..." -ForegroundColor Yellow
python manage.py migrate

# Create superuser if needed
Write-Host "👤 Checking for superuser..." -ForegroundColor Yellow
python manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); import sys; sys.exit(0 if User.objects.filter(username='admin').exists() else (User.objects.create_superuser('admin', 'admin@example.com', 'admin123') or 1))"

# Collect static files
Write-Host "📁 Collecting static files..." -ForegroundColor Yellow
python manage.py collectstatic --noinput

# Start Celery worker in new window
Write-Host "⚙️  Starting Celery worker..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; .\venv\Scripts\Activate.ps1; `$env:DJANGO_SETTINGS_MODULE='optimum_system.settings_v2'; celery -A optimum_system worker --loglevel=info"

# Start Celery beat in new window
Write-Host "⏰ Starting Celery beat..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; .\venv\Scripts\Activate.ps1; `$env:DJANGO_SETTINGS_MODULE='optimum_system.settings_v2'; celery -A optimum_system beat --loglevel=info"

# Start Django development server with ASGI
Write-Host "🌐 Starting Django server with ASGI (WebSocket support)..." -ForegroundColor Yellow
Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "✅ All services started!" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "📡 API: http://localhost:8000/api/" -ForegroundColor White
Write-Host "📚 API Docs: http://localhost:8000/api/docs/" -ForegroundColor White
Write-Host "🔌 WebSocket: ws://localhost:8000/ws/orders/" -ForegroundColor White
Write-Host "👤 Admin: http://localhost:8000/admin/ (admin/admin123)" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Start ASGI server
daphne -b 0.0.0.0 -p 8000 optimum_system.asgi:application

















