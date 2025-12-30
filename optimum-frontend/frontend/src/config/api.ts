/**
 * API Configuration
 * Centralized configuration for API endpoints and settings
 */

export const API_CONFIG = {
  // Base URL - auto-detect in production, use env var if set
  baseURL: import.meta.env.VITE_API_URL || 
    (import.meta.env.PROD 
      ? 'https://sherifrosas.pythonanywhere.com/api'
      : 'http://localhost:8000/api'),
  
  // WebSocket URL
  wsURL: import.meta.env.VITE_WS_URL ||
    (import.meta.env.PROD
      ? 'wss://sherifrosas.pythonanywhere.com/ws'
      : 'ws://localhost:8000/ws'),
  
  // Timeouts
  timeout: 30000,
  
  // Retry configuration
  retry: {
    attempts: 3,
    delay: 1000,
  },
} as const;

export default API_CONFIG;


