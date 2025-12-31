# Optimum Smart System - Simple Local Development Startup Script
# This version runs servers in the same window (simpler but less clean output)

Write-Host "🚀 Starting Optimum Smart System..." -ForegroundColor Green
Write-Host ""

# Check if Python is available
$pythonCmd = Get-Command python -ErrorAction SilentlyContinue
if (-not $pythonCmd) {
    Write-Host "❌ Python not found. Please install Python 3.9+" -ForegroundColor Red
    exit 1
}

# Check if Node.js is available
$nodeCmd = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCmd) {
    Write-Host "❌ Node.js not found. Please install Node.js 18+" -ForegroundColor Red
    exit 1
}

# Get current directory
$projectRoot = $PWD.Path

Write-Host "📦 Starting Backend Server in background..." -ForegroundColor Cyan
Write-Host "🎨 Starting Frontend Server in background..." -ForegroundColor Cyan
Write-Host ""

# Start Backend as background job
$backendJob = Start-Job -Name "BackendServer" -ScriptBlock {
    param($root)
    Set-Location "$root\optimum-backend"
    
    # Activate virtual environment if it exists
    if (Test-Path "venv\Scripts\Activate.ps1") {
        & .\venv\Scripts\Activate.ps1
    }
    
    # Set environment variables
    $env:DJANGO_ENV = "development"
    $env:DEBUG = "True"
    
    # Start server and capture output
    python manage.py runserver *>&1
} -ArgumentList $projectRoot

# Wait a bit
Start-Sleep -Seconds 2

# Start Frontend as background job
$frontendJob = Start-Job -Name "FrontendServer" -ScriptBlock {
    param($root)
    Set-Location "$root\optimum-frontend"
    npm run dev *>&1
} -ArgumentList $projectRoot

Write-Host "✅ Servers starting..." -ForegroundColor Green
Write-Host ""
Write-Host "📱 Frontend: http://localhost:3000" -ForegroundColor Yellow
Write-Host "🔧 Backend:  http://localhost:8000" -ForegroundColor Yellow
Write-Host "📚 Admin:    http://localhost:8000/admin/" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop all servers" -ForegroundColor Gray
Write-Host ""

# Function to cleanup
function Stop-Servers {
    Write-Host "`n🛑 Stopping servers..." -ForegroundColor Yellow
    Stop-Job -Name "BackendServer", "FrontendServer" -ErrorAction SilentlyContinue
    Remove-Job -Name "BackendServer", "FrontendServer" -ErrorAction SilentlyContinue
    Write-Host "✅ Servers stopped" -ForegroundColor Green
}

# Handle Ctrl+C
[Console]::TreatControlCAsInput = $false
try {
    while ($true) {
        # Get job states
        $backendState = (Get-Job -Name "BackendServer" -ErrorAction SilentlyContinue).State
        $frontendState = (Get-Job -Name "FrontendServer" -ErrorAction SilentlyContinue).State
        
        # Show output if available
        $backendOutput = Receive-Job -Name "BackendServer" -ErrorAction SilentlyContinue
        if ($backendOutput) {
            Write-Host "[Backend] $backendOutput" -ForegroundColor Cyan
        }
        
        $frontendOutput = Receive-Job -Name "FrontendServer" -ErrorAction SilentlyContinue
        if ($frontendOutput) {
            Write-Host "[Frontend] $frontendOutput" -ForegroundColor Magenta
        }
        
        # Check if jobs stopped
        if ($backendState -eq "Failed" -or $backendState -eq "Completed") {
            Write-Host "`n⚠️  Backend server stopped (State: $backendState)" -ForegroundColor Yellow
            break
        }
        if ($frontendState -eq "Failed" -or $frontendState -eq "Completed") {
            Write-Host "`n⚠️  Frontend server stopped (State: $frontendState)" -ForegroundColor Yellow
            break
        }
        
        Start-Sleep -Milliseconds 500
    }
} catch {
    # Ctrl+C pressed
} finally {
    Stop-Servers
}





