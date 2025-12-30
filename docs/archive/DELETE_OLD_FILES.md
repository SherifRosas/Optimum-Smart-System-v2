# Delete Old Files

## Files to Delete

Since we've created `.jsx` versions, you can delete the old `.js` files:

1. `src/App.js` - Replaced by `src/App.jsx`
2. `src/contexts/ThemeContext.js` - Replaced by `src/contexts/ThemeContext.jsx`

## How to Delete

### Option 1: Manual Delete
- Delete `src/App.js`
- Delete `src/contexts/ThemeContext.js`

### Option 2: PowerShell
```powershell
cd optimum-frontend/src
Remove-Item App.js
Remove-Item contexts/ThemeContext.js
```

### Option 3: File Explorer
- Navigate to `optimum-frontend/src/`
- Delete `App.js`
- Navigate to `optimum-frontend/src/contexts/`
- Delete `ThemeContext.js`

## Why Delete?

Vite is trying to process both files, which causes conflicts. Since we have `.jsx` versions, the old `.js` files are no longer needed.

## After Deleting

Run `npm run dev` again - it should work!


