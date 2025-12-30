# Migration Examples - Using New Features

## 📚 Examples of Using New Features

### 1. Using React Query Instead of Manual Polling

**Before (Manual Polling):**
```javascript
// Old way - Manual polling
useEffect(() => {
  const fetchOrders = async () => {
    const response = await ordersAPI.getOrders();
    setOrders(response.data.results || response.data);
  };
  
  fetchOrders();
  const interval = setInterval(fetchOrders, 5000);
  return () => clearInterval(interval);
}, []);
```

**After (React Query):**
```javascript
// New way - React Query with automatic caching
import { useOrders } from '@/hooks/queries/useOrders';

function MyComponent() {
  const { data: orders, isLoading, error } = useOrders();
  
  // Automatic caching, refetching, error handling!
  // No manual polling needed
}
```

### 2. Using React Query Mutations

**Before:**
```javascript
const handleCreateOrder = async (orderData) => {
  try {
    setLoading(true);
    const response = await ordersAPI.createOrder(orderData);
    setOrders([...orders, response.data]);
    toast.show('Order created!', 'success');
  } catch (error) {
    toast.show('Error creating order', 'error');
  } finally {
    setLoading(false);
  }
};
```

**After:**
```javascript
import { useCreateOrder } from '@/hooks/queries/useOrders';

function MyComponent() {
  const createOrder = useCreateOrder();
  
  const handleCreateOrder = async (orderData) => {
    try {
      await createOrder.mutateAsync(orderData);
      toast.show('Order created!', 'success');
      // Cache automatically updated!
    } catch (error) {
      toast.show('Error creating order', 'error');
    }
  };
}
```

### 3. Using Zustand for UI State

**Before (useState):**
```javascript
const [sidebarOpen, setSidebarOpen] = useState(true);
const [theme, setTheme] = useState('light');

// Pass down through props...
```

**After (Zustand):**
```javascript
import { useUIStore } from '@/stores/uiStore';

function MyComponent() {
  const { sidebarOpen, toggleSidebar, theme, setTheme } = useUIStore();
  
  // No prop drilling needed!
  // State is accessible anywhere
}
```

### 4. Using WebSocket for Real-time Updates

**Before (Polling):**
```javascript
// Polling every 5 seconds
useEffect(() => {
  const interval = setInterval(() => {
    fetchOrders();
  }, 5000);
  return () => clearInterval(interval);
}, []);
```

**After (WebSocket):**
```javascript
import { useRealTimeOrders } from '@/hooks/useRealTimeOrders';

function MyComponent() {
  const { isConnected } = useRealTimeOrders();
  
  // Automatic real-time updates!
  // No polling needed
  // Cache automatically invalidated on changes
}
```

### 5. Using Utility Functions

**Before:**
```javascript
// Manual formatting
const formattedDate = new Date(order.created_at).toLocaleDateString();
const formattedAmount = `EGP ${order.total_amount.toFixed(2)}`;
```

**After:**
```javascript
import { formatDate, formatCurrency } from '@/utils/format';

const formattedDate = formatDate(order.created_at);
const formattedAmount = formatCurrency(order.total_amount);
```

### 6. Complete Component Example

**Before:**
```javascript
function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await ordersAPI.getOrders();
        setOrders(response.data.results || response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      await ordersAPI.updateOrderStatus(id, status);
      // Manually update state
      setOrders(orders.map(o => o.id === id ? {...o, status} : o));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {orders.map(order => (
        <div key={order.id}>
          Order #{order.id} - {order.status}
        </div>
      ))}
    </div>
  );
}
```

**After:**
```javascript
import { useOrders, useUpdateOrderStatus } from '@/hooks/queries/useOrders';
import { useRealTimeOrders } from '@/hooks/useRealTimeOrders';
import { formatDate, formatCurrency, formatOrderStatus } from '@/utils/format';

function OrdersList() {
  // React Query handles fetching, caching, error handling
  const { data: orders = [], isLoading, error } = useOrders();
  
  // Mutation with automatic cache updates
  const updateStatus = useUpdateOrderStatus();
  
  // Real-time updates via WebSocket
  const { isConnected } = useRealTimeOrders();

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateStatus.mutateAsync({ id, status });
      // Cache automatically updated!
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {isConnected && <div>🟢 Real-time updates active</div>}
      {orders.map(order => (
        <div key={order.id}>
          Order #{order.id} - {formatOrderStatus(order.status)}
          <br />
          Created: {formatDate(order.created_at)}
          <br />
          Total: {formatCurrency(order.total_amount)}
        </div>
      ))}
    </div>
  );
}
```

## 🎯 Benefits

1. **Less Code** - React Query handles caching, refetching, error states
2. **Better Performance** - Automatic caching reduces API calls
3. **Real-time** - WebSocket updates without polling
4. **Type Safety** - Ready for TypeScript migration
5. **Better UX** - Optimistic updates, background refetching

## 📝 Migration Strategy

1. **Start Small** - Migrate one component at a time
2. **Keep Old Code** - Both approaches work side-by-side
3. **Test Thoroughly** - Ensure features still work
4. **Gradual Migration** - No need to migrate everything at once

## 🔄 Backward Compatibility

- ✅ Old code continues to work
- ✅ New features are opt-in
- ✅ Can mix old and new approaches
- ✅ No breaking changes


