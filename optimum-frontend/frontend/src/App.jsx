import React, { useState, useEffect, Suspense, lazy, useMemo, useCallback, startTransition, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';
import { ListSkeleton } from './components/LoadingSkeleton';
import { ordersAPI } from './services/api';
import { useToast } from './hooks/useToast';
import { useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import RoleSelection from './components/RoleSelection';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load heavy components for code splitting
const ModernDashboard = lazy(() => import('./components/ModernDashboard'));
const OrderReception = lazy(() => import('./components/OrderReception'));
const OrderList = lazy(() => import('./components/OrderList'));
const SupplierCommunication = lazy(() => import('./components/SupplierCommunication'));
const Accounting = lazy(() => import('./components/Accounting'));
const AIDashboard = lazy(() => import('./components/AIDashboard'));
const AIChatPage = lazy(() => import('./components/AIChatPage'));
const AIChatWidget = lazy(() => import('./components/AIChatWidget'));
const About = lazy(() => import('./components/About'));
const UserProfile = lazy(() => import('./components/UserProfile'));
const UserSettings = lazy(() => import('./components/UserSettings'));
// Role-based components
const CustomerDashboard = lazy(() => import('./components/CustomerDashboard'));
const CustomerOrders = lazy(() => import('./components/CustomerOrders'));
const NewOrderRequest = lazy(() => import('./components/NewOrderRequest'));
const SupplierDashboard = lazy(() => import('./components/SupplierDashboard'));
const OrderRequests = lazy(() => import('./components/OrderRequests'));
const SupplierOrders = lazy(() => import('./components/SupplierOrders'));
// Admin components
const AdminUserManagement = lazy(() => import('./components/AdminUserManagement'));

// Main App Content Component (separated for routing) - Memoized for performance
const MainApp = memo(({ currentView, setCurrentView, orders, loading, error, handleNewOrder, handleStatusUpdate, renderView }) => {
  return (
    <div className="App">
      <Header onNavigate={setCurrentView} />
      <div className="app-container">
        <Navigation currentView={currentView} onNavigate={setCurrentView} />
        <main className="main-content">
          {/* Simplified animation for better performance */}
          <div key={currentView} style={{ willChange: 'opacity' }}>
            {renderView}
          </div>
        </main>
      </div>
      <Suspense fallback={null}>
        <AIChatWidget />
      </Suspense>
    </div>
  );
});

// Helper function to transform snake_case to camelCase
const transformOrderData = (order) => {
  return {
    id: order.id,
    customerName: order.customer_name,
    phoneNumber: order.customer_phone,
    supplierName: order.supplier_name,
    productType: order.product_type,
    quantity: order.quantity,
    totalAmount: order.total_amount,
    deliveryDate: order.delivery_date,
    status: order.status,
    createdAt: order.created_at,
    updatedAt: order.updated_at
  };
};

function App() {
  const auth = useAuth();
  const [currentView, setCurrentView] = useState('dashboard');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();
  const { ToastContainer } = toast;

  // Load orders from API with real-time polling (filtered by role)
  useEffect(() => {
    let isMounted = true;
    let pollInterval = null;

    const fetchOrders = async (showToast = false) => {
      try {
        if (showToast) {
          setLoading(true);
          setError(null);
        }
        
        // Build API params based on user role
        const params = {};
        const userRole = auth.getUserRole();
        
        // Filter by role on backend if possible
        if (userRole === 'PRODUCT_REQUESTER' && auth.user?.id) {
          params.customer_id = auth.user.id;
        } else if (userRole === 'SUPPLIER' && auth.user?.id) {
          params.supplier_id = auth.user.id;
        }
        
        const response = await ordersAPI.getOrders(params);
        // Transform the data to match frontend expectations
        const ordersData = response.data.results || response.data;
        const transformedOrders = Array.isArray(ordersData) ? ordersData.map(transformOrderData) : [];
        
        if (isMounted) {
          const prevCount = orders.length;
          const hasSignificantChange = Math.abs(transformedOrders.length - prevCount) > 0;
          
          // Set loading to false immediately (outside transition) so UI updates right away
          if (showToast) {
            setLoading(false);
          }
          
          // Use startTransition for non-urgent updates (React 18+)
          startTransition(() => {
            if (isMounted) {
              setOrders(transformedOrders);
            }
          });
          
          // Show notifications outside of transition (use requestIdleCallback for non-critical toasts)
          if (showToast) {
            if (window.requestIdleCallback) {
              window.requestIdleCallback(() => {
                toast.success('Orders loaded successfully');
              }, { timeout: 100 });
            } else {
              requestAnimationFrame(() => {
                toast.success('Orders loaded successfully');
              });
            }
          } else if (hasSignificantChange && prevCount > 0) {
            const diff = transformedOrders.length - prevCount;
            if (window.requestIdleCallback) {
              window.requestIdleCallback(() => {
                toast.success(`${diff > 0 ? '+' : ''}${diff} new order${Math.abs(diff) > 1 ? 's' : ''} available`);
              }, { timeout: 100 });
            } else {
              requestAnimationFrame(() => {
                toast.success(`${diff > 0 ? '+' : ''}${diff} new order${Math.abs(diff) > 1 ? 's' : ''} available`);
              });
            }
          }
        }
      } catch (err) {
        if (isMounted) {
          setLoading(false); // Always set loading to false on error
          if (showToast) {
            setError('Failed to load orders');
            toast.error('Failed to load orders. Please try again.');
          }
          console.error('Error fetching orders:', err);
        }
      } finally {
        // Loading is already set to false in the try block
        // This block is kept for any future cleanup needs
      }
    };

    // Initial load
    fetchOrders(true);

    // Poll for updates every 90 seconds (further reduced for better performance)
    // Use requestIdleCallback with longer timeout to avoid blocking
    const scheduleNextPoll = () => {
      if (!isMounted) return;
      
      if (window.requestIdleCallback) {
        const idleCallbackId = window.requestIdleCallback(() => {
          if (isMounted) {
            // Use startTransition to mark as non-urgent
            startTransition(() => {
              requestAnimationFrame(() => {
                fetchOrders(false);
              });
            });
            pollInterval = setTimeout(scheduleNextPoll, 90000); // Increased to 90 seconds
          }
        }, { timeout: 5000 }); // Increased timeout to avoid blocking
        // Store both for cleanup
        pollInterval = { timeout: null, idle: idleCallbackId };
      } else {
        pollInterval = setTimeout(() => {
          if (isMounted) {
            startTransition(() => {
              requestAnimationFrame(() => {
                fetchOrders(false);
              });
            });
            scheduleNextPoll();
          }
        }, 90000); // Increased to 90 seconds
      }
    };
    
    scheduleNextPoll();

    return () => {
      isMounted = false;
      if (pollInterval) {
        if (typeof pollInterval === 'number') {
          clearTimeout(pollInterval);
        } else if (typeof pollInterval === 'object' && pollInterval !== null) {
          if (pollInterval.timeout) clearTimeout(pollInterval.timeout);
          if (pollInterval.idle && window.cancelIdleCallback) {
            window.cancelIdleCallback(pollInterval.idle);
          }
        } else {
          clearInterval(pollInterval);
        }
      }
    };
  }, [auth.user, auth.getUserRole]); // Removed toast from dependencies - functions are stable

  const handleNewOrder = useCallback(async (orderData) => {
    try {
      const response = await ordersAPI.createOrder({
        customer: {
          name: orderData.customerName,
          phone_number: orderData.phoneNumber
        },
        product_type: orderData.productType,
        quantity: orderData.quantity,
        unit_price: 10000, // Default price, should be calculated
        delivery_date: orderData.deliveryDate
      });
      
      // Transform the new order data
      const transformedOrder = transformOrderData(response.data);
      setOrders(prevOrders => [transformedOrder, ...prevOrders]);
      toast.success('Order created successfully!');
      setCurrentView('orders');
    } catch (err) {
      setError('Failed to create order');
      toast.error('Failed to create order. Please check your input and try again.');
      if (process.env.NODE_ENV === 'development') {
        console.error('Error creating order:', err);
      }
    }
  }, []); // Removed toast - functions are stable

  const handleStatusUpdate = useCallback(async (orderId, newStatus) => {
    try {
      await ordersAPI.updateOrderStatus(orderId, newStatus);
      setOrders(prevOrders => prevOrders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      ));
      toast.success(`Order status updated to ${newStatus}`);
    } catch (err) {
      setError('Failed to update order status');
      toast.error('Failed to update order status. Please try again.');
      if (process.env.NODE_ENV === 'development') {
        console.error('Error updating order status:', err);
      }
    }
  }, []); // Removed toast - functions are stable

  const renderView = useMemo(() => {
    if (loading) {
      return <ListSkeleton count={6} />;
    }

    if (error) {
      return (
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button onClick={() => window.location.reload()} aria-label="Retry loading orders" title="Retry loading orders">
            Retry
          </button>
        </div>
      );
    }

    // Role-based component routing
    const userRole = auth.getUserRole();
    
    switch (currentView) {
      // Admin views
      case 'dashboard':
        if (auth.isAdmin()) {
          return (
            <Suspense fallback={<ListSkeleton count={6} />}>
              <ModernDashboard orders={orders} onNavigate={setCurrentView} />
            </Suspense>
          );
        } else if (auth.isSupplier()) {
          return (
            <Suspense fallback={<ListSkeleton count={6} />}>
              <SupplierDashboard orders={orders} />
            </Suspense>
          );
        } else {
          return (
            <Suspense fallback={<ListSkeleton count={6} />}>
              <CustomerDashboard orders={orders} />
            </Suspense>
          );
        }
      
      case 'new-order':
        return (
          <Suspense fallback={<ListSkeleton count={3} />}>
            <OrderReception onSubmit={handleNewOrder} />
          </Suspense>
        );
      
      case 'new-request':
        return (
          <Suspense fallback={<ListSkeleton count={3} />}>
            <NewOrderRequest onSubmit={handleNewOrder} />
          </Suspense>
        );
      
      case 'orders':
        return (
          <Suspense fallback={<ListSkeleton count={6} />}>
            <OrderList orders={orders} onStatusUpdate={handleStatusUpdate} />
          </Suspense>
        );
      
      case 'my-orders':
        if (auth.isCustomer()) {
          return (
            <Suspense fallback={<ListSkeleton count={6} />}>
              <CustomerOrders orders={orders} />
            </Suspense>
          );
        } else if (auth.isSupplier()) {
          return (
            <Suspense fallback={<ListSkeleton count={6} />}>
              <SupplierOrders orders={orders} onStatusUpdate={handleStatusUpdate} />
            </Suspense>
          );
        }
        break;
      
      case 'order-requests':
        return (
          <Suspense fallback={<ListSkeleton count={4} />}>
            <OrderRequests orders={orders} />
          </Suspense>
        );
      
      case 'supplier-offers':
      case 'supplier-inventory':
        // Placeholder for future implementation
        return (
          <Suspense fallback={<ListSkeleton count={4} />}>
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <h2>Coming Soon</h2>
              <p>This feature is under development.</p>
            </div>
          </Suspense>
        );
      
      case 'order-history':
        return (
          <Suspense fallback={<ListSkeleton count={6} />}>
            <CustomerOrders orders={orders} />
          </Suspense>
        );
      
      case 'suppliers':
        return (
          <Suspense fallback={<ListSkeleton count={4} />}>
            <SupplierCommunication orders={orders} />
          </Suspense>
        );
      
      case 'accounting':
        return (
          <Suspense fallback={<ListSkeleton count={4} />}>
            <Accounting orders={orders} />
          </Suspense>
        );
      
      case 'ai-dashboard':
        return (
          <Suspense fallback={<ListSkeleton count={4} />}>
            <AIDashboard />
          </Suspense>
        );
      
      case 'chat':
        return (
          <Suspense fallback={<ListSkeleton count={3} />}>
            <AIChatPage />
          </Suspense>
        );
      
      case 'about':
        return (
          <Suspense fallback={<ListSkeleton count={3} />}>
            <About />
          </Suspense>
        );
      
      case 'profile':
        return (
          <Suspense fallback={<ListSkeleton count={3} />}>
            <UserProfile />
          </Suspense>
        );
      
      case 'settings':
        return (
          <Suspense fallback={<ListSkeleton count={3} />}>
            <UserSettings />
          </Suspense>
        );
      
      case 'user-management':
        return (
          <Suspense fallback={<ListSkeleton count={4} />}>
            <AdminUserManagement />
          </Suspense>
        );
      
      default:
        // Default to role-appropriate dashboard
        if (auth.isAdmin()) {
          return (
            <Suspense fallback={<ListSkeleton count={6} />}>
              <ModernDashboard orders={orders} onNavigate={setCurrentView} />
            </Suspense>
          );
        } else if (auth.isSupplier()) {
          return (
            <Suspense fallback={<ListSkeleton count={6} />}>
              <SupplierDashboard orders={orders} />
            </Suspense>
          );
        } else {
          return (
            <Suspense fallback={<ListSkeleton count={6} />}>
              <CustomerDashboard orders={orders} />
            </Suspense>
          );
        }
    }
  }, [loading, error, currentView, orders, handleNewOrder, handleStatusUpdate, auth]);

  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isRoleSelection = location.pathname === '/';
  
  // Handle route-based navigation for profile/settings
  useEffect(() => {
    if (location.pathname === '/profile') {
      setCurrentView('profile');
    } else if (location.pathname === '/settings') {
      setCurrentView('settings');
    } else if (location.pathname === '/dashboard' || location.pathname === '/app') {
      setCurrentView('dashboard');
      // Update URL if on /app
      if (location.pathname === '/app') {
        window.history.replaceState({}, '', '/dashboard');
      }
    } else if (location.pathname === '/' || location.pathname === '') {
      // Explicitly set to null for root path to show RoleSelection
      setCurrentView(null);
    }
  }, [location.pathname]);

  // Show role selection page on home page (always show, even if authenticated)
  // Users can still access it to switch roles or see the landing page
  if (isRoleSelection) {
    // If authenticated, allow access but show role selection
    // If not authenticated, show role selection (required)
    return (
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<RoleSelection />} />
        </Routes>
        <ToastContainer />
      </ErrorBoundary>
    );
  }

  // If on auth page, show only auth component
  if (isAuthPage) {
    return (
      <ErrorBoundary>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <ToastContainer />
      </ErrorBoundary>
    );
  }

  // Main app (authentication optional for now)
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/profile" element={<Navigate to="/" replace />} />
        <Route path="/settings" element={<Navigate to="/" replace />} />
        <Route 
          path="/*" 
          element={
            <MainApp
              currentView={currentView}
              setCurrentView={setCurrentView}
              orders={orders}
              loading={loading}
              error={error}
              handleNewOrder={handleNewOrder}
              handleStatusUpdate={handleStatusUpdate}
              renderView={renderView}
            />
          } 
        />
      </Routes>
      <ToastContainer />
    </ErrorBoundary>
  );
}

export default App;