# Backup Script for Optimum Smart System v2.4.0
# This script creates a timestamped backup of all changes

$ErrorActionPreference = "Stop"

# Get script directory
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$BackupDir = Join-Path (Split-Path -Parent $ScriptDir) "Backups"
$Timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$BackupName = "Optimum-Smart-System-v2.4.0-BACKUP-$Timestamp"
$BackupPath = Join-Path $BackupDir $BackupName

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Optimum Smart System v2.4.0 - Backup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Create backup directory if it doesn't exist
if (-not (Test-Path $BackupDir)) {
    Write-Host "Creating backup directory: $BackupDir" -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $BackupDir -Force | Out-Null
}

# Create backup
Write-Host "Creating backup: $BackupName" -ForegroundColor Green
Write-Host "Source: $ScriptDir" -ForegroundColor White
Write-Host "Destination: $BackupPath" -ForegroundColor White
Write-Host ""

# Copy files (excluding node_modules, venv, .git, etc.)
$ExcludeDirs = @('node_modules', 'venv', '.git', '__pycache__', '.next', 'dist', 'build', '*.log')
$ExcludeFiles = @('*.log', '.DS_Store', 'Thumbs.db')

try {
    # Use robocopy for better control
    $RobocopyArgs = @(
        $ScriptDir,
        $BackupPath,
        "/E",           # Copy subdirectories including empty ones
        "/XD",          # Exclude directories
        "node_modules",
        "venv",
        ".git",
        "__pycache__",
        ".next",
        "dist",
        "build",
        "/XF",          # Exclude files
        "*.log",
        ".DS_Store",
        "Thumbs.db",
        "/NFL",         # No file list
        "/NDL",         # No directory list
        "/NJH",         # No job header
        "/NJS"          # No job summary
    )
    
    $Result = & robocopy @RobocopyArgs
    
    if ($LASTEXITCODE -le 1) {
        Write-Host "✅ Backup created successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Backup Location: $BackupPath" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "To restore:" -ForegroundColor Yellow
        Write-Host "  Copy contents from: $BackupPath" -ForegroundColor White
        Write-Host "  To: $ScriptDir" -ForegroundColor White
    } else {
        Write-Host "⚠️ Backup completed with warnings (Exit code: $LASTEXITCODE)" -ForegroundColor Yellow
        Write-Host "Backup Location: $BackupPath" -ForegroundColor Cyan
    }
} catch {
    Write-Host "❌ Error creating backup: $_" -ForegroundColor Red
    exit 1
}

# Create backup info file
$BackupInfo = @"
# Backup Information

**Date:** $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
**Source:** $ScriptDir
**Backup Location:** $BackupPath

## Changes Included

1. Navigation Fix (App.tsx)
2. Arabic Translation Support (CommandCenter.tsx, translations.js)
3. Language Switching Improvements (LanguageSwitcher.tsx, LanguageContext.tsx)

## Files Modified

- optimum-frontend/frontend/src/App.tsx
- optimum-frontend/frontend/src/components/CommandCenter.tsx
- optimum-frontend/frontend/src/utils/translations.js
- optimum-frontend/frontend/src/components/LanguageSwitcher.tsx
- optimum-frontend/frontend/src/contexts/LanguageContext.tsx

## To Restore

1. Copy all files from: $BackupPath
2. Paste to: $ScriptDir
3. Run: npm install (in frontend directory)
4. Test the application

"@

$BackupInfoPath = Join-Path $BackupPath "BACKUP_INFO.md"
$BackupInfo | Out-File -FilePath $BackupInfoPath -Encoding UTF8

Write-Host ""
Write-Host "Backup info saved to: $BackupInfoPath" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Backup complete!" -ForegroundColor Green
