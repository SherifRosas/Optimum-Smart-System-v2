import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import Toast from '../components/Toast';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
  duration: number;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => number;
  success: (message: string, duration?: number) => number;
  error: (message: string, duration?: number) => number;
  warning: (message: string, duration?: number) => number;
  info: (message: string, duration?: number) => number;
  removeToast: (id: number) => void;
  toasts: ToastItem[];
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info', duration: number = 3000): number => {
    const id = Date.now() + Math.random();
    const newToast: ToastItem = { id, message, type, duration };
    
    setToasts(prev => [...prev, newToast]);
    
    return id;
  }, []);

  const removeToast = useCallback((id: number): void => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const success = useCallback((message: string, duration?: number): number => {
    return showToast(message, 'success', duration);
  }, [showToast]);

  const error = useCallback((message: string, duration?: number): number => {
    return showToast(message, 'error', duration);
  }, [showToast]);

  const warning = useCallback((message: string, duration?: number): number => {
    return showToast(message, 'warning', duration);
  }, [showToast]);

  const info = useCallback((message: string, duration?: number): number => {
    return showToast(message, 'info', duration);
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast, success, error, warning, info, removeToast, toasts }}>
      {children}
      {/* Render ToastContainer here */}
      {toasts.length > 0 && (
        <div className="toast-container">
          {toasts.map((toastItem) => (
            <Toast
              key={toastItem.id}
              message={toastItem.message}
              type={toastItem.type}
              duration={toastItem.duration}
              onClose={() => removeToast(toastItem.id)}
            />
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
};
