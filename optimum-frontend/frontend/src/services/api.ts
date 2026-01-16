import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Types
interface ApiParams {
  [key: string]: string | number | boolean | undefined;
}

interface OrderData {
  // For creating orders, customer can be an object (auto-creates customer) or customer_id
  customer?: {
    name: string;
    phone_number: string;
    email?: string;
    address?: string;
  };
  customer_id?: number;
  supplier_id?: number | null;
  product_type: string;
  quantity: number;
  unit_price: string | number;
  delivery_date: string;
  status?: string;
  notes?: string;
}

interface CustomerData {
  name: string;
  phone_number: string;
  email?: string;
  address?: string;
}

interface SupplierData {
  name: string;
  contact_person: string;
  email: string;
  phone_number: string;
  address: string;
  rating?: number;
  is_active?: boolean;
}

// Use localhost for local development, PythonAnywhere for production
const getApiBaseUrl = (): string => {
  // Check environment variable first
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

  // Production - use PythonAnywhere
  return 'https://sherifrissas.pythonanywhere.com/api';
};

const API_BASE_URL = getApiBaseUrl();

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: any) => {
    // Add auth token if available
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

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      // Try to refresh token
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken && !error.config._retry) {
        error.config._retry = true;
        try {
          const response = await axios.post<{ access: string }>(`${API_BASE_URL}/auth/token/refresh/`, {
            refresh: refreshToken,
          });
          const { access } = response.data;
          localStorage.setItem('access_token', access);
          if (error.config.headers) {
            error.config.headers.Authorization = `Bearer ${access}`;
          }
          return api(error.config);
        } catch (refreshError) {
          // Refresh failed, silently clear tokens if on public pages
          const isPublicPage = window.location.pathname === '/' ||
            window.location.pathname === '/login' ||
            window.location.pathname === '/signup';

          if (!isPublicPage) {
            // Only redirect to login if not already on a public page
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user');
            if (window.location.pathname !== '/login') {
              window.location.href = '/login';
            }
          }
        }
      } else {
        // No refresh token or already retried
        // Only clear tokens and redirect if not on a public page
        const isPublicPage = window.location.pathname === '/' ||
          window.location.pathname === '/login' ||
          window.location.pathname === '/signup';

        if (!isPublicPage) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user');
          if (window.location.pathname !== '/login') {
            window.location.href = '/login';
          }
        }
      }
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const ordersAPI = {
  // Get all orders
  getOrders: (params: ApiParams = {}) => api.get('/orders/', { params }),

  // Get single order
  getOrder: (id: number | string) => api.get(`/orders/${id}/`),

  // Create new order
  createOrder: (orderData: OrderData) => api.post('/orders/', orderData),

  // Update order
  updateOrder: (id: number | string, orderData: Partial<OrderData>) => api.patch(`/orders/${id}/`, orderData),

  // Update order status
  updateOrderStatus: (id: number | string, status: string) => api.patch(`/orders/${id}/update_status/`, { status }),

  // Supplier confirms AI offer
  confirmOffer: (id: number | string) => api.post(`/orders/${id}/confirm_offer/`),

  // Customer confirms receipt
  confirmReceipt: (id: number | string, feedback: string) => api.post(`/orders/${id}/confirm_receipt/`, { feedback }),

  // Send message for order
  sendMessage: (id: number | string, messageData: { content: string; type?: string; sender?: string }) =>
    api.post(`/orders/${id}/send_message/`, messageData),

  // Get dashboard stats
  getDashboardStats: () => api.get('/orders/dashboard_stats/'),

  // Get recent orders
  getRecentOrders: (limit: number = 5) => api.get('/orders/recent_orders/', { params: { limit } }),

  // Bulk create orders
  bulkCreateOrders: (orders: any[]) => api.post('/orders/bulk_create/', { orders }),
};

export const customersAPI = {
  // Get all customers
  getCustomers: (params: ApiParams = {}) => api.get('/customers/', { params }),

  // Get single customer
  getCustomer: (id: number | string) => api.get(`/customers/${id}/`),

  // Create new customer
  createCustomer: (customerData: CustomerData) => api.post('/customers/', customerData),

  // Update customer
  updateCustomer: (id: number | string, customerData: Partial<CustomerData>) => api.patch(`/customers/${id}/`, customerData),

  // Search customers
  searchCustomers: (query: string) => api.get('/customers/search/', { params: { q: query } }),
};

export const suppliersAPI = {
  // Get all suppliers
  getSuppliers: (params: ApiParams = {}) => api.get('/suppliers/', { params }),

  // Get single supplier
  getSupplier: (id: number | string) => api.get(`/suppliers/${id}/`),

  // Create new supplier
  createSupplier: (supplierData: SupplierData) => api.post('/suppliers/', supplierData),

  // Update supplier
  updateSupplier: (id: number | string, supplierData: Partial<SupplierData>) => api.patch(`/suppliers/${id}/`, supplierData),

  // Get top rated suppliers
  getTopRatedSuppliers: (limit: number = 5) => api.get('/suppliers/top_rated/', { params: { limit } }),

  // Search suppliers
  searchSuppliers: (query: string) => api.get('/suppliers/search/', { params: { q: query } }),
};

export const aiAPI = {
  // Get AI dashboard data
  getDashboardData: () => api.get('/ai/dashboard-data/'),

  // Analyze order text
  analyzeOrderText: (orderText: string, orderId: number | null = null) => {
    const data: { order_text: string; order_id?: number } = { order_text: orderText };
    if (orderId) data.order_id = orderId;
    return api.post('/ai/analyze/', data);
  },

  // Analyze uploaded file
  analyzeFile: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/ai/analyze-file/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  // Get order recommendations
  getOrderRecommendations: (orderId: number | string) => api.get(`/ai/recommendations/${orderId}/`),

  // Chat endpoints
  chat: (message: string, sessionId: string | null = null, context: Record<string, unknown> = {}) => {
    const data: { message: string; session_id?: string; context: Record<string, unknown> } = { message, context };
    if (sessionId) data.session_id = sessionId;
    return api.post('/ai/chat/', data);
  },

  getChatHistory: (sessionId: string) => api.get(`/ai/chat/history/${sessionId}/`),

  clearChat: (sessionId: string) => api.post('/ai/chat/clear/', { session_id: sessionId }),

  // Smart features
  getSmartSuggestions: () => api.get('/ai/smart-suggestions/'),

  getPredictiveAlerts: () => api.get('/ai/predictive-alerts/'),

  getSmartActions: () => api.get('/ai/smart-actions/'),

  // Analyze sentiment
  analyzeSentiment: (messages: Array<{ content: string; sender?: string }>, orderId: number | null = null) => {
    const data: { messages: Array<{ content: string; sender?: string }>; order_id?: number } = { messages };
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

export const accountingAPI = {
  // Summary
  getSummary: () => api.get('/accounting/summary/'),

  // General Ledger
  getGeneralLedger: (params: ApiParams = {}) => api.get('/accounting/general-ledger/', { params }),
  createGeneralLedgerEntry: (data: any) => api.post('/accounting/general-ledger/', data),

  // Accounts Receivable
  getAccountsReceivable: (params: ApiParams = {}) => api.get('/accounting/accounts-receivable/', { params }),
  createInvoice: (data: any) => api.post('/accounting/accounts-receivable/', data),
  recordPayment: (id: number | string, data: any) => api.post(`/accounting/accounts-receivable/${id}/record_payment/`, data),

  // Accounts Payable
  getAccountsPayable: (params: ApiParams = {}) => api.get('/accounting/accounts-payable/', { params }),
  createBill: (data: any) => api.post('/accounting/accounts-payable/', data),
  recordSupplierPayment: (id: number | string, data: any) => api.post(`/accounting/accounts-payable/${id}/record_payment/`, data),

  // Customer Accounts
  getCustomerAccounts: (params: ApiParams = {}) => api.get('/accounting/customer-accounts/', { params }),
  getCustomerAccount: (id: number | string) => api.get(`/accounting/customer-accounts/${id}/`),
  getCustomerStatement: (id: number | string) => api.get(`/accounting/customer-accounts/${id}/statement/`),

  // Payments
  getPayments: (params: ApiParams = {}) => api.get('/accounting/payments/', { params }),
  createPayment: (data: any) => api.post('/accounting/payments/', data),

  // Chart of Accounts
  getChartOfAccounts: (params: ApiParams = {}) => api.get('/accounting/chart-of-accounts/', { params }),
  createAccount: (data: any) => api.post('/accounting/chart-of-accounts/', data),
};

// Export API_BASE_URL for components that need it
export { API_BASE_URL };

export default api;
