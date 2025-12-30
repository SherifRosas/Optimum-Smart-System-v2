import { useState, useCallback, useMemo } from 'react';
import Toast from '../components/Toast';

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now() + Math.random();
    const newToast = { id, message, type, duration };
    
    setToasts(prev => [...prev, newToast]);
    
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const success = useCallback((message, duration) => {
    return showToast(message, 'success', duration);
  }, [showToast]);

  const error = useCallback((message, duration) => {
    return showToast(message, 'error', duration);
  }, [showToast]);

  const warning = useCallback((message, duration) => {
    return showToast(message, 'warning', duration);
  }, [showToast]);

  const info = useCallback((message, duration) => {
    return showToast(message, 'info', duration);
  }, [showToast]);

  const ToastContainer = useCallback(() => {
    if (toasts.length === 0) return null;
    return (
      <div className="toast-container">
        {toasts.map(toastItem => (
          <Toast
            key={toastItem.id}
            message={toastItem.message}
            type={toastItem.type}
            duration={toastItem.duration}
            onClose={() => removeToast(toastItem.id)}
          />
        ))}
      </div>
    );
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

