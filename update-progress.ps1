# Script to Update Progress Document
# Creates or updates PROGRESS_YYYY_MM_DD.md with current changes

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Update Progress Document" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

# Get today's date
$today = Get-Date -Format "yyyy_MM_dd"
$progressFile = "PROGRESS_$today.md"

# Check if file exists
$isNew = -not (Test-Path $progressFile)

if ($isNew) {
    Write-Host "Creating new progress document: $progressFile" -ForegroundColor Yellow
} else {
    Write-Host "Updating existing progress document: $progressFile" -ForegroundColor Yellow
}

# Get recent commits (last 5)
$recentCommits = git log --oneline -5
$commitsList = ""
$recentCommits | ForEach-Object {
    $commitsList += "- `$_`" + "`n"
}

# Get changed files
$changedFiles = git diff --name-only HEAD
$filesList = ""
if ($changedFiles) {
    $changedFiles | ForEach-Object {
        $filesList += "- `$_`" + "`n"
    }
} else {
    $filesList = "- No uncommitted changes`n"
}

# Get last commit info
$lastCommit = git log -1 --pretty=format:"%h - %s (%ar)"
$lastCommitHash = git log -1 --pretty=format:"%h"

# Create/update progress document
$content = @"
# Progress Update - $(Get-Date -Format "MMMM dd, yyyy")

**Date:** $(Get-Date -Format "yyyy-MM-dd HH:mm")  
**Status:** 🚧 In Progress

---

## ✅ Completed Today

- [Add what you completed today]

## 📝 Files Changed

$filesList

## 🔗 Recent Commits

$commitsList

## 🎯 Next Steps

- [Add your next steps here]

## 📊 Current Status

- **Last Commit:** $lastCommit
- **Commit Hash:** `$lastCommitHash`
- **Branch:** $(git branch --show-current)

---

## 💡 Notes

[Add any notes or observations here]

---

**To restore this progress:**
\`\`\`powershell
git checkout $lastCommitHash
\`\`\`

**Or use the restore script:**
\`\`\`powershell
.\restore-progress.ps1
\`\`\`

"@

# Write to file
$content | Out-File -FilePath $progressFile -Encoding UTF8

Write-Host ""
Write-Host "✅ Progress document updated: $progressFile" -ForegroundColor Green
Write-Host ""
Write-Host "Please edit the file to add:" -ForegroundColor Cyan
Write-Host "  - What you completed today" -ForegroundColor White
Write-Host "  - Next steps" -ForegroundColor White
Write-Host "  - Any notes" -ForegroundColor White
Write-Host ""
Write-Host "File location: $((Get-Item $progressFile).FullName)" -ForegroundColor Yellow
