"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { suppliersApi } from "@/lib/api/clientApi";
import { SuppliersTable } from "@/components/Tables/SuppliersTable";
import { Pagination } from "@/components/Pagination/Pagination";
import Loader from "@/components/ui/Loader/Loader";
import styles from "./Suppliers.module.css";
import { SharedFilter } from "@/components/ui/SharedFilter/SharedFilter";
import { Modal } from "@/components/ui/Modal/Modal";
import { SupplierForm } from "@/components/Forms/SupplierForm";
import { Supplier } from "@/types";
import toast from "react-hot-toast";

export default function SuppliersClient() {
  const queryClient = useQueryClient();
  const [filterName, setFilterName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);

  const handleAddClick = () => {
    setEditingSupplier(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (supplier: Supplier) => {
    setEditingSupplier(supplier);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingSupplier(null);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["suppliers", filterName, currentPage],
    queryFn: () => suppliersApi.getAll({ name: filterName, page: currentPage }),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: Omit<Supplier, "_id">) => {
      if (editingSupplier)
        return suppliersApi.update(editingSupplier._id, formData);
      return suppliersApi.create(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      closeModal();
      toast.success(
        editingSupplier ? "Дані оновлено!" : "Постачальника додано!",
      );
    },
    onError: (error: Error) => {
      toast.error("Помилка: " + error.message);
    },
  });

  const rawData = data?.data;
  const suppliersList =
    rawData?.suppliers || (Array.isArray(rawData) ? rawData : []);
  const totalPages = rawData?.totalPages || 1;

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.filterGroup}>
          <SharedFilter
            placeholder="User Name"
            onFilter={(val) => {
              setFilterName(val);
              setCurrentPage(1);
            }}
          />
        </div>

        <button className={styles.addBtn} onClick={handleAddClick}>
          Add a new suppliers
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.tableWrapper}>
          <SuppliersTable suppliers={suppliersList} onEdit={handleEditClick} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingSupplier ? "Edit supplier" : "Add a new supplier"}
      >
        <SupplierForm
          initialData={editingSupplier}
          onCancel={closeModal}
          onSubmit={(fd: Omit<Supplier, "_id">) => mutate(fd)}
          isLoading={isPending}
        />
      </Modal>
    </div>
  );
}
