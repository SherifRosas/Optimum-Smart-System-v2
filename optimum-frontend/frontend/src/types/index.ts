// Core Types
export interface User {
  id: number;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  is_staff: boolean;
  is_superuser: boolean;
  is_active: boolean;
}

export interface UserProfile {
  id: number;
  user: number;
  role: 'ADMIN' | 'CUSTOMER' | 'SUPPLIER';
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  phone?: string;
  address?: string;
  company_name?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface AuthResponse {
  success: boolean;
  tokens: AuthTokens;
  user: User;
  profile?: UserProfile;
}

// Order Types
export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled' | 'delivered';

export interface Order {
  id: number;
  customer: number;
  customer_name?: string;
  supplier?: number;
  supplier_name?: string;
  status: OrderStatus;
  total_amount: number;
  items: OrderItem[];
  created_at: string;
  updated_at: string;
  delivery_date?: string;
  notes?: string;
}

export interface OrderItem {
  id: number;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

// Customer Types
export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address?: string;
  created_at: string;
  updated_at: string;
}

// Supplier Types
export interface Supplier {
  id: number;
  name: string;
  email: string;
  phone: string;
  address?: string;
  rating?: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// AI Types
export interface ChatMessage {
  id: number;
  session: number;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
}

export interface ChatSession {
  id: number;
  user: number;
  title?: string;
  created_at: string;
  updated_at: string;
  messages: ChatMessage[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// UI Types
export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
  roles?: UserProfile['role'][];
}

// Chart Types
export interface ChartData {
  name: string;
  value: number;
  [key: string]: string | number;
}

// Form Types
export interface FormErrors {
  [key: string]: string | undefined;
}


