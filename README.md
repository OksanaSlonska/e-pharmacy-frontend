# 💊 E-Pharmacy Management System (Admin Panel)

A robust and scalable administrative dashboard developed for pharmaceutical business management. This application provides a comprehensive interface for managing products, tracking supplier activities, monitoring customer orders, and analyzing real-time business statistics.

## 🚀 Live Demo

**Link:**

---

## ✨ Key Features

- **📊 Business Analytics:** Real-time dashboard statistics (total products, suppliers, customers).
- **🔐 Professional Auth:** Secure login system with automated **Access & Refresh Token** rotation logic using Axios Interceptors.
- **📦 Inventory CRUD:** Full management of the medicine catalog (Add, Edit, Delete, Filter).
- **🚚 Supplier Management:** Tracking pharmaceutical vendors, their payment history, and status.
- **👥 Customer Insights:** Centralized database of customers and their order history.
- **📝 Order Tracking:** Real-time monitoring of all pharmaceutical orders and status updates.
- **📱 Responsive UI:** Seamless user experience across mobile, tablet, and desktop devices.

---

## 🛠️ Tech Stack

### Frontend

- **Core:** Next.js 14+ (App Router)
- **Language:** TypeScript (Strictly typed)
- **State Management:** Zustand (Persisted Auth state)
- **Form Handling:** React Hook Form
- **Validation:** Yup
- **HTTP Client:** Axios (Custom instance with Request/Response interceptors)
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

### Backend (Integration)

- Node.js & Express
- MongoDB / Mongoose
- JWT-based Session Management (HTTP-only Cookies)

---

## 📂 Project Structure

```text
src/
├── app/            # Next.js routes and page layouts
├── components/     # Reusable UI (Tables, Forms, Modals)
├── lib/api/        # Axios configuration and Interceptors
├── store/          # Zustand store (Auth state)
├── types/          # TypeScript interfaces/types definitions
├── utils/          # Validation schemas (Yup) and helpers
└── providers/      # React context providers
```
