# Start Optimum Smart System Servers
# This script properly starts both backend and frontend

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting Optimum Smart System" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if ports are already in use
Write-Host "[1/5] Checking ports..." -ForegroundColor Yellow
$port8000 = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
$port5173 = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue

if ($port8000) {
    Write-Host "  WARNING: Port 8000 is already in use!" -ForegroundColor Red
    Write-Host "  Stopping existing process..." -ForegroundColor Yellow
    $process = Get-Process -Id $port8000.OwningProcess -ErrorAction SilentlyContinue
    if ($process) {
        Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2
    }
}

if ($port5173) {
    Write-Host "  WARNING: Port 5173 is already in use!" -ForegroundColor Red
    Write-Host "  Stopping existing process..." -ForegroundColor Yellow
    $process = Get-Process -Id $port5173.OwningProcess -ErrorAction SilentlyContinue
    if ($process) {
        Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2
    }
}

Write-Host "  Ports available" -ForegroundColor Green
Write-Host ""

# Check Python
Write-Host "[2/5] Checking Python..." -ForegroundColor Yellow
try {
    $pythonVersion = python --version 2>&1
    Write-Host "  $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "  ERROR: Python not found! Please install Python." -ForegroundColor Red
    exit 1
}

# Check Node.js
Write-Host "[3/5] Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>&1
    Write-Host "  Node.js $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "  ERROR: Node.js not found! Please install Node.js." -ForegroundColor Red
    exit 1
}

# Start Backend
Write-Host "[4/5] Starting Backend Server..." -ForegroundColor Yellow
Write-Host "  Backend will run on: http://localhost:8000" -ForegroundColor Cyan
Write-Host "  Health Check: http://localhost:8000/health/" -ForegroundColor Cyan
Write-Host "  API Docs: http://localhost:8000/api/docs/" -ForegroundColor Cyan
Write-Host ""

$backendPath = Join-Path $PWD "optimum-backend"
$backendCommand = "cd '$backendPath'; python manage.py runserver 8000"

$backendJob = Start-Process powershell -ArgumentList @("-NoExit", "-Command", $backendCommand) -PassThru -WindowStyle Minimized

# Wait for backend to start
Write-Host "  Waiting for backend to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Test backend
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8000/health/" -TimeoutSec 5 -ErrorAction Stop
    if ($response.StatusCode -eq 200) {
        Write-Host "  Backend is running! ✓" -ForegroundColor Green
    }
} catch {
    Write-Host "  WARNING: Backend may not be ready yet. Check the backend window." -ForegroundColor Yellow
}

Write-Host ""

# Start Frontend
Write-Host "[5/5] Starting Frontend Server..." -ForegroundColor Yellow
Write-Host "  Frontend will run on: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""

$frontendPath = Join-Path $PWD "optimum-frontend\frontend"
$frontendCommand = "cd '$frontendPath'; npm run dev"

$frontendJob = Start-Process powershell -ArgumentList @("-NoExit", "-Command", $frontendCommand) -PassThru -WindowStyle Minimized

# Wait for frontend to start
Write-Host "  Waiting for frontend to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 8

# Test frontend
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5173" -TimeoutSec 5 -ErrorAction Stop
    if ($response.StatusCode -eq 200) {
        Write-Host "  Frontend is running! ✓" -ForegroundColor Green
    }
} catch {
    Write-Host "  WARNING: Frontend may not be ready yet. Check the frontend window." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Servers Started!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Backend:  http://localhost:8000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "Two PowerShell windows have been opened:" -ForegroundColor Yellow
Write-Host "  - Backend server window" -ForegroundColor White
Write-Host "  - Frontend server window" -ForegroundColor White
Write-Host ""
Write-Host "To stop servers, close the PowerShell windows or press Ctrl+C" -ForegroundColor Yellow
Write-Host ""
Write-Host "Opening browser..." -ForegroundColor Yellow
Start-Sleep -Seconds 2
Start-Process "http://localhost:5173"

