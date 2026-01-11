# Quick Script to Save All Current Work
# Run this after making any changes to preserve them

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Save Your Work - v2.4.0" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

# Check if Git is initialized
if (Test-Path .git) {
    Write-Host "Git repository found" -ForegroundColor Green
} else {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "Git initialized" -ForegroundColor Green
}

# Add all files
Write-Host ""
Write-Host "Adding all files to Git..." -ForegroundColor Yellow
git add .

# Check what will be committed
$Status = git status --short
if ($Status) {
    Write-Host ""
    Write-Host "Files to be committed:" -ForegroundColor Cyan
    git status --short | ForEach-Object { Write-Host "  $_" -ForegroundColor White }
    
    Write-Host ""
    $CommitMessage = "v2.4.0: Changes - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    Write-Host "Committing changes..." -ForegroundColor Yellow
    Write-Host "Message: $CommitMessage" -ForegroundColor Gray
    git commit -m $CommitMessage
    
    Write-Host ""
    Write-Host "Changes committed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Recent commits:" -ForegroundColor Cyan
    git log --oneline -5
} else {
    Write-Host ""
    Write-Host "No changes to commit - everything is already saved!" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Your work is now saved!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "To view history: git log --oneline" -ForegroundColor Yellow
Write-Host "To see changes: git status" -ForegroundColor Yellow
Write-Host ""
