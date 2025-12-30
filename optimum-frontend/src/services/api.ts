import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { API_CONFIG } from '@/config/api';
import type { ApiResponse } from '@/types';

/**
 * Create axios instance with default configuration
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request interceptor - Add auth token to requests
 */
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Response interceptor - Handle token refresh and errors
 */
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ApiResponse<unknown>>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Handle 401 Unauthorized - Try to refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        const response = await axios.post<{ access: string }>(
          `${API_CONFIG.baseURL}/auth/refresh/`,
          { refresh: refreshToken }
        );

        const { access } = response.data;
        localStorage.setItem('access_token', access);

        // Retry original request with new token
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${access}`;
        }
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Refresh failed - clear tokens and redirect to login
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

/**
 * API Service - Wrapper for common API operations
 */
export const apiService = {
  get: <T>(url: string, config?: InternalAxiosRequestConfig) =>
    apiClient.get<ApiResponse<T>>(url, config).then((res) => res.data),

  post: <T>(url: string, data?: unknown, config?: InternalAxiosRequestConfig) =>
    apiClient.post<ApiResponse<T>>(url, data, config).then((res) => res.data),

  put: <T>(url: string, data?: unknown, config?: InternalAxiosRequestConfig) =>
    apiClient.put<ApiResponse<T>>(url, data, config).then((res) => res.data),

  patch: <T>(url: string, data?: unknown, config?: InternalAxiosRequestConfig) =>
    apiClient.patch<ApiResponse<T>>(url, data, config).then((res) => res.data),

  delete: <T>(url: string, config?: InternalAxiosRequestConfig) =>
    apiClient.delete<ApiResponse<T>>(url, config).then((res) => res.data),
};

export default apiClient;

/**
 * Compatibility exports for legacy JavaScript components
 * These provide the same API structure as the old api.js file
 */
export const ordersAPI = {
  getOrders: (params = {}) => apiClient.get('/orders/', { params }),
  getOrder: (id: string | number) => apiClient.get(`/orders/${id}/`),
  createOrder: (orderData: unknown) => apiClient.post('/orders/', orderData),
  updateOrder: (id: string | number, orderData: unknown) => 
    apiClient.patch(`/orders/${id}/`, orderData),
  updateOrderStatus: (id: string | number, status: string) => 
    apiClient.patch(`/orders/${id}/update_status/`, { status }),
  sendMessage: (id: string | number, messageData: unknown) => 
    apiClient.post(`/orders/${id}/send_message/`, messageData),
  getDashboardStats: () => apiClient.get('/orders/dashboard_stats/'),
  getRecentOrders: (limit = 5) => 
    apiClient.get('/orders/recent_orders/', { params: { limit } }),
};

export const customersAPI = {
  getCustomers: (params = {}) => apiClient.get('/customers/', { params }),
  getCustomer: (id: string | number) => apiClient.get(`/customers/${id}/`),
  createCustomer: (customerData: unknown) => apiClient.post('/customers/', customerData),
  updateCustomer: (id: string | number, customerData: unknown) => 
    apiClient.patch(`/customers/${id}/`, customerData),
  searchCustomers: (query: string) => 
    apiClient.get('/customers/search/', { params: { q: query } }),
};

export const suppliersAPI = {
  getSuppliers: (params = {}) => apiClient.get('/suppliers/', { params }),
  getSupplier: (id: string | number) => apiClient.get(`/suppliers/${id}/`),
  createSupplier: (supplierData: unknown) => apiClient.post('/suppliers/', supplierData),
  updateSupplier: (id: string | number, supplierData: unknown) => 
    apiClient.patch(`/suppliers/${id}/`, supplierData),
  getTopRatedSuppliers: (limit = 5) => 
    apiClient.get('/suppliers/top_rated/', { params: { limit } }),
  searchSuppliers: (query: string) => 
    apiClient.get('/suppliers/search/', { params: { q: query } }),
};

export const aiAPI = {
  getDashboardData: () => apiClient.get('/ai/dashboard-data/'),
  analyzeOrderText: (orderText: string, orderId: string | number | null = null) => {
    const data: { order_text: string; order_id?: string | number } = { order_text: orderText };
    if (orderId) data.order_id = orderId;
    return apiClient.post('/ai/analyze/', data);
  },
  analyzeFile: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return apiClient.post('/ai/analyze-file/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  getOrderRecommendations: (orderId: string | number) => 
    apiClient.get(`/ai/recommendations/${orderId}/`),
  chat: (message: string, sessionId: string | null = null, context: Record<string, unknown> = {}) => {
    const data: { message: string; context: Record<string, unknown>; session_id?: string } = 
      { message, context };
    if (sessionId) data.session_id = sessionId;
    return apiClient.post('/ai/chat/', data);
  },
  getChatHistory: (sessionId: string) => apiClient.get(`/ai/chat/history/${sessionId}/`),
  clearChat: (sessionId: string) => apiClient.post('/ai/chat/clear/', { session_id: sessionId }),
  getSmartSuggestions: () => apiClient.get('/ai/smart-suggestions/'),
  getPredictiveAlerts: () => apiClient.get('/ai/predictive-alerts/'),
  analyzeSentiment: (messages: unknown[], orderId: string | number | null = null) => {
    const data: { messages: unknown[]; order_id?: string | number } = { messages };
    if (orderId) data.order_id = orderId;
    return apiClient.post('/ai/analyze-sentiment/', data);
  },
  getDemandPredictions: () => apiClient.get('/ai/demand-predictions/'),
  getBusinessInsights: () => apiClient.get('/ai/business-insights/'),
  getSupportedFileTypes: () => apiClient.get('/ai/supported-file-types/'),
};


