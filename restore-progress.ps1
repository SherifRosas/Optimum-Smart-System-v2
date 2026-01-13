# Interactive Script to Restore Progress
# Run this to go back to any previous commit

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Restore Progress - v2.4.0" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

# Check if Git is initialized
if (-not (Test-Path .git)) {
    Write-Host "❌ Git repository not found!" -ForegroundColor Red
    Write-Host "Please run 'git init' first or use the save-work-now.ps1 script" -ForegroundColor Yellow
    exit 1
}

# Show recent commits
Write-Host "Recent commits:" -ForegroundColor Cyan
Write-Host ""
$commits = git log --oneline -10
$commitList = @()
$commits | ForEach-Object {
    $commitList += $_
    Write-Host "  $_" -ForegroundColor White
}

Write-Host ""
Write-Host "Options:" -ForegroundColor Cyan
Write-Host "  1. Enter commit hash to restore" -ForegroundColor White
Write-Host "  2. Enter 'list' to see more commits" -ForegroundColor White
Write-Host "  3. Enter 'cancel' to exit" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice"

if ($choice -eq "cancel" -or $choice -eq "q" -or $choice -eq "") {
    Write-Host "Cancelled." -ForegroundColor Yellow
    exit 0
}

if ($choice -eq "list") {
    Write-Host ""
    Write-Host "All commits:" -ForegroundColor Cyan
    git log --oneline -30
    Write-Host ""
    $choice = Read-Host "Enter commit hash to restore (or 'cancel' to exit)"
}

if ($choice -eq "cancel" -or $choice -eq "q" -or $choice -eq "") {
    Write-Host "Cancelled." -ForegroundColor Yellow
    exit 0
}

# Validate commit hash
$commitHash = $choice.Substring(0, [Math]::Min(7, $choice.Length))
$fullHash = git rev-parse --verify $commitHash 2>$null

if (-not $fullHash) {
    Write-Host "❌ Invalid commit hash: $choice" -ForegroundColor Red
    Write-Host "Please enter a valid commit hash from the list above" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "Commit details:" -ForegroundColor Cyan
git show --stat $fullHash | Select-Object -First 15

Write-Host ""
Write-Host "⚠️  WARNING: This will restore your working directory to this commit." -ForegroundColor Yellow
Write-Host "Any uncommitted changes will be lost!" -ForegroundColor Yellow
Write-Host ""
$confirm = Read-Host "Are you sure? (yes/no)"

if ($confirm -ne "yes" -and $confirm -ne "y") {
    Write-Host "Cancelled." -ForegroundColor Yellow
    exit 0
}

# Check for uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host ""
    Write-Host "⚠️  You have uncommitted changes:" -ForegroundColor Yellow
    git status --short
    Write-Host ""
    $saveFirst = Read-Host "Save current changes first? (yes/no)"
    
    if ($saveFirst -eq "yes" -or $saveFirst -eq "y") {
        Write-Host "Saving current changes..." -ForegroundColor Yellow
        git add .
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
        git commit -m "Auto-save before restore - $timestamp"
        Write-Host "✅ Changes saved" -ForegroundColor Green
    }
}

# Restore to commit
Write-Host ""
Write-Host "Restoring to commit $fullHash..." -ForegroundColor Yellow
git checkout $fullHash

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully restored to commit $fullHash" -ForegroundColor Green
    Write-Host ""
    Write-Host "Current state:" -ForegroundColor Cyan
    git log --oneline -1
    Write-Host ""
    Write-Host "Note: You are in 'detached HEAD' state." -ForegroundColor Yellow
    Write-Host "To continue working, create a new branch:" -ForegroundColor Yellow
    Write-Host "  git checkout -b restore-from-$commitHash" -ForegroundColor White
    Write-Host ""
    Write-Host "Or go back to main branch:" -ForegroundColor Yellow
    Write-Host "  git checkout main" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "❌ Failed to restore. Please check the commit hash." -ForegroundColor Red
    exit 1
}
