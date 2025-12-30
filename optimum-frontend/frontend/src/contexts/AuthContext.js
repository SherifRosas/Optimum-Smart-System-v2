import React, { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../services/authAPI';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = async () => {
      try {
        if (authService.isAuthenticated()) {
          const currentUser = authService.getCurrentUser();
          if (currentUser) {
            setUser(currentUser);
            setIsAuthenticated(true);
            
            // Optionally refresh profile from server
            try {
              const profileData = await authService.getProfile();
              if (profileData.success) {
                setUser(profileData.user);
                localStorage.setItem('user', JSON.stringify(profileData.user));
              }
            } catch (error) {
              console.error('Error fetching profile:', error);
            }
          }
        }
      } catch (error) {
        console.error('Auth check error:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (username, password) => {
    try {
      console.log('AuthContext: Calling authService.login');
      const response = await authService.login(username, password);
      console.log('AuthContext: Login response:', response);
      if (response && response.success) {
        const userData = { ...response.user, ...response.profile };
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
        return { success: true };
      }
      return { success: false, error: response?.error || 'Login failed' };
    } catch (error) {
      console.error('AuthContext: Login error:', error);
      console.error('AuthContext: Error response data:', error.response?.data);
      return {
        success: false,
        error: error.response?.data?.error || error.response?.data?.detail || error.message || 'Login failed',
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      if (response.success) {
        const user = response.user;
        setUser(user);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true };
      }
      return { success: false, errors: response.errors || {} };
    } catch (error) {
      return {
        success: false,
        errors: error.response?.data?.errors || { general: error.message },
      };
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const response = await authService.updateProfile(profileData);
      if (response.success) {
        setUser(response.user);
        localStorage.setItem('user', JSON.stringify(response.user));
        return { success: true };
      }
      return { success: false, errors: response.errors || {} };
    } catch (error) {
      return {
        success: false,
        errors: error.response?.data?.errors || { general: error.message },
      };
    }
  };

  // Role helper functions
  const getUserRole = () => {
    if (!user) return null;
    return user.role || user.profile?.role || 'PRODUCT_REQUESTER';
  };

  const isAdmin = () => {
    const role = getUserRole();
    return role === 'ADMIN' || role === 'SUB_ADMIN';
  };

  const isSupplier = () => {
    const role = getUserRole();
    return role === 'SUPPLIER';
  };

  const isCustomer = () => {
    const role = getUserRole();
    return role === 'PRODUCT_REQUESTER';
  };

  const isMainAdmin = () => {
    if (!user) return false;
    const email = (user.email || '').toLowerCase();
    return email === 'sherifrosas.ai@gmail.com';
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
    // Role helpers
    getUserRole,
    isAdmin,
    isSupplier,
    isCustomer,
    isMainAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

