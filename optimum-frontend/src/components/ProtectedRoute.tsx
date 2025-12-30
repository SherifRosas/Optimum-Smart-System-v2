import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { LoadingSpinner } from './ui/LoadingSpinner';
import type { UserProfile } from '@/types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  roles?: UserProfile['role'][];
}

export function ProtectedRoute({ children, roles }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuthStore();
  const location = useLocation();

  // Debug logging
  console.log('ProtectedRoute check', { isAuthenticated, isLoading, user, roles });

  if (isLoading) {
    console.log('ProtectedRoute: Showing loading spinner');
    return (
      <div className="flex h-screen items-center justify-center" style={{ backgroundColor: '#ffffff', zIndex: 9998 }}>
        <LoadingSpinner size="lg" />
        <p style={{ marginLeft: '10px', color: '#000000' }}>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('ProtectedRoute: Not authenticated, redirecting to login');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles && user?.profile && !roles.includes(user.profile.role)) {
    console.log('ProtectedRoute: Role check failed');
    return <Navigate to="/unauthorized" replace />;
  }

  console.log('ProtectedRoute: Rendering children');
  return <>{children}</>;
}


