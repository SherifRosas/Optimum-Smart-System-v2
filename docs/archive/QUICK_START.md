# 🚀 Quick Start Guide - Upgraded Frontend

## Step 1: Install Dependencies

```bash
cd optimum-frontend

# Backup current package.json (optional)
cp package.json package.json.backup

# Use upgraded package.json
cp package-upgraded.json package.json

# Install all new dependencies
npm install
```

## Step 2: Choose Your Build Tool

### Option A: Use Vite (Recommended - Faster!)
```bash
npm run dev  # Start Vite dev server
```

### Option B: Keep Create React App (Still Works)
```bash
npm start  # Start CRA dev server
```

**Note**: Both work! Vite is faster, but CRA is still fully functional.

## Step 3: Test Everything

1. **Start the app**: `npm run dev` or `npm start`
2. **Check console**: Should see React Query DevTools (in dev mode)
3. **Test features**: All existing features should work
4. **Try new features**: See examples below

## Step 4: Use New Features (Optional)

### Using React Query Instead of Manual Polling

**Old Way (Still Works):**
```javascript
// Your existing code continues to work
useEffect(() => {
  const fetchOrders = async () => {
    const response = await ordersAPI.getOrders();
    setOrders(response.data);
  };
  fetchOrders();
  const interval = setInterval(fetchOrders, 5000);
  return () => clearInterval(interval);
}, []);
```

**New Way (Better):**
```javascript
import { useOrders } from '@/hooks/queries/useOrders';

function MyComponent() {
  const { data: orders, isLoading, error } = useOrders();
  // Automatic caching, no manual polling needed!
}
```

### Using Real-time Updates

```javascript
import { useRealTimeOrders } from '@/hooks/useRealTimeOrders';

function MyComponent() {
  const { isConnected } = useRealTimeOrders();
  // Automatic real-time updates via WebSocket!
}
```

### Using New UI Components

```javascript
import { Button, Dialog, Select, Tooltip } from '@/components/ui';

// Button
<Button variant="primary" size="lg">Click me</Button>

// Dialog
<Dialog open={open} onOpenChange={setOpen} title="Title">
  Content
</Dialog>

// Select
<Select value={value} onValueChange={setValue}>
  <SelectItem value="1">Option 1</SelectItem>
</Select>
```

## Step 5: Build for Production

```bash
# Standard build
npm run build

# Optimized build with analysis
ANALYZE=true npm run build
```

## Troubleshooting

### Issue: Module not found
**Solution**: Make sure you ran `npm install` after updating package.json

### Issue: Path aliases not working
**Solution**: 
- If using Vite: Check `vite.config.js` has path aliases
- If using CRA: Path aliases only work with Vite

### Issue: Environment variables not working
**Solution**: 
- Vite uses `VITE_*` prefix (not `REACT_APP_*`)
- Create `.env` file with `VITE_API_URL=...`

### Issue: WebSocket not connecting
**Solution**: 
- Check backend WebSocket is running
- Verify `VITE_WS_URL` in `.env` or `src/config/api.js`

## What's New vs What Still Works

### ✅ New Features (Opt-in)
- React Query hooks
- Zustand stores
- WebSocket hooks
- New UI components
- Performance utilities

### ✅ Still Works (Backward Compatible)
- All existing components
- All existing features
- All existing routes
- All existing API calls
- Manual polling (if you prefer)

## Next Steps

1. **Test everything** - Make sure all features work
2. **Gradual migration** - Migrate components one by one
3. **Use new features** - When you're ready
4. **Read docs** - Check `MIGRATION_EXAMPLES.md` for examples

## Need Help?

- **UPGRADE_GUIDE.md** - Complete migration guide
- **MIGRATION_EXAMPLES.md** - Before/after examples
- **PERFORMANCE_OPTIMIZATION.md** - Performance tips
- **UPGRADE_FINAL.md** - Complete feature list

## 🎉 You're Ready!

Your frontend is now upgraded and ready to use. All existing code works, and new features are available when you need them!


