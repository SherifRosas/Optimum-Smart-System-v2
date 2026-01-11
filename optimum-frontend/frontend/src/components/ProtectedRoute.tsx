import { useAuth } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Login from './Login';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading, user, getUserRole } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  // Check if profile completion is needed
  const role = getUserRole();
  const isProfileIncomplete = (role === 'SUPPLIER' || role === 'PRODUCT_REQUESTER' || role === 'CUSTOMER') &&
    (!user?.phone || !user?.address);

  if (isProfileIncomplete && location.pathname !== '/profile-completion') {
    return <Navigate to="/profile-completion" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
