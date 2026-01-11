# Setup and Run Script for Optimum Smart System v2.2.0
# MAIN ACTIVE VERSION - This script sets up and starts both backend and frontend servers

$ErrorActionPreference = "Stop"

# Get the script directory
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$BackendPath = Join-Path $ScriptDir "optimum-backend"
$FrontendPath = Join-Path $ScriptDir "optimum-frontend\frontend"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Optimum Smart System v2.2.0 - Setup" -ForegroundColor Cyan
Write-Host "MAIN ACTIVE VERSION" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check prerequisites
Write-Host "Checking prerequisites..." -ForegroundColor Yellow
try {
    $pythonVersion = python --version 2>&1
    Write-Host "  ✓ Python: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Python not found! Please install Python 3.10+" -ForegroundColor Red
    exit 1
}

try {
    $nodeVersion = node --version 2>&1
    Write-Host "  ✓ Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Node.js not found! Please install Node.js 18+" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Setup Backend
Write-Host "Setting up Backend..." -ForegroundColor Yellow
Set-Location $BackendPath

# Create virtual environment if it doesn't exist
if (-not (Test-Path "venv")) {
    Write-Host "  Creating virtual environment..." -ForegroundColor Cyan
    python -m venv venv
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  ✗ Failed to create virtual environment" -ForegroundColor Red
        exit 1
    }
}

# Activate virtual environment
Write-Host "  Activating virtual environment..." -ForegroundColor Cyan
& .\venv\Scripts\Activate.ps1

# Install dependencies
Write-Host "  Installing Python dependencies..." -ForegroundColor Cyan
pip install --upgrade pip | Out-Null
pip install -r requirements.txt
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ⚠ Some dependencies may have failed. Continuing..." -ForegroundColor Yellow
}

# Install django-filter if missing
pip install django-filter | Out-Null

# Run migrations
Write-Host "  Running database migrations..." -ForegroundColor Cyan
python manage.py migrate
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ✗ Migrations failed" -ForegroundColor Red
    exit 1
}

# Create superuser if it doesn't exist
Write-Host "  Checking for admin user..." -ForegroundColor Cyan
python manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); import sys; sys.exit(0 if User.objects.filter(is_superuser=True).exists() else (User.objects.create_superuser('admin', 'admin@example.com', 'admin123') or 1))" 2>&1 | Out-Null

Write-Host "  ✓ Backend setup complete!" -ForegroundColor Green
Write-Host ""

# Setup Frontend
Write-Host "Setting up Frontend..." -ForegroundColor Yellow
Set-Location $FrontendPath

# Install dependencies if node_modules doesn't exist
if (-not (Test-Path "node_modules")) {
    Write-Host "  Installing Node.js dependencies..." -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  ✗ Failed to install frontend dependencies" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "  Node modules already installed" -ForegroundColor Cyan
}

Write-Host "  ✓ Frontend setup complete!" -ForegroundColor Green
Write-Host ""

# Return to root
Set-Location $ScriptDir

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting Servers..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start Backend in new window
Write-Host "🌐 Starting Backend Server (new window)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$BackendPath'; .\venv\Scripts\Activate.ps1; Write-Host 'Backend Server Starting...' -ForegroundColor Green; python manage.py runserver"

# Wait a moment for backend to start
Start-Sleep -Seconds 2

# Start Frontend in new window
Write-Host "🎨 Starting Frontend Server (new window)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$FrontendPath'; Write-Host 'Frontend Server Starting...' -ForegroundColor Green; npm run dev"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Servers are starting in new windows." -ForegroundColor White
Write-Host ""
Write-Host "Access the application:" -ForegroundColor Yellow
Write-Host "  Frontend: http://localhost:5173" -ForegroundColor White
Write-Host "  Backend API: http://localhost:8000/api/" -ForegroundColor White
Write-Host "  Admin Panel: http://localhost:8000/admin/" -ForegroundColor White
Write-Host "  API Docs: http://localhost:8000/api/docs/" -ForegroundColor White
Write-Host ""
Write-Host "Admin Credentials:" -ForegroundColor Yellow
Write-Host "  Username: admin" -ForegroundColor White
Write-Host "  Password: admin123" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
