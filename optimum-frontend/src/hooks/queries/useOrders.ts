import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService } from '@/services/api';
import type { Order, OrderStatus, PaginatedResponse } from '@/types';

/**
 * Query keys for orders
 */
export const orderKeys = {
  all: ['orders'] as const,
  lists: () => [...orderKeys.all, 'list'] as const,
  list: (filters?: Record<string, unknown>) => [...orderKeys.lists(), filters] as const,
  details: () => [...orderKeys.all, 'detail'] as const,
  detail: (id: number) => [...orderKeys.details(), id] as const,
};

/**
 * Fetch orders with filters
 */
export function useOrders(filters?: {
  status?: OrderStatus;
  customer?: number;
  supplier?: number;
  page?: number;
}) {
  return useQuery({
    queryKey: orderKeys.list(filters),
    queryFn: async () => {
      try {
        const params = new URLSearchParams();
        if (filters?.status) params.append('status', filters.status);
        if (filters?.customer) params.append('customer', filters.customer.toString());
        if (filters?.supplier) params.append('supplier', filters.supplier.toString());
        if (filters?.page) params.append('page', filters.page.toString());

        const queryString = params.toString();
        const url = queryString ? `/orders/?${queryString}` : '/orders/';
        console.log('Fetching orders from:', url);
        
        const response = await apiService.get<PaginatedResponse<Order>>(url);
        
        console.log('Orders response:', response);
        
        // Handle both wrapped and direct response formats
        const data = (response as any).data || response;
        
        // If it's already a PaginatedResponse, return it
        if (data && data.results !== undefined) {
          return data;
        }
        
        // If it's an array, wrap it
        if (Array.isArray(data)) {
          return {
            count: data.length,
            next: null,
            previous: null,
            results: data,
          };
        }
        
        // Fallback: empty result
        return {
          count: 0,
          next: null,
          previous: null,
          results: [],
        };
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Return empty result instead of throwing
        return {
          count: 0,
          next: null,
          previous: null,
          results: [],
        };
      }
    },
    retry: 1,
    retryDelay: 1000,
    staleTime: 30000, // 30 seconds
    gcTime: 300000, // 5 minutes
  });
}

/**
 * Fetch single order
 */
export function useOrder(id: number) {
  return useQuery({
    queryKey: orderKeys.detail(id),
    queryFn: async () => {
      const response = await apiService.get<Order>(`/orders/${id}/`);
      return response.data || response;
    },
    enabled: !!id,
  });
}

/**
 * Create order mutation
 */
export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Partial<Order>) => {
      const response = await apiService.post<Order>('/orders/', data);
      return response.data || response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: orderKeys.lists() });
    },
  });
}

/**
 * Update order mutation
 */
export function useUpdateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<Order> }) => {
      const response = await apiService.patch<Order>(`/orders/${id}/`, data);
      return response.data || response;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: orderKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: orderKeys.lists() });
    },
  });
}

/**
 * Update order status mutation
 */
export function useUpdateOrderStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }: { id: number; status: OrderStatus }) => {
      const response = await apiService.patch<Order>(`/orders/${id}/`, { status });
      return response.data || response;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: orderKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: orderKeys.lists() });
    },
  });
}

/**
 * Delete order mutation
 */
export function useDeleteOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await apiService.delete(`/orders/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: orderKeys.lists() });
    },
  });
}


