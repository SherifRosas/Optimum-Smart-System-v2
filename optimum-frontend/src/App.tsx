import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ReactQueryProvider } from '@/lib/react-query';
import { useAuthStore } from '@/stores/authStore';
import { useUIStore } from '@/stores/uiStore';
import { ToastContainer } from '@/components/ui/Toast';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Login } from '@/components/Auth/Login';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

// Lazy load components for code splitting
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('@/components/Dashboard/Dashboard').then(m => ({ default: m.Dashboard })));
const Orders = lazy(() => import('@/components/Orders/Orders').then(m => ({ default: m.Orders })));

function AppContent() {
  const { loadUser, isLoading, isAuthenticated } = useAuthStore();
  const { theme } = useUIStore();

  useEffect(() => {
    console.log('AppContent: Loading user...');
    // Load user on mount
    loadUser().catch((error) => {
      console.error('Failed to load user:', error);
    });

    // Apply theme
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [loadUser, theme]);

  console.log('AppContent render', { isLoading, isAuthenticated });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center" style={{ backgroundColor: '#ffffff', zIndex: 9999 }}>
        <LoadingSpinner size="lg" />
        <p style={{ marginLeft: '10px', color: '#000000' }}>Loading app...</p>
      </div>
    );
  }

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Suspense fallback={
                <div style={{ 
                  position: 'fixed', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  bottom: 0, 
                  backgroundColor: '#ffffff', 
                  zIndex: 99999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}>
                  <LoadingSpinner size="lg" />
                  <p style={{ marginTop: '20px', color: '#000000', fontSize: '18px' }}>
                    Loading Dashboard...
                  </p>
                </div>
              }>
                <Dashboard />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner size="lg" />}>
                <Orders />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/app" replace />} />
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

function App() {
  return (
    <ReactQueryProvider>
      <AppContent />
    </ReactQueryProvider>
  );
}

export default App;


