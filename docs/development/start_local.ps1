# Start Optimum Smart System Locally
# This script starts both backend and frontend servers

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting Optimum Smart System Locally" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Python is available
Write-Host "[1/4] Checking Python..." -ForegroundColor Yellow
try {
    $pythonVersion = python --version 2>&1
    Write-Host "  $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "  ERROR: Python not found!" -ForegroundColor Red
    exit 1
}

# Check if Node.js is available
Write-Host "[2/4] Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>&1
    Write-Host "  Node.js $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "  ERROR: Node.js not found!" -ForegroundColor Red
    exit 1
}

# Start Backend Server
Write-Host "[3/4] Starting Backend Server (Django)..." -ForegroundColor Yellow
Write-Host "  Backend will run on: http://localhost:8000" -ForegroundColor Cyan
Write-Host "  API Docs: http://localhost:8000/api/docs/" -ForegroundColor Cyan
Write-Host "  Health Check: http://localhost:8000/health/" -ForegroundColor Cyan
Write-Host ""

$backendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    Set-Location "optimum-backend"
    python manage.py runserver 8000
}

# Wait a moment for backend to start
Start-Sleep -Seconds 3

# Start Frontend Server
Write-Host "[4/4] Starting Frontend Server (Vite)..." -ForegroundColor Yellow
Write-Host "  Frontend will run on: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""

$frontendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    Set-Location "optimum-frontend\frontend"
    npm run dev
}

# Wait for frontend to start
Start-Sleep -Seconds 5

Write-Host "========================================" -ForegroundColor Green
Write-Host "System Started Successfully!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Backend:  http://localhost:8000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop all servers" -ForegroundColor Yellow
Write-Host ""

# Keep script running and show logs
try {
    while ($true) {
        # Show backend logs
        $backendOutput = Receive-Job $backendJob -ErrorAction SilentlyContinue
        if ($backendOutput) {
            Write-Host "[BACKEND] $backendOutput" -ForegroundColor Magenta
        }
        
        # Show frontend logs
        $frontendOutput = Receive-Job $frontendJob -ErrorAction SilentlyContinue
        if ($frontendOutput) {
            Write-Host "[FRONTEND] $frontendOutput" -ForegroundColor Blue
        }
        
        Start-Sleep -Seconds 1
    }
} finally {
    Write-Host ""
    Write-Host "Stopping servers..." -ForegroundColor Yellow
    Stop-Job $backendJob, $frontendJob
    Remove-Job $backendJob, $frontendJob
    Write-Host "Servers stopped." -ForegroundColor Green
}




