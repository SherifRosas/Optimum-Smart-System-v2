import axios from 'axios';

// Use localhost for local development, PythonAnywhere for production
// Updated: Fixed API URL to use correct PythonAnywhere domain (sherifrissas - double 's')
const getApiBaseUrl = () => {
  // Check environment variable first
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // Check if we're in development
  const isLocalhost = window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1' ||
                     window.location.hostname === '';
  
  if (isLocalhost) {
    return 'http://localhost:8000/api';
  }
  
  // Production - use PythonAnywhere (CORRECTED domain name - sherifrissas with double 's')
  return 'https://sherifrissas.pythonanywhere.com/api';
};

const API_BASE_URL = getApiBaseUrl();

// Log API URL for debugging (only in development, and only once)
// Commented out to reduce console noise - uncomment if needed for debugging
// if (process.env.NODE_ENV === 'development' && !window.__API_URL_LOGGED__) {
//   console.log('API Base URL:', API_BASE_URL);
//   window.__API_URL_LOGGED__ = true;
// }

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      // Try to refresh token
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken && !error.config._retry) {
        error.config._retry = true;
        try {
          const response = await axios.post(`${API_BASE_URL}/auth/token/refresh/`, {
            refresh: refreshToken,
          });
          const { access } = response.data;
          localStorage.setItem('access_token', access);
          error.config.headers.Authorization = `Bearer ${access}`;
          return api(error.config);
        } catch (refreshError) {
          // Refresh failed, logout user
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user');
          if (window.location.pathname !== '/login') {
            window.location.href = '/login';
          }
        }
      } else {
        // No refresh token or already retried, logout
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const ordersAPI = {
  // Get all orders
  getOrders: (params = {}) => api.get('/orders/', { params }),
  
  // Get single order
  getOrder: (id) => api.get(`/orders/${id}/`),
  
  // Create new order
  createOrder: (orderData) => api.post('/orders/', orderData),
  
  // Update order
  updateOrder: (id, orderData) => api.patch(`/orders/${id}/`, orderData),
  
  // Update order status
  updateOrderStatus: (id, status) => api.patch(`/orders/${id}/update_status/`, { status }),
  
  // Send message for order
  sendMessage: (id, messageData) => api.post(`/orders/${id}/send_message/`, messageData),
  
  // Get dashboard stats
  getDashboardStats: () => api.get('/orders/dashboard_stats/'),
  
  // Get recent orders
  getRecentOrders: (limit = 5) => api.get('/orders/recent_orders/', { params: { limit } }),
};

export const customersAPI = {
  // Get all customers
  getCustomers: (params = {}) => api.get('/customers/', { params }),
  
  // Get single customer
  getCustomer: (id) => api.get(`/customers/${id}/`),
  
  // Create new customer
  createCustomer: (customerData) => api.post('/customers/', customerData),
  
  // Update customer
  updateCustomer: (id, customerData) => api.patch(`/customers/${id}/`, customerData),
  
  // Search customers
  searchCustomers: (query) => api.get('/customers/search/', { params: { q: query } }),
};

export const suppliersAPI = {
  // Get all suppliers
  getSuppliers: (params = {}) => api.get('/suppliers/', { params }),
  
  // Get single supplier
  getSupplier: (id) => api.get(`/suppliers/${id}/`),
  
  // Create new supplier
  createSupplier: (supplierData) => api.post('/suppliers/', supplierData),
  
  // Update supplier
  updateSupplier: (id, supplierData) => api.patch(`/suppliers/${id}/`, supplierData),
  
  // Get top rated suppliers
  getTopRatedSuppliers: (limit = 5) => api.get('/suppliers/top_rated/', { params: { limit } }),
  
  // Search suppliers
  searchSuppliers: (query) => api.get('/suppliers/search/', { params: { q: query } }),
};

export const aiAPI = {
  // Get AI dashboard data
  getDashboardData: () => api.get('/ai/dashboard-data/'),
  
  // Analyze order text
  analyzeOrderText: (orderText, orderId = null) => {
    const data = { order_text: orderText };
    if (orderId) data.order_id = orderId;
    return api.post('/ai/analyze/', data);
  },
  
  // Analyze uploaded file
  analyzeFile: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/ai/analyze-file/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  // Get order recommendations
  getOrderRecommendations: (orderId) => api.get(`/ai/recommendations/${orderId}/`),
  
  // Chat endpoints
  chat: (message, sessionId = null, context = {}) => {
    const data = { message, context };
    if (sessionId) data.session_id = sessionId;
    return api.post('/ai/chat/', data);
  },
  
  getChatHistory: (sessionId) => api.get(`/ai/chat/history/${sessionId}/`),
  
  clearChat: (sessionId) => api.post('/ai/chat/clear/', { session_id: sessionId }),
  
  // Smart features
  getSmartSuggestions: () => api.get('/ai/smart-suggestions/'),
  
  getPredictiveAlerts: () => api.get('/ai/predictive-alerts/'),
  
  // Analyze sentiment
  analyzeSentiment: (messages, orderId = null) => {
    const data = { messages };
    if (orderId) data.order_id = orderId;
    return api.post('/ai/analyze-sentiment/', data);
  },
  
  // Get demand predictions
  getDemandPredictions: () => api.get('/ai/demand-predictions/'),
  
  // Get business insights
  getBusinessInsights: () => api.get('/ai/business-insights/'),
  
  // Get supported file types
  getSupportedFileTypes: () => api.get('/ai/supported-file-types/'),
};

// Export API_BASE_URL for components that need it
export { API_BASE_URL };

export default api;
