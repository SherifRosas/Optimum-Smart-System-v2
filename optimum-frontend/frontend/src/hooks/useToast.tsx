import React, { useState, useCallback, useMemo, ReactNode } from 'react';
import Toast from '../components/Toast';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
  duration: number;
}

export const useToast = () => {
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

  const ToastContainer = useCallback((): ReactNode => {
    if (toasts.length === 0) return null;
    return (
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
    ) as ReactNode;
  }, [toasts, removeToast]);

  // Memoize the return object to prevent unnecessary re-renders
  return useMemo(() => ({
    showToast,
    success,
    error,
    warning,
    info,
    removeToast,
    ToastContainer
  }), [showToast, success, error, warning, info, removeToast, ToastContainer]);
};




