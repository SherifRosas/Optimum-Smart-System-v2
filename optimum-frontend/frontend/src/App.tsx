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
const CommandCenter = lazy(() => import('./components/CommandCenter'));
const AnalyticsDashboard = lazy(() => import('./components/AnalyticsDashboard'));
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
const ProfileCompletion = lazy(() => import('./components/ProfileCompletion'));
const BatchOrderUpload = lazy(() => import('./components/BatchOrderUpload'));

// Types
interface TransformedOrder {
    id: number | string;
    customerName?: string;
    phoneNumber?: string;
    supplierName?: string;
    productType: string;
    quantity: number;
    totalAmount?: number;
    deliveryDate?: string;
    status: 'pending' | 'in-preparation' | 'ready' | 'delivered';
    createdAt: string;
    updatedAt?: string;
}

interface RawOrder {
    id: number | string;
    customer_name?: string;
    customer_phone?: string;
    supplier_name?: string;
    product_type: string;
    quantity: number;
    total_amount?: number;
    delivery_date?: string;
    status: 'pending' | 'in-preparation' | 'ready' | 'delivered';
    created_at: string;
    updated_at?: string;
}

interface OrderFormData {
    customerName: string;
    phoneNumber: string;
    productType: string;
    quantity: number;
    deliveryDate: string;
}

interface MainAppProps {
    currentView: string | null;
    setCurrentView: (view: string | null) => void;
    orders: TransformedOrder[];
    loading: boolean;
    error: string | null;
    handleNewOrder: (orderData: OrderFormData) => Promise<void>;
    handleStatusUpdate: (orderId: number | string, newStatus: string) => Promise<void>;
    renderView: React.ReactNode;
}

// Main App Content Component (separated for routing) - Memoized for performance
const MainApp = memo<MainAppProps>(({ currentView, setCurrentView, orders, loading, error, handleNewOrder, handleStatusUpdate, renderView }) => {
    const auth = useAuth(); // Add useAuth hook to access auth context
    
    // Check if CommandCenter is being rendered (it has its own header/sidebar)
    const isCommandCenter = React.isValidElement(renderView) && 
                           renderView.type && 
                           (renderView.type as any).name === 'CommandCenter';
    
    // For admin users on dashboard, CommandCenter has its own structure, so hide MainApp's header/nav
    // BUT: Only hide MainApp's header/nav when currentView is 'dashboard' - allow other views to use MainApp structure
    const isAdminDashboard = auth.isAdmin() && currentView === 'dashboard';
    
    // If CommandCenter is rendered, it has its own header/sidebar, so hide MainApp's
    if (isAdminDashboard) {
        return (
            <div className="App">
                {/* CommandCenter has its own header and sidebar, so don't render MainApp's */}
                <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                    {renderView}
                </div>
                <Suspense fallback={null}>
                    <AIChatWidget />
                </Suspense>
            </div>
        );
    }
    
    return (
        <div className="App">
            <Header onNavigate={setCurrentView} />
            <div className="app-container">
                <Navigation currentView={currentView} onNavigate={setCurrentView} />
                <main className="main-content">
                    {/* Simplified animation for better performance */}
                    <div key={currentView || 'default'} style={{ willChange: 'opacity' }}>
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
const transformOrderData = (order: RawOrder): TransformedOrder => {
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
    const location = useLocation();
    // Initialize currentView based on pathname, default to null (will show RoleSelection)
    const [currentView, setCurrentView] = useState<string | null>(() => {
        const path = location.pathname;
        if (path === '/' || path === '') return null; // null means show RoleSelection
        if (path === '/profile') return 'profile';
        if (path === '/settings') return 'settings';
        if (path === '/dashboard' || path === '/app') return 'dashboard';
        return null; // Default to RoleSelection for unknown paths
    });
    const [orders, setOrders] = useState<TransformedOrder[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const toast = useToast();
    const { ToastContainer } = toast;

    // Load orders from API with real-time polling (filtered by role)
    useEffect(() => {
        // Only fetch orders if user is authenticated
        if (!auth.isAuthenticated || !auth.user) {
            setLoading(false);
            setOrders([]);
            return;
        }

        let isMounted = true;
        let pollInterval: any = null;

        const fetchOrders = async (showToast = false) => {
            // Double-check authentication before making request
            if (!auth.isAuthenticated || !auth.user) {
                if (isMounted) {
                    setLoading(false);
                    setOrders([]);
                }
                return;
            }

            try {
                if (showToast) {
                    setLoading(true);
                    setError(null);
                }

                // Build API params based on user role
                const params: Record<string, any> = {};
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
            } catch (err: any) {
                if (isMounted) {
                    setLoading(false); // Always set loading to false on error

                    // Handle 401 errors silently (user not authenticated)
                    const status = err?.response?.status;
                    if (status === 401) {
                        // User is not authenticated, clear orders and stop polling
                        setOrders([]);
                        setError(null);
                        return; // Exit early, don't show error toast
                    }

                    if (showToast) {
                        setError('Failed to load orders');
                        toast.error('Failed to load orders. Please try again.');
                    }
                    console.error('Error fetching orders:', err);
                }
            }
        };

        // Initial load - only if authenticated
        if (auth.isAuthenticated && auth.user) {
            fetchOrders(true);

            // Poll for updates every 90 seconds (further reduced for better performance)
            // Use requestIdleCallback with longer timeout to avoid blocking
            const scheduleNextPoll = () => {
                if (!isMounted || !auth.isAuthenticated || !auth.user) return;

                if (window.requestIdleCallback) {
                    const idleCallbackId = window.requestIdleCallback(() => {
                        if (isMounted && auth.isAuthenticated && auth.user) {
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
                        if (isMounted && auth.isAuthenticated && auth.user) {
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
        }

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
    }, [auth.user, auth.isAuthenticated, auth.getUserRole]); // Added isAuthenticated to dependencies

    const handleNewOrder = useCallback(async (orderData: OrderFormData) => {
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
        } catch (err: any) {
            setError('Failed to create order');
            toast.error('Failed to create order. Please check your input and try again.');
            if (import.meta.env.DEV) {
                console.error('Error creating order:', err);
            }
        }
    }, [toast, setCurrentView]);

    const handleStatusUpdate = useCallback(async (orderId: number | string, newStatus: string) => {
        try {
            await ordersAPI.updateOrderStatus(orderId, newStatus);
            setOrders(prevOrders => prevOrders.map(order =>
                order.id === orderId ? { ...order, status: newStatus as TransformedOrder['status'] } : order
            ));
            toast.success(`Order status updated to ${newStatus}`);
        } catch (err: any) {
            setError('Failed to update order status');
            toast.error('Failed to update order status. Please try again.');
            if (import.meta.env.DEV) {
                console.error('Error updating order status:', err);
            }
        }
    }, [toast]);

    const renderView = useMemo(() => {
        // CRITICAL: Early check - if admin, never render CustomerDashboard
        const isAdmin = auth.isAdmin();
        
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

        // CRITICAL: If admin user, ALWAYS render CommandCenter for dashboard view ONLY
        // This prevents any possibility of CustomerDashboard rendering
        // IMPORTANT: Only force CommandCenter when currentView is 'dashboard' or null
        // For other views (orders, customers, suppliers), let the switch statement handle them
        if (isAdmin && (currentView === 'dashboard' || currentView === null)) {
            console.log('✅ FORCING CommandCenter for admin - currentView:', currentView, 'pathname:', location.pathname);
            // Ensure currentView is set to 'dashboard' for admin
            if (currentView !== 'dashboard') {
                setCurrentView('dashboard');
            }
            // Don't wrap CommandCenter in a div - it has its own structure with header and sidebar
            return (
                <Suspense fallback={<ListSkeleton count={6} />}>
                    <CommandCenter orders={orders} onNavigate={setCurrentView} currentView="dashboard" />
                </Suspense>
            );
        }
        
        // CRITICAL: Also handle initial load when pathname is /dashboard or /app but currentView is null
        if (isAdmin && currentView === null && (location.pathname === '/dashboard' || location.pathname === '/app')) {
            console.log('✅ Initial load - forcing dashboard for admin');
            setCurrentView('dashboard');
            return (
                <Suspense fallback={<ListSkeleton count={6} />}>
                    <CommandCenter orders={orders} onNavigate={setCurrentView} currentView="dashboard" />
                </Suspense>
            );
        }

        // Role-based component routing
        const userRole = auth.getUserRole();
        
        console.log('🔍 renderView - currentView:', currentView, 'isAdmin:', isAdmin, 'pathname:', location.pathname);

        switch (currentView) {
            // Admin views
            case 'dashboard':
                if (auth.isAdmin()) {
                    return (
                        <Suspense fallback={<ListSkeleton count={6} />}>
                            <CommandCenter orders={orders} onNavigate={setCurrentView} currentView={currentView} />
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

            case 'customers':
                return (
                    <Suspense fallback={<ListSkeleton count={4} />}>
                        <AdminUserManagement />
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

            case 'analytics':
                return (
                    <Suspense fallback={<ListSkeleton count={6} />}>
                        <AnalyticsDashboard orders={orders} />
                    </Suspense>
                );

            case 'ai-insights':
                return (
                    <Suspense fallback={<ListSkeleton count={6} />}>
                        <AIDashboard orders={orders} />
                    </Suspense>
                );

            case 'batch-upload':
                return (
                    <Suspense fallback={<ListSkeleton count={3} />}>
                        <BatchOrderUpload />
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
                // CRITICAL: If currentView is null but user is authenticated, force dashboard immediately
                // This prevents CustomerDashboard from rendering for admin users
                if (currentView === null && auth.isAuthenticated && auth.user) {
                    console.warn('⚠️ currentView is null but user is authenticated - forcing dashboard immediately');
                    
                    // CRITICAL: For admin users, render CommandCenter immediately instead of waiting
                    if (auth.isAdmin()) {
                        console.log('✅ Null currentView for admin - rendering CommandCenter immediately');
                        // Set currentView synchronously
                        setCurrentView('dashboard');
                        // Return CommandCenter immediately, don't wait
                        return (
                            <Suspense fallback={<ListSkeleton count={6} />}>
                                <CommandCenter orders={orders} onNavigate={setCurrentView} currentView="dashboard" />
                            </Suspense>
                        );
                    }
                }
                
                // CRITICAL: Default to role-appropriate dashboard
                // NEVER render CustomerDashboard for admin users - always CommandCenter
                if (auth.isAdmin()) {
                    // Force dashboard view for admin if currentView is null/undefined
                    const adminView = currentView || 'dashboard';
                    if (adminView === 'dashboard') {
                        return (
                            <Suspense fallback={<ListSkeleton count={6} />}>
                                <CommandCenter orders={orders} onNavigate={setCurrentView} currentView="dashboard" />
                            </Suspense>
                        );
                    }
                    // For other views, let the switch handle it (shouldn't reach here)
                    return null;
                } else if (auth.isSupplier()) {
                    return (
                        <Suspense fallback={<ListSkeleton count={6} />}>
                            <SupplierDashboard orders={orders} />
                        </Suspense>
                    );
                } else if (auth.isCustomer()) {
                    // Only render CustomerDashboard if user is explicitly a customer (not admin)
                    return (
                        <Suspense fallback={<ListSkeleton count={6} />}>
                            <CustomerDashboard orders={orders} />
                        </Suspense>
                    );
                }
                // Fallback: don't render anything if role is unclear
                return null;
        }
    }, [loading, error, currentView, orders, handleNewOrder, handleStatusUpdate, auth, setCurrentView, location.pathname]);

    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
    // Check for root path - handle both exact '/' and empty pathname (Vercel edge case)
    // Also check if currentView is null (initial state for root)
    const isRoleSelection = location.pathname === '/' || location.pathname === '' || !location.pathname || currentView === null;

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
    // This early return ensures root path ALWAYS shows RoleSelection
    if (isRoleSelection) {
        // If authenticated, allow access but show role selection
        // If not authenticated, show role selection (required)
        return (
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<RoleSelection />} />
                    {/* Allow navigation to login/signup from role selection */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    {/* Catch-all to redirect other paths to root during role selection */}
                    <Route path="*" element={<Navigate to="/" replace />} />
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
                {/* Explicit root route - MUST be first to prevent catch-all from matching */}
                <Route path="/" element={<RoleSelection />} />

                {/* Profile and Settings routes - protected and handled by MainApp with useEffect */}
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
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
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute>
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
                        </ProtectedRoute>
                    }
                />
                {/* Redirect /app to /dashboard */}
                <Route path="/app" element={<Navigate to="/dashboard" replace />} />
                {/* Dashboard route */}
                <Route
                    path="/dashboard"
                    element={
                        <MainApp
                            currentView={currentView || 'dashboard'}
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
                <Route
                    path="/profile-completion"
                    element={
                        <ProtectedRoute>
                            <ProfileCompletion />
                        </ProtectedRoute>
                    }
                />
                {/* Catch-all route - matches everything except root (which is handled above) */}
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
