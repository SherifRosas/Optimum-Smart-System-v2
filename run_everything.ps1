# Get the script directory
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$BackendPath = Join-Path $ScriptDir "optimum-backend"
$FrontendPath = Join-Path $ScriptDir "optimum-frontend\frontend"

Write-Host "Setting up Optimum Smart System v2.3.0..." -ForegroundColor Cyan
Write-Host "Backend: $BackendPath" -ForegroundColor Gray
Write-Host "Frontend: $FrontendPath" -ForegroundColor Gray
Write-Host ""

# 1. Setup Backend
Set-Location $BackendPath
if (-not (Test-Path "venv")) {
    Write-Host "Creating Python Virtual Environment..." -ForegroundColor Yellow
    python -m venv venv
}

Write-Host "Installing Backend Dependencies..." -ForegroundColor Yellow
.\venv\Scripts\python.exe -m pip install -r requirements.txt

# 2. Start Backend in new window
Write-Host "Starting Backend Server..." -ForegroundColor Green
$BackendCommand = "cd '$BackendPath'; .\venv\Scripts\Activate.ps1; python manage.py runserver"
Start-Process powershell -ArgumentList "-NoExit", "-Command", $BackendCommand

# 3. Start Frontend in new window
Write-Host "Starting Frontend Server..." -ForegroundColor Green
$FrontendCommand = "cd '$FrontendPath'; npm run dev"
Start-Process powershell -ArgumentList "-NoExit", "-Command", $FrontendCommand

Write-Host ""
Write-Host "Done! Check the new windows." -ForegroundColor Cyan
Write-Host "Frontend will be available at: http://localhost:5173" -ForegroundColor Yellow
Write-Host "Backend will be available at: http://localhost:8000" -ForegroundColor Yellow
