import { create } from 'zustand';
import type { Toast } from '@/types';

interface UIState {
  // Sidebar state
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;

  // Theme state
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;

  // Toast notifications
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;

  // Loading states
  globalLoading: boolean;
  setGlobalLoading: (loading: boolean) => void;

  // Modal states
  modals: Record<string, boolean>;
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
}

/**
 * UI Store
 * Manages UI state like sidebar, theme, toasts, etc.
 */
export const useUIStore = create<UIState>((set, get) => ({
  // Sidebar
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  // Theme
  theme: (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system',
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    set({ theme });
    
    // Apply theme to document
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  // Toasts
  toasts: [],
  addToast: (toast) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const newToast: Toast = {
      id,
      duration: 5000,
      variant: 'default',
      ...toast,
    };
    
    set((state) => ({ toasts: [...state.toasts, newToast] }));
    
    // Auto remove after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        get().removeToast(id);
      }, newToast.duration);
    }
  },
  removeToast: (id) => {
    set((state) => ({ 
      toasts: state.toasts.filter((toast) => toast.id !== id) 
    }));
  },

  // Global loading
  globalLoading: false,
  setGlobalLoading: (loading) => set({ globalLoading: loading }),

  // Modals
  modals: {},
  openModal: (id) => set((state) => ({ 
    modals: { ...state.modals, [id]: true } 
  })),
  closeModal: (id) => set((state) => ({ 
    modals: { ...state.modals, [id]: false } 
  })),
}));


