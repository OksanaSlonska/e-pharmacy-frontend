"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { customersApi } from "@/lib/api/clientApi";
import { Pagination } from "@/components/Pagination/Pagination";
import Loader from "@/components/ui/Loader/Loader";
import styles from "./Customers.module.css";
import { SharedFilter } from "@/components/ui/SharedFilter/SharedFilter";
import { CustomersTable } from "@/components/Tables/CustomersTable";

export default function CustomersClient() {
  const [filterName, setFilterName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["customers", filterName, currentPage],
    queryFn: () => customersApi.getAll({ name: filterName, page: currentPage }),
  });

  const rawData = data?.data;
  const customersList =
    rawData?.customers || (Array.isArray(rawData) ? rawData : []);
  const totalPages = rawData?.totalPages || 1;

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <SharedFilter
          placeholder="User Name"
          onFilter={(val) => {
            setFilterName(val);
            setCurrentPage(1);
          }}
        />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.tableWrapper}>
          <CustomersTable customers={customersList} />

          <div className={styles.paginationSection}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
