import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { User, UserProfile, AuthResponse } from '../types';

// Use localhost for local development, PythonAnywhere for production
const getApiBaseUrl = (): string => {
  // Check Vite environment variable first
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Check if we're in development
  const isLocalhost = window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1' ||
                     window.location.hostname === '';
  
  if (isLocalhost) {
    return 'http://localhost:8000/api';
  }
  
  // Production - use PythonAnywhere with HTTPS
  return 'https://sherifrissas.pythonanywhere.com/api';
};

const API_BASE_URL = getApiBaseUrl();

// Create axios instance for auth
const authAPI: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
authAPI.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('access_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token refresh on 401
authAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          const response = await axios.post<{ access: string }>(`${getApiBaseUrl()}/auth/token/refresh/`, {
            refresh: refreshToken,
          });

          const { access } = response.data;
          localStorage.setItem('access_token', access);
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${access}`;
          }

          return authAPI(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, logout user
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

interface RegisterData {
  username: string;
  email: string;
  password: string;
  password2: string;
  first_name?: string;
  last_name?: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface ProfileUpdateData {
  phone_number?: string;
  company_name?: string;
  address?: string;
  [key: string]: unknown;
}

interface UserCreateData {
  username: string;
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  role?: string;
}

export const authService = {
  // Register new user
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    const response = await authAPI.post<AuthResponse>('/auth/register/', userData);
    if (response.data.success) {
      const { tokens, user } = response.data;
      localStorage.setItem('access_token', tokens.access);
      localStorage.setItem('refresh_token', tokens.refresh);
      localStorage.setItem('user', JSON.stringify(user));
    }
    return response.data;
  },

  // Login user
  login: async (username: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await authAPI.post<AuthResponse>('/auth/login/', { username, password });
      console.log('Login API response:', response.data);
      if (response.data.success) {
        const { tokens, user, profile } = response.data;
        localStorage.setItem('access_token', tokens.access);
        localStorage.setItem('refresh_token', tokens.refresh);
        localStorage.setItem('user', JSON.stringify({ ...user, ...profile }));
      }
      return response.data;
    } catch (error) {
      console.error('Login API error:', error);
      console.error('Error response:', (error as { response?: { data?: unknown } }).response?.data);
      throw error;
    }
  },

  // Logout user
  logout: async (): Promise<void> => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken) {
      try {
        await authAPI.post('/auth/logout/', { refresh_token: refreshToken });
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  },

  // Get current user profile
  getProfile: async (): Promise<{ success: boolean; user?: User & UserProfile; errors?: Record<string, string[]> }> => {
    const response = await authAPI.get<{ success: boolean; user?: User & UserProfile; errors?: Record<string, string[]> }>('/auth/profile/');
    return response.data;
  },

  // Update user profile
  updateProfile: async (profileData: ProfileUpdateData): Promise<{ success: boolean; user?: User & UserProfile; errors?: Record<string, string[]> }> => {
    const response = await authAPI.put<{ success: boolean; user?: User & UserProfile; errors?: Record<string, string[]> }>('/auth/profile/update/', profileData);
    if (response.data.success) {
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      localStorage.setItem('user', JSON.stringify({ ...userData, ...response.data.user }));
    }
    return response.data;
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('access_token');
  },

  // Get current user from localStorage
  getCurrentUser: (): (User & Partial<UserProfile>) | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Admin: List all users
  listUsers: async (): Promise<{ success: boolean; users?: User[]; errors?: Record<string, string[]> }> => {
    const response = await authAPI.get<{ success: boolean; users?: User[]; errors?: Record<string, string[]> }>('/auth/admin/users/');
    return response.data;
  },

  // Admin: Create new user
  createUser: async (userData: UserCreateData): Promise<{ success: boolean; user?: User; errors?: Record<string, string[]> }> => {
    const response = await authAPI.post<{ success: boolean; user?: User; errors?: Record<string, string[]> }>('/auth/admin/users/create/', userData);
    return response.data;
  },

  // Admin: Update user
  updateUser: async (userId: number, userData: Partial<UserCreateData>): Promise<{ success: boolean; user?: User; errors?: Record<string, string[]> }> => {
    const response = await authAPI.patch<{ success: boolean; user?: User; errors?: Record<string, string[]> }>(`/auth/admin/users/${userId}/update/`, userData);
    return response.data;
  },
};

export default authService;



