# Start Servers Script for Version 2.4.0
# This script starts both backend and frontend servers

$ErrorActionPreference = "Stop"

# Get the script directory
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$BackendPath = Join-Path $ScriptDir "optimum-backend"
$FrontendPath = Join-Path $ScriptDir "optimum-frontend\frontend"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Optimum Smart System v2.4.0 - Start Servers" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verify paths exist
if (-not (Test-Path $BackendPath)) {
    Write-Host "Error: Backend path not found: $BackendPath" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $FrontendPath)) {
    Write-Host "Error: Frontend path not found: $FrontendPath" -ForegroundColor Red
    exit 1
}

# Start Backend
Write-Host "Starting Backend Server..." -ForegroundColor Green
$BackendCommand = "cd '$BackendPath'; if (Test-Path 'venv\Scripts\Activate.ps1') { .\venv\Scripts\Activate.ps1 }; python manage.py runserver"
Start-Process powershell -ArgumentList "-NoExit", "-Command", $BackendCommand

# Wait a moment
Start-Sleep -Seconds 2

# Start Frontend
Write-Host "Starting Frontend Server..." -ForegroundColor Green
$FrontendCommand = "cd '$FrontendPath'; npm run dev"
Start-Process powershell -ArgumentList "-NoExit", "-Command", $FrontendCommand

Write-Host ""
Write-Host "Servers starting in separate windows!" -ForegroundColor Green
Write-Host ""
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Yellow
Write-Host "Backend:  http://localhost:8000" -ForegroundColor Yellow
Write-Host "API:      http://localhost:8000/api" -ForegroundColor Yellow
Write-Host ""
Write-Host "Check the PowerShell windows that opened." -ForegroundColor Cyan
