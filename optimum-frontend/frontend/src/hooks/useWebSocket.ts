import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { API_CONFIG } from '@/config/api';
import { useAuthStore } from '@/stores/authStore';

interface UseWebSocketOptions {
  enabled?: boolean;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: Error) => void;
}

/**
 * WebSocket Hook
 * Manages Socket.IO connection for real-time updates
 */
export function useWebSocket(
  eventHandlers: Record<string, (data: unknown) => void> = {},
  options: UseWebSocketOptions = {}
) {
  const { enabled = true, onConnect, onDisconnect, onError } = options;
  const socketRef = useRef<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!enabled || !isAuthenticated) {
      return;
    }

    // Create socket connection
    const socket = io(API_CONFIG.wsURL, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
      auth: {
        token: localStorage.getItem('access_token'),
      },
    });

    socketRef.current = socket;

    // Connection events
    socket.on('connect', () => {
      setIsConnected(true);
      onConnect?.();
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      onDisconnect?.();
    });

    socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
      onError?.(error);
    });

    // Register event handlers
    Object.entries(eventHandlers).forEach(([event, handler]) => {
      socket.on(event, handler);
    });

    // Cleanup
    return () => {
      Object.keys(eventHandlers).forEach((event) => {
        socket.off(event);
      });
      socket.disconnect();
      socketRef.current = null;
    };
  }, [enabled, isAuthenticated, onConnect, onDisconnect, onError]);

  // Emit function
  const emit = (event: string, data: unknown) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit(event, data);
    }
  };

  return {
    socket: socketRef.current,
    isConnected,
    emit,
  };
}


