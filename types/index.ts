export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface DashboardData {
  statistics: {
    allProducts: number;
    allSuppliers: number;
    allCustomers: number;
  };
  recentCustomers: Customer[];
  incomeExpenses: IncomeExpense[];
}

export interface IncomeExpense {
  type: "Income" | "Expense" | "Error";
  name: string;
  amount: string | number;
  email?: string;
}

export interface Order {
  _id: string;
  name: string;
  photo?: string;
  address: string;
  products: number;
  order_date: string;
  price: string;
  status: string;
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  stock: number;
  suppliers: string;
  price: number;
  photo?: string;
}

export interface ProductFormData {
  name: string;
  suppliers: string;
  stock: number;
  price: number;
  category: string;
  photo?: string;
}

export interface Supplier {
  _id: string;
  name: string;
  address: string;
  suppliers: string;
  date: string;
  amount: string;
  status: string;
}

export interface SupplierFormData {
  name: string;
  address: string;
  suppliers: string;
  date: string;
  amount: string;
  status: string;
}

export interface Customer {
  _id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  register_date: string;
  spent?: string | number;
  image?: string;
  photo?: string;
}

export interface ListFilters {
  page?: number;
  limit?: number;
  name?: string;
}

export interface OrdersResponse {
  orders: Order[];
  totalPages: number;
  page: number;
  total: number;
}

export interface ProductsResponse {
  products: Product[];
  totalPages: number;
  page: number;
  total: number;
}

export interface SuppliersResponse {
  suppliers: Supplier[];
  totalPages: number;
  page: number;
  total: number;
}

export interface CustomersResponse {
  customers: Customer[];
  totalPages: number;
  page: number;
  total: number;
}
