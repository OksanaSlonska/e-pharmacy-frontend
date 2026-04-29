"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ordersApi } from "@/lib/api/clientApi";
import { OrdersTable } from "@/components/Tables/OrdersTable";

import Loader from "@/components/ui/Loader/Loader";
import styles from "./Orders.module.css";
import { SharedFilter } from "@/components/ui/SharedFilter/SharedFilter";
import { Pagination } from "@/components/Pagination/Pagination";

export default function OrdersClient() {
  const [filterName, setFilterName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["orders", filterName, currentPage],
    queryFn: () =>
      ordersApi.getAll({ name: filterName, page: currentPage, limit: 5 }),
  });

  const ordersList = data?.data?.orders || [];
  const totalPages = data?.data?.totalPages || 1;
  return (
    <div className={styles.container}>
      <SharedFilter
        placeholder="User Name"
        onFilter={(val) => {
          setFilterName(val);
          setCurrentPage(1);
        }}
      />

      {isLoading ? (
        <Loader />
      ) : ordersList.length === 0 ? (
        <div className={styles.emptyMessage}>No orders found.</div>
      ) : (
        <OrdersTable orders={ordersList} />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
