import { apiService } from './api';
import type { AuthResponse, User, UserProfile } from '@/types';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  role?: UserProfile['role'];
}

/**
 * Authentication Service
 * Handles all authentication-related API calls
 */
export const authService = {
  /**
   * Login user
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await apiService.post<any>('/auth/login/', credentials);
    
    // Backend returns: { success, user, profile, tokens }
    // Handle both wrapped (response.data) and direct response formats
    const authData = (response as any).data || response;
    
    // Check if login was successful
    if (authData.success && authData.tokens && authData.user) {
      const { tokens, user, profile } = authData;
      
      // Store tokens and user data
      localStorage.setItem('access_token', tokens.access);
      localStorage.setItem('refresh_token', tokens.refresh);
      localStorage.setItem('user', JSON.stringify({ ...user, profile }));
      
      return {
        success: true,
        tokens,
        user,
        profile,
      } as AuthResponse;
    }
    
    // If response indicates failure
    if (authData.success === false) {
      throw new Error(authData.error || 'Login failed');
    }
    
    // Fallback: try to extract data anyway
    if (authData.tokens && authData.user) {
      const { tokens, user, profile } = authData;
      localStorage.setItem('access_token', tokens.access);
      localStorage.setItem('refresh_token', tokens.refresh);
      localStorage.setItem('user', JSON.stringify({ ...user, profile }));
      
      return {
        success: true,
        tokens,
        user,
        profile,
      } as AuthResponse;
    }
    
    throw new Error('Invalid login response format');
  },

  /**
   * Register new user
   */
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await apiService.post<AuthResponse>('/auth/register/', data);
    
    if (response.success && response.data) {
      const { tokens, user, profile } = response.data;
      
      // Store tokens and user data
      localStorage.setItem('access_token', tokens.access);
      localStorage.setItem('refresh_token', tokens.refresh);
      localStorage.setItem('user', JSON.stringify({ ...user, profile }));
    }
    
    return response.data || response;
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    const refreshToken = localStorage.getItem('refresh_token');
    
    if (refreshToken) {
      try {
        await apiService.post('/auth/logout/', { refresh_token: refreshToken });
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
    
    // Clear local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  },

  /**
   * Get current user profile
   */
  getProfile: async (): Promise<{ user: User; profile: UserProfile }> => {
    try {
      const response = await apiService.get<{ user: User; profile: UserProfile }>('/auth/profile/');
      return response.data || response;
    } catch (error) {
      // If profile fetch fails, clear tokens
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      throw error;
    }
  },

  /**
   * Update user profile
   */
  updateProfile: async (data: Partial<UserProfile>): Promise<UserProfile> => {
    const response = await apiService.patch<UserProfile>('/auth/profile/', data);
    return response.data || response;
  },

  /**
   * Refresh access token
   */
  refreshToken: async (): Promise<string> => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await apiService.post<{ access: string }>('/auth/refresh/', {
      refresh: refreshToken,
    });

    const { access } = response.data || response;
    localStorage.setItem('access_token', access);
    return access;
  },

  /**
   * Get stored user data
   */
  getStoredUser: (): (User & { profile?: UserProfile }) | null => {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;
    
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('access_token');
  },
};


