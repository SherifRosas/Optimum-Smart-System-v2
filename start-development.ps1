# Start Development Environment
# Starts both backend and frontend servers

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting Development Environment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

# Check if servers are already running
$backendRunning = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
$frontendRunning = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue

if ($backendRunning) {
    Write-Host "⚠️  Backend already running on port 8000" -ForegroundColor Yellow
} else {
    Write-Host "🚀 Starting Backend Server..." -ForegroundColor Yellow
    Set-Location "optimum-backend"
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; Write-Host 'Backend Server - Port 8000' -ForegroundColor Cyan; python manage.py runserver"
    Set-Location ".."
    Start-Sleep -Seconds 2
}

if ($frontendRunning) {
    Write-Host "⚠️  Frontend already running on port 3000" -ForegroundColor Yellow
} else {
    Write-Host "🚀 Starting Frontend Server..." -ForegroundColor Yellow
    Set-Location "optimum-frontend"
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; Write-Host 'Frontend Server - Port 3000' -ForegroundColor Cyan; npm run dev"
    Set-Location ".."
    Start-Sleep -Seconds 2
}

Write-Host ""
Write-Host "✅ Development Environment Started!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Server URLs:" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:3000" -ForegroundColor Yellow
Write-Host "   Backend:  http://localhost:8000/api/" -ForegroundColor Yellow
Write-Host ""
Write-Host "Two PowerShell windows opened:" -ForegroundColor Cyan
Write-Host "   1. Backend server (Django)" -ForegroundColor White
Write-Host "   2. Frontend server (Vite)" -ForegroundColor White
Write-Host ""
Write-Host "⏳ Wait 10-15 seconds for servers to fully start" -ForegroundColor Yellow
Write-Host ""
