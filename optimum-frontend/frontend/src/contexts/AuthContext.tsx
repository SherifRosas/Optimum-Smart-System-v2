import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { authService } from '../services/authAPI';
import { User, UserProfile } from '../types';

interface AuthContextType {
  user: (User & Partial<UserProfile>) | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (userData: {
    username: string;
    email: string;
    password: string;
    password2: string;
    first_name?: string;
    last_name?: string;
  }) => Promise<{ success: boolean; errors?: Record<string, string[]> }>;
  logout: () => Promise<void>;
  updateProfile: (profileData: Record<string, unknown>) => Promise<{ success: boolean; errors?: Record<string, string[]> }>;
  getUserRole: () => string | null;
  isAdmin: () => boolean;
  isSupplier: () => boolean;
  isCustomer: () => boolean;
  isMainAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<(User & Partial<UserProfile>) | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = async (): Promise<void> => {
      try {
        if (authService.isAuthenticated()) {
          const currentUser = authService.getCurrentUser();
          if (currentUser) {
            setUser(currentUser);
            setIsAuthenticated(true);
            
            // Optionally refresh profile from server
            try {
              const profileData = await authService.getProfile();
              if (profileData.success && profileData.user) {
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

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
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
      return { success: false, error: (response as { error?: string }).error || 'Login failed' };
    } catch (error) {
      console.error('AuthContext: Login error:', error);
      const err = error as { response?: { data?: { error?: string; detail?: string } }; message?: string };
      console.error('AuthContext: Error response data:', err.response?.data);
      return {
        success: false,
        error: err.response?.data?.error || err.response?.data?.detail || err.message || 'Login failed',
      };
    }
  };

  const register = async (userData: {
    username: string;
    email: string;
    password: string;
    password2: string;
    first_name?: string;
    last_name?: string;
  }): Promise<{ success: boolean; errors?: Record<string, string[]> }> => {
    try {
      const response = await authService.register(userData);
      if (response.success) {
        const user = response.user;
        setUser(user);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true };
      }
      return { success: false, errors: (response as { errors?: Record<string, string[]> }).errors || {} };
    } catch (error) {
      const err = error as { response?: { data?: { errors?: Record<string, string[]> } }; message?: string };
      return {
        success: false,
        errors: err.response?.data?.errors || { general: [err.message || 'Registration failed'] },
      };
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const updateProfile = async (profileData: Record<string, unknown>): Promise<{ success: boolean; errors?: Record<string, string[]> }> => {
    try {
      const response = await authService.updateProfile(profileData);
      if (response.success && response.user) {
        setUser(response.user);
        localStorage.setItem('user', JSON.stringify(response.user));
        return { success: true };
      }
      return { success: false, errors: response.errors || {} };
    } catch (error) {
      const err = error as { response?: { data?: { errors?: Record<string, string[]> } }; message?: string };
      return {
        success: false,
        errors: err.response?.data?.errors || { general: [err.message || 'Update failed'] },
      };
    }
  };

  // Role helper functions
  const getUserRole = (): string | null => {
    if (!user) return null;
    return (user as { role?: string; profile?: { role?: string } }).role || (user as { profile?: { role?: string } }).profile?.role || 'PRODUCT_REQUESTER';
  };

  const isAdmin = (): boolean => {
    const role = getUserRole();
    return role === 'ADMIN' || role === 'SUB_ADMIN';
  };

  const isSupplier = (): boolean => {
    const role = getUserRole();
    return role === 'SUPPLIER';
  };

  const isCustomer = (): boolean => {
    const role = getUserRole();
    return role === 'PRODUCT_REQUESTER';
  };

  const isMainAdmin = (): boolean => {
    if (!user) return false;
    const email = ((user as { email?: string }).email || '').toLowerCase();
    return email === 'sherifrosas.ai@gmail.com';
  };

  const value: AuthContextType = {
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




