import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, UserProfile } from '@/types';
import { authService } from '@/services/authService';

interface AuthState {
  user: (User & { profile?: UserProfile }) | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setUser: (user: (User & { profile?: UserProfile }) | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loadUser: () => Promise<void>;
  clearError: () => void;
}

/**
 * Authentication Store
 * Manages authentication state using Zustand with persistence
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      setUser: (user) => {
        set({ 
          user, 
          isAuthenticated: !!user,
          error: null 
        });
      },

      setLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error }),

      login: async (username: string, password: string) => {
        set({ isLoading: true, error: null });
        
        try {
          const response = await authService.login({ username, password });
          
          // Check if login was successful (response has tokens or success flag)
          if (response.tokens || response.success) {
            const user = authService.getStoredUser();
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false,
              error: null 
            });
          } else {
            throw new Error('Login failed: Invalid response format');
          }
        } catch (error) {
          const errorMessage = error instanceof Error 
            ? error.message 
            : 'An error occurred during login';
          set({ 
            error: errorMessage, 
            isLoading: false,
            isAuthenticated: false 
          });
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true });
        
        try {
          await authService.logout();
        } catch (error) {
          console.error('Logout error:', error);
        } finally {
          set({ 
            user: null, 
            isAuthenticated: false, 
            isLoading: false,
            error: null 
          });
        }
      },

      loadUser: async () => {
        set({ isLoading: true });
        
        try {
          const storedUser = authService.getStoredUser();
          
          if (storedUser && authService.isAuthenticated()) {
            try {
              // Verify token is still valid by fetching profile
              const { user, profile } = await authService.getProfile();
              set({ 
                user: { ...user, profile }, 
                isAuthenticated: true, 
                isLoading: false,
                error: null 
              });
            } catch (profileError) {
              // Profile fetch failed - token invalid
              console.warn('Profile fetch failed, clearing auth:', profileError);
              localStorage.removeItem('access_token');
              localStorage.removeItem('refresh_token');
              localStorage.removeItem('user');
              set({ 
                user: null, 
                isAuthenticated: false, 
                isLoading: false,
                error: null 
              });
            }
          } else {
            // No stored user or token
            set({ 
              user: null, 
              isAuthenticated: false, 
              isLoading: false 
            });
          }
        } catch (error) {
          // Unexpected error
          console.error('Error loading user:', error);
          set({ 
            user: null, 
            isAuthenticated: false, 
            isLoading: false,
            error: null 
          });
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user,
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);


