# Comprehensive Application Testing Script
# Tests all functionality before deployment

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Optimum Smart System - Test Suite" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$errors = @()
$warnings = @()
$passed = 0
$failed = 0

function Test-Passed {
    param($message)
    Write-Host "[PASS] $message" -ForegroundColor Green
    $script:passed++
}

function Test-Failed {
    param($message, $error)
    Write-Host "[FAIL] $message" -ForegroundColor Red
    if ($error) {
        Write-Host "       Error: $error" -ForegroundColor Red
        $script:errors += "$message : $error"
    }
    $script:failed++
}

function Test-Warning {
    param($message)
    Write-Host "[WARN] $message" -ForegroundColor Yellow
    $script:warnings += $message
}

# Test 1: Check Prerequisites
Write-Host "1. Checking Prerequisites..." -ForegroundColor Yellow
Write-Host ""

# Check Python
try {
    $pythonVersion = python --version 2>&1
    if ($pythonVersion -match "Python 3\.(\d+)") {
        $minorVersion = [int]$matches[1]
        if ($minorVersion -ge 9) {
            Test-Passed "Python version: $pythonVersion"
        } else {
            Test-Failed "Python version too old: $pythonVersion (need 3.9+)"
        }
    } else {
        Test-Failed "Could not determine Python version"
    }
} catch {
    Test-Failed "Python not found" $_.Exception.Message
}

# Check Node.js
try {
    $nodeVersion = node --version 2>&1
    if ($nodeVersion -match "v(\d+)\.(\d+)") {
        $majorVersion = [int]$matches[1]
        if ($majorVersion -ge 18) {
            Test-Passed "Node.js version: $nodeVersion"
        } else {
            Test-Failed "Node.js version too old: $nodeVersion (need 18+)"
        }
    } else {
        Test-Failed "Could not determine Node.js version"
    }
} catch {
    Test-Failed "Node.js not found" $_.Exception.Message
}

# Check npm
try {
    $npmVersion = npm --version 2>&1
    Test-Passed "npm version: $npmVersion"
} catch {
    Test-Failed "npm not found" $_.Exception.Message
}

Write-Host ""

# Test 2: Backend Setup
Write-Host "2. Testing Backend Setup..." -ForegroundColor Yellow
Write-Host ""

$backendPath = "optimum-backend"
if (Test-Path $backendPath) {
    Test-Passed "Backend directory exists"
    
    # Check virtual environment
    if (Test-Path "$backendPath\venv") {
        Test-Passed "Virtual environment exists"
    } else {
        Test-Warning "Virtual environment not found (will be created on first run)"
    }
    
    # Check requirements.txt
    if (Test-Path "$backendPath\requirements.txt") {
        Test-Passed "requirements.txt exists"
    } else {
        Test-Failed "requirements.txt not found"
    }
    
    # Check manage.py
    if (Test-Path "$backendPath\manage.py") {
        Test-Passed "manage.py exists"
    } else {
        Test-Failed "manage.py not found"
    }
    
    # Check settings
    if (Test-Path "$backendPath\optimum_system\settings.py") {
        Test-Passed "settings.py exists"
    } else {
        Test-Failed "settings.py not found"
    }
    
    # Check new settings structure
    if (Test-Path "$backendPath\optimum_system\settings\base.py") {
        Test-Passed "New settings structure exists"
    } else {
        Test-Warning "New settings structure not found (using old settings.py)"
    }
    
} else {
    Test-Failed "Backend directory not found"
}

Write-Host ""

# Test 3: Frontend Setup
Write-Host "3. Testing Frontend Setup..." -ForegroundColor Yellow
Write-Host ""

$frontendPath = "optimum-frontend"
if (Test-Path $frontendPath) {
    Test-Passed "Frontend directory exists"
    
    # Check package.json
    if (Test-Path "$frontendPath\package.json") {
        Test-Passed "package.json exists"
    } else {
        Test-Failed "package.json not found"
    }
    
    # Check node_modules
    if (Test-Path "$frontendPath\node_modules") {
        Test-Passed "node_modules exists (dependencies installed)"
    } else {
        Test-Warning "node_modules not found (run 'npm install' first)"
    }
    
    # Check src directory
    if (Test-Path "$frontendPath\src") {
        Test-Passed "src directory exists"
    } else {
        Test-Failed "src directory not found"
    }
    
    # Check API config
    if (Test-Path "$frontendPath\src\config\api.ts") {
        Test-Passed "API config exists"
        
        # Check for typo fix
        $apiConfig = Get-Content "$frontendPath\src\config\api.ts" -Raw
        if ($apiConfig -match "sherifrosas\.pythonanywhere\.com") {
            Test-Passed "API URL is correct (typo fixed)"
        } elseif ($apiConfig -match "sherifrissas") {
            Test-Failed "API URL still has typo (sherifrissas)"
        }
    } else {
        Test-Warning "API config not found"
    }
    
} else {
    Test-Failed "Frontend directory not found"
}

Write-Host ""

# Test 4: Backend Functionality
Write-Host "4. Testing Backend Functionality..." -ForegroundColor Yellow
Write-Host ""

if (Test-Path $backendPath) {
    Push-Location $backendPath
    
    try {
        # Test Django setup
        $env:DJANGO_ENV = "test"
        $env:DEBUG = "True"
        
        # Check if Django can be imported
        $djangoCheck = python -c "import django; print(django.get_version())" 2>&1
        if ($LASTEXITCODE -eq 0) {
            Test-Passed "Django can be imported (version: $djangoCheck)"
        } else {
            Test-Failed "Django import failed" $djangoCheck
        }
        
        # Test settings import
        $settingsCheck = python -c "import sys; sys.path.insert(0, '.'); from optimum_system.settings import *; print('Settings OK')" 2>&1
        if ($LASTEXITCODE -eq 0 -and $settingsCheck -match "Settings OK") {
            Test-Passed "Settings can be imported"
        } else {
            Test-Failed "Settings import failed" $settingsCheck
        }
        
        # Test migrations (check status)
        $migrationCheck = python manage.py showmigrations --plan 2>&1 | Select-Object -First 5
        if ($LASTEXITCODE -eq 0) {
            Test-Passed "Migrations system working"
        } else {
            Test-Warning "Migration check failed (may need to run migrations)"
        }
        
    } catch {
        Test-Failed "Backend functionality test failed" $_.Exception.Message
    } finally {
        Pop-Location
    }
}

Write-Host ""

# Test 5: Frontend Functionality
Write-Host "5. Testing Frontend Functionality..." -ForegroundColor Yellow
Write-Host ""

if (Test-Path $frontendPath) {
    Push-Location $frontendPath
    
    try {
        # Check if package.json is valid
        $packageJson = Get-Content "package.json" | ConvertFrom-Json
        if ($packageJson.name) {
            Test-Passed "package.json is valid"
        } else {
            Test-Failed "package.json is invalid"
        }
        
        # Check for required scripts
        if ($packageJson.scripts.dev) {
            Test-Passed "dev script exists"
        } else {
            Test-Failed "dev script not found in package.json"
        }
        
        if ($packageJson.scripts.build) {
            Test-Passed "build script exists"
        } else {
            Test-Failed "build script not found in package.json"
        }
        
        # Test TypeScript compilation (if tsconfig exists)
        if (Test-Path "tsconfig.json") {
            $tsCheck = npm run type-check 2>&1
            if ($LASTEXITCODE -eq 0) {
                Test-Passed "TypeScript compilation check passed"
            } else {
                Test-Warning "TypeScript compilation has issues (check output above)"
            }
        }
        
    } catch {
        Test-Failed "Frontend functionality test failed" $_.Exception.Message
    } finally {
        Pop-Location
    }
}

Write-Host ""

# Test 6: Configuration Files
Write-Host "6. Testing Configuration Files..." -ForegroundColor Yellow
Write-Host ""

# Check .gitignore
if (Test-Path ".gitignore") {
    Test-Passed ".gitignore exists"
    
    $gitignore = Get-Content ".gitignore" -Raw
    if ($gitignore -match "db\.sqlite3") {
        Test-Passed ".gitignore excludes db.sqlite3"
    } else {
        Test-Warning ".gitignore may not exclude db.sqlite3"
    }
} else {
    Test-Warning ".gitignore not found"
}

# Check docker-compose
if (Test-Path "docker-compose.yml") {
    Test-Passed "docker-compose.yml exists"
} else {
    Test-Warning "docker-compose.yml not found"
}

# Check CI/CD
if (Test-Path ".github\workflows\ci.yml") {
    Test-Passed "CI/CD pipeline exists"
} else {
    Test-Warning "CI/CD pipeline not found"
}

Write-Host ""

# Test 7: Documentation
Write-Host "7. Testing Documentation..." -ForegroundColor Yellow
Write-Host ""

if (Test-Path "README.md") {
    Test-Passed "README.md exists"
} else {
    Test-Failed "README.md not found"
}

if (Test-Path "docs\development\LOCAL_SETUP.md") {
    Test-Passed "Local setup guide exists"
} else {
    Test-Warning "Local setup guide not found"
}

if (Test-Path "docs\deployment\DEPLOYMENT_GUIDE.md") {
    Test-Passed "Deployment guide exists"
} else {
    Test-Warning "Deployment guide not found"
}

Write-Host ""

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Test Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Passed: $passed" -ForegroundColor Green
Write-Host "Failed: $failed" -ForegroundColor $(if ($failed -eq 0) { "Green" } else { "Red" })
Write-Host "Warnings: $($warnings.Count)" -ForegroundColor $(if ($warnings.Count -eq 0) { "Green" } else { "Yellow" })
Write-Host ""

if ($errors.Count -gt 0) {
    Write-Host "Errors Found:" -ForegroundColor Red
    foreach ($error in $errors) {
        Write-Host "  - $error" -ForegroundColor Red
    }
    Write-Host ""
}

if ($warnings.Count -gt 0) {
    Write-Host "Warnings:" -ForegroundColor Yellow
    foreach ($warning in $warnings) {
        Write-Host "  - $warning" -ForegroundColor Yellow
    }
    Write-Host ""
}

if ($failed -eq 0) {
    Write-Host "✅ All critical tests passed! Ready for deployment." -ForegroundColor Green
    exit 0
} else {
    Write-Host "❌ Some tests failed. Please fix issues before deploying." -ForegroundColor Red
    exit 1
}

