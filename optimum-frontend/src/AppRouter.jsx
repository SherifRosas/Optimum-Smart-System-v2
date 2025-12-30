import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { useAuth } from './contexts/AuthContext'
import ErrorBoundary from './components/ErrorBoundary'
import { ListSkeleton } from './components/LoadingSkeleton'
import RoleSelection from './components/RoleSelection'
import Login from './components/Login'
import Signup from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute'

// Lazy load components for code splitting
const ModernDashboard = lazy(() => import('./components/ModernDashboard'))
const OrderList = lazy(() => import('./components/OrderList'))
const OrderReception = lazy(() => import('./components/OrderReception'))
const Accounting = lazy(() => import('./components/Accounting'))
const AIDashboard = lazy(() => import('./components/AIDashboard'))
const AIChatPage = lazy(() => import('./components/AIChatPage'))
const AdminUserManagement = lazy(() => import('./components/AdminUserManagement'))
const CustomerDashboard = lazy(() => import('./components/CustomerDashboard'))
const CustomerOrders = lazy(() => import('./components/CustomerOrders'))
const NewOrderRequest = lazy(() => import('./components/NewOrderRequest'))
const SupplierDashboard = lazy(() => import('./components/SupplierDashboard'))
const SupplierOrders = lazy(() => import('./components/SupplierOrders'))
const OrderRequests = lazy(() => import('./components/OrderRequests'))
const UserProfile = lazy(() => import('./components/UserProfile'))
const UserSettings = lazy(() => import('./components/UserSettings'))
const About = lazy(() => import('./components/About'))

// Main App Layout Component
function AppLayout({ children }) {
    return (
        <div className="app">
            {children}
        </div>
    )
}

// Router Component
function AppRouter() {
    const { isAuthenticated, user } = useAuth()

    return (
        <BrowserRouter>
            <ErrorBoundary>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<RoleSelection />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* Protected Routes */}
                    <Route
                        path="/app/*"
                        element={
                            <ProtectedRoute>
                                <AppLayout>
                                    <Routes>
                                        {/* Dashboard Routes */}
                                        <Route
                                            path="/dashboard"
                                            element={
                                                <Suspense fallback={<ListSkeleton count={6} />}>
                                                    <ModernDashboard />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path=""
                                            element={
                                                <Suspense fallback={<ListSkeleton count={6} />}>
                                                    <ModernDashboard />
                                                </Suspense>
                                            }
                                        />

                                        {/* Orders Routes */}
                                        <Route
                                            path="/orders"
                                            element={
                                                <Suspense fallback={<ListSkeleton count={6} />}>
                                                    <OrderList />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/orders/reception"
                                            element={
                                                <Suspense fallback={<ListSkeleton count={3} />}>
                                                    <OrderReception />
                                                </Suspense>
                                            }
                                        />

                                        {/* Accounting */}
                                        <Route
                                            path="/accounting"
                                            element={
                                                <Suspense fallback={<ListSkeleton count={4} />}>
                                                    <Accounting />
                                                </Suspense>
                                            }
                                        />

                                        {/* AI Routes */}
                                        <Route
                                            path="/ai"
                                            element={
                                                <Suspense fallback={<ListSkeleton count={4} />}>
                                                    <AIDashboard />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/ai/chat"
                                            element={
                                                <Suspense fallback={<ListSkeleton count={3} />}>
                                                    <AIChatPage />
                                                </Suspense>
                                            }
                                        />

                                        {/* Admin Routes */}
                                        {user?.role === 'ADMIN' && (
                                            <Route
                                                path="/admin/users"
                                                element={
                                                    <Suspense fallback={<ListSkeleton count={4} />}>
                                                        <AdminUserManagement />
                                                    </Suspense>
                                                }
                                            />
                                        )}

                                        {/* Customer Routes */}
                                        {(user?.role === 'CUSTOMER' || !user) && (
                                            <>
                                                <Route
                                                    path="/customer/dashboard"
                                                    element={
                                                        <Suspense fallback={<ListSkeleton count={6} />}>
                                                            <CustomerDashboard />
                                                        </Suspense>
                                                    }
                                                />
                                                <Route
                                                    path="/customer/orders"
                                                    element={
                                                        <Suspense fallback={<ListSkeleton count={6} />}>
                                                            <CustomerOrders />
                                                        </Suspense>
                                                    }
                                                />
                                                <Route
                                                    path="/customer/new-order"
                                                    element={
                                                        <Suspense fallback={<ListSkeleton count={3} />}>
                                                            <NewOrderRequest />
                                                        </Suspense>
                                                    }
                                                />
                                            </>
                                        )}

                                        {/* Supplier Routes */}
                                        {user?.role === 'SUPPLIER' && (
                                            <>
                                                <Route
                                                    path="/supplier/dashboard"
                                                    element={
                                                        <Suspense fallback={<ListSkeleton count={6} />}>
                                                            <SupplierDashboard />
                                                        </Suspense>
                                                    }
                                                />
                                                <Route
                                                    path="/supplier/orders"
                                                    element={
                                                        <Suspense fallback={<ListSkeleton count={6} />}>
                                                            <SupplierOrders />
                                                        </Suspense>
                                                    }
                                                />
                                                <Route
                                                    path="/supplier/requests"
                                                    element={
                                                        <Suspense fallback={<ListSkeleton count={6} />}>
                                                            <OrderRequests />
                                                        </Suspense>
                                                    }
                                                />
                                            </>
                                        )}

                                        {/* User Routes */}
                                        <Route
                                            path="/profile"
                                            element={
                                                <Suspense fallback={<ListSkeleton count={3} />}>
                                                    <UserProfile />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/settings"
                                            element={
                                                <Suspense fallback={<ListSkeleton count={3} />}>
                                                    <UserSettings />
                                                </Suspense>
                                            }
                                        />
                                        <Route
                                            path="/about"
                                            element={
                                                <Suspense fallback={<ListSkeleton count={3} />}>
                                                    <About />
                                                </Suspense>
                                            }
                                        />

                                        {/* Default redirect */}
                                        <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
                                    </Routes>
                                </AppLayout>
                            </ProtectedRoute>
                        }
                    />

                    {/* Default redirect */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </ErrorBoundary>
        </BrowserRouter>
    )
}

export default AppRouter

