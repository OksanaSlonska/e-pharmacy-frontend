import axios from "axios";
import type {
  DashboardData,
  ProductsResponse,
  OrdersResponse,
  SuppliersResponse,
  CustomersResponse,
  Product,
  ProductFormData,
  Supplier,
  SupplierFormData,
  Customer,
  ListFilters,
} from "@/types";
import { useAuthStore } from "@/store/authStore";

export const clientApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

clientApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

clientApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url.includes("/user/login")) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await clientApi.post("/user/refresh");

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }

        return clientApi(originalRequest);
      } catch (refreshError) {
        useAuthStore.getState().logout();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export const authApi = {
  login: (credentials: { email: string; password: string }) =>
    clientApi.post("/user/login", credentials),

  logout: () => clientApi.post("/user/logout"),

  getCurrentUser: () => clientApi.get("/user/info"),
};

export const dashboardApi = {
  get: () => clientApi.get<DashboardData>("/dashboard"),
};

export const ordersApi = {
  getAll: (params?: ListFilters) =>
    clientApi.get<OrdersResponse>("/orders", { params }),
};

export const productsApi = {
  getAll: (params?: ListFilters) =>
    clientApi.get<ProductsResponse>("/products", { params }),

  getById: (id: string) => clientApi.get<Product>(`/products/${id}`),

  create: (data: ProductFormData) => clientApi.post<Product>("/products", data),

  update: (id: string, data: Partial<ProductFormData>) =>
    clientApi.put<Product>(`/products/${id}`, data),

  delete: (id: string) => clientApi.delete(`/products/${id}`),
};

export const suppliersApi = {
  getAll: (params?: ListFilters) =>
    clientApi.get<SuppliersResponse>("/suppliers", { params }),

  create: (data: SupplierFormData) =>
    clientApi.post<Supplier>("/suppliers", data),

  update: (id: string, data: Partial<SupplierFormData>) =>
    clientApi.put<Supplier>(`/suppliers/${id}`, data),
};

export const customersApi = {
  getAll: (params?: ListFilters) =>
    clientApi.get<CustomersResponse>("/customers", { params }),

  getById: (id: string) => clientApi.get<Customer>(`/customers/${id}`),
};
