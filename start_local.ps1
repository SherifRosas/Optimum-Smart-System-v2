# Optimum Smart System - Local Development Startup Script
# This script starts both backend and frontend servers in separate windows

Write-Host "Starting Optimum Smart System..." -ForegroundColor Green
Write-Host ""

# Check if Python is available
$pythonCmd = Get-Command python -ErrorAction SilentlyContinue
if (-not $pythonCmd) {
    Write-Host "ERROR: Python not found. Please install Python 3.9+" -ForegroundColor Red
    exit 1
}

# Check if Node.js is available
$nodeCmd = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCmd) {
    Write-Host "ERROR: Node.js not found. Please install Node.js 18+" -ForegroundColor Red
    exit 1
}

# Get current directory
$projectRoot = $PWD.Path

# Create temporary script files
$tempDir = [System.IO.Path]::GetTempPath()
$backendScriptPath = Join-Path $tempDir "optimum_backend.ps1"
$frontendScriptPath = Join-Path $tempDir "optimum_frontend.ps1"

# Create backend script content
$backendScript = @"
Set-Location '$projectRoot\optimum-backend'
if (Test-Path 'venv\Scripts\Activate.ps1') {
    & .\venv\Scripts\Activate.ps1
}
`$env:DJANGO_ENV = 'development'
`$env:DEBUG = 'True'
Write-Host 'Starting Django server on http://localhost:8000' -ForegroundColor Green
python manage.py runserver
"@

# Create frontend script content
$frontendScript = @"
Set-Location '$projectRoot\optimum-frontend'
Write-Host 'Starting Vite dev server on http://localhost:3000' -ForegroundColor Green
npm run dev
"@

# Write scripts to temp files
$backendScript | Out-File -FilePath $backendScriptPath -Encoding UTF8 -Force
$frontendScript | Out-File -FilePath $frontendScriptPath -Encoding UTF8 -Force

# Start Backend in new window
Write-Host "Starting Backend Server..." -ForegroundColor Cyan
$backendProcess = Start-Process powershell -ArgumentList "-NoExit", "-File", $backendScriptPath -PassThru

# Wait a bit for backend to start
Start-Sleep -Seconds 3

# Start Frontend in new window
Write-Host "Starting Frontend Server..." -ForegroundColor Cyan
$frontendProcess = Start-Process powershell -ArgumentList "-NoExit", "-File", $frontendScriptPath -PassThru

Write-Host ""
Write-Host "SUCCESS: Servers started in separate windows!" -ForegroundColor Green
Write-Host ""
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Yellow
Write-Host "Backend:  http://localhost:8000" -ForegroundColor Yellow
Write-Host "Admin:    http://localhost:8000/admin/" -ForegroundColor Yellow
Write-Host ""
Write-Host "NOTE: Two PowerShell windows have opened - one for each server" -ForegroundColor Cyan
Write-Host "      Close those windows or press Ctrl+C here to stop all servers" -ForegroundColor Gray
Write-Host ""

# Function to cleanup
function Stop-Servers {
    Write-Host "`nStopping servers..." -ForegroundColor Yellow
    
    # Kill backend process
    if ($backendProcess -and (Get-Process -Id $backendProcess.Id -ErrorAction SilentlyContinue)) {
        Stop-Process -Id $backendProcess.Id -Force -ErrorAction SilentlyContinue
    }
    
    # Kill frontend process
    if ($frontendProcess -and (Get-Process -Id $frontendProcess.Id -ErrorAction SilentlyContinue)) {
        Stop-Process -Id $frontendProcess.Id -Force -ErrorAction SilentlyContinue
    }
    
    # Cleanup temp files
    Remove-Item $backendScriptPath -ErrorAction SilentlyContinue
    Remove-Item $frontendScriptPath -ErrorAction SilentlyContinue
    
    Write-Host "Servers stopped" -ForegroundColor Green
}

# Wait for user to press Ctrl+C
try {
    while ($true) {
        # Check if processes are still running
        $backendRunning = $false
        $frontendRunning = $false
        
        if ($backendProcess) {
            $backendRunning = Get-Process -Id $backendProcess.Id -ErrorAction SilentlyContinue
        }
        
        if ($frontendProcess) {
            $frontendRunning = Get-Process -Id $frontendProcess.Id -ErrorAction SilentlyContinue
        }
        
        if (-not $backendRunning -and -not $frontendRunning) {
            Write-Host "`nBoth server windows have been closed" -ForegroundColor Yellow
            break
        }
        
        Start-Sleep -Seconds 2
    }
} catch {
    # User pressed Ctrl+C
} finally {
    Stop-Servers
}
