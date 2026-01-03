# How to Free Up Space on PythonAnywhere

## 🚨 Current Issue
**File storage: 100% full – 512.0 MB of 512.0 MB quota**

This prevents:
- Saving files
- Reloading web apps
- Applying changes

## 📊 Step 1: Check What's Using Space

### Using PythonAnywhere Dashboard

1. **Go to Files tab**
2. **Click on your home directory** (`/home/SherifRissas/`)
3. **Look for large files/folders:**
   - Check file sizes
   - Look for old build files
   - Check for duplicate repositories

### Using Bash Console (More Detailed)

1. **Go to Consoles tab**
2. **Open a Bash console**
3. **Run these commands:**

```bash
# Check total space used
du -sh ~

# Check space by directory (sorted by size)
du -sh ~/* | sort -h

# Find largest files (top 20)
find ~ -type f -exec du -h {} + | sort -rh | head -20

# Find largest directories
du -h --max-depth=1 ~ | sort -rh | head -10
```

## 🗑️ Step 2: Delete Unnecessary Files

### Safe to Delete:

#### 1. Old Build Files
```bash
# Check for old build directories
ls -lh ~/Optimum-Smart-System*/optimum-frontend/frontend/dist/
ls -lh ~/Optimum-Smart-System*/optimum-frontend/frontend/node_modules/

# Delete old build files (if you have multiple versions)
rm -rf ~/Optimum-Smart-System*/optimum-frontend/frontend/dist/
rm -rf ~/Optimum-Smart-System*/optimum-frontend/frontend/node_modules/
```

#### 2. Old Virtual Environments
```bash
# Check for old venv directories
ls -lh ~/Optimum-Smart-System*/optimum-backend/venv/

# Delete old venv (you can recreate it)
rm -rf ~/Optimum-Smart-System*/optimum-backend/venv/
```

#### 3. Python Cache Files
```bash
# Delete Python cache files
find ~ -type d -name "__pycache__" -exec rm -r {} + 2>/dev/null
find ~ -type f -name "*.pyc" -delete
find ~ -type f -name "*.pyo" -delete
```

#### 4. Old Log Files
```bash
# Find and delete old log files
find ~ -type f -name "*.log" -size +1M -delete
find ~ -type f -name "*.log.*" -delete
```

#### 5. Git Objects (if you have multiple repos)
```bash
# Clean up git repositories
cd ~/Optimum-Smart-System-v/optimum-backend
git gc --aggressive --prune=now

# Or if you have old/unused repos, delete them
# (Only if you're sure you don't need them)
```

#### 6. Old Database Files (if you have backups)
```bash
# Check for old database files
find ~ -name "*.sqlite3" -size +10M
find ~ -name "*.db" -size +10M

# Only delete if you have backups!
```

#### 7. Old Documentation/Build Artifacts
```bash
# Delete old documentation builds
find ~ -type d -name "build" -exec rm -r {} + 2>/dev/null
find ~ -type d -name ".next" -exec rm -r {} + 2>/dev/null
find ~ -type d -name "dist" -size +50M -exec rm -r {} + 2>/dev/null
```

### ⚠️ DO NOT DELETE:

- ❌ Your current project files (`Optimum-Smart-System-v/`)
- ❌ Active virtual environment (if you're using it)
- ❌ Current database files
- ❌ WSGI configuration files
- ❌ `.env` files with secrets
- ❌ Active git repositories (unless you have backups)

## 🎯 Step 3: Quick Cleanup Script

Run this in a Bash console to clean up common files:

```bash
# Navigate to home directory
cd ~

# Delete Python cache
echo "Cleaning Python cache..."
find . -type d -name "__pycache__" -exec rm -r {} + 2>/dev/null
find . -type f -name "*.pyc" -delete 2>/dev/null
find . -type f -name "*.pyo" -delete 2>/dev/null

# Delete old log files
echo "Cleaning log files..."
find . -type f -name "*.log" -size +1M -delete 2>/dev/null

# Clean git repositories
echo "Cleaning git repositories..."
cd ~/Optimum-Smart-System-v/optimum-backend 2>/dev/null && git gc --aggressive --prune=now 2>/dev/null || true

# Check space after cleanup
echo "Space after cleanup:"
du -sh ~
```

## 📋 Step 4: Check Space After Cleanup

```bash
# Check current space usage
du -sh ~

# Should show less than 512 MB
```

## 🔄 Step 5: If Still Full - More Aggressive Cleanup

### Option A: Delete Old Repository Versions

If you have multiple versions of the repository:

```bash
# List all Optimum-Smart-System directories
ls -lh ~/ | grep Optimum

# Keep only the current one (Optimum-Smart-System-v)
# Delete old ones if they exist:
# rm -rf ~/Optimum-Smart-System  # Only if you're sure!
```

### Option B: Delete node_modules (Can Reinstall)

```bash
# Delete node_modules (you can reinstall later)
rm -rf ~/Optimum-Smart-System-v/optimum-frontend/frontend/node_modules/

# This can free up 100-200 MB
```

### Option C: Delete venv (Can Recreate)

```bash
# Delete virtual environment (you can recreate it)
rm -rf ~/Optimum-Smart-System-v/optimum-backend/venv/

# This can free up 50-100 MB
```

## ✅ Step 6: Verify Space is Freed

1. **Go to Dashboard**
2. **Check "File storage"** - should show less than 100%
3. **You should now be able to:**
   - Save the WSGI file
   - Reload the web app

## 🚀 Step 7: After Freeing Space

1. **Update WSGI file** (as per previous instructions)
2. **Save it**
3. **Reload web app**
4. **Test CORS**

## 💡 Tips to Prevent This in Future

1. **Regular cleanup:** Run cleanup script monthly
2. **Don't commit build files:** Add `node_modules/`, `dist/`, `venv/` to `.gitignore`
3. **Use .gitignore:** Prevent unnecessary files from being cloned
4. **Delete old deployments:** Remove old project versions when not needed

## 📝 Quick Reference Commands

```bash
# Check space
du -sh ~

# Find large files
find ~ -type f -size +10M -exec ls -lh {} \;

# Find large directories
du -h --max-depth=1 ~ | sort -rh

# Clean Python cache
find ~ -type d -name "__pycache__" -exec rm -r {} + 2>/dev/null

# Clean logs
find ~ -type f -name "*.log" -delete 2>/dev/null
```
