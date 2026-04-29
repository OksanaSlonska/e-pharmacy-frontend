"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { productsApi } from "@/lib/api/clientApi";
import { ProductsTable } from "@/components/Tables/ProductsTable";
import { Pagination } from "@/components/Pagination/Pagination";
import Loader from "@/components/ui/Loader/Loader";
import styles from "./Products.module.css";
import { SharedFilter } from "@/components/ui/SharedFilter/SharedFilter";
import { Modal } from "@/components/ui/Modal/Modal";
import { ProductForm } from "@/components/Forms/AddProductForm";
import { Product, ProductFormData } from "@/types";
import toast from "react-hot-toast";

export default function ProductsClient() {
  const queryClient = useQueryClient();
  const [filterName, setFilterName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddClick = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };
  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["products", filterName, currentPage],
    queryFn: () => productsApi.getAll({ name: filterName, page: currentPage }),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: ProductFormData) => {
      if (editingProduct) {
        return productsApi.update(editingProduct._id, formData);
      }
      return productsApi.create(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      closeModal();
    },
    onError: (error: Error) => {
      alert("Помилка при збереженні: " + error.message);
    },
  });

  const handleFormSubmit = (formData: ProductFormData) => {
    mutate(formData);
  };

  const productsList = data?.data?.products || [];
  const totalPages = data?.data?.totalPages || 1;

  const { mutate: deleteProduct } = useMutation({
    mutationFn: (id: string) => productsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      closeModal();
      toast.success("Дані успішно оновлено!");
    },
    onError: () => {
      alert("Помилка при видаленні");
    },
  });

  const handleDelete = (id: string) => {
    if (confirm("Ти впевнена, що хочеш видалити цей товар?")) {
      deleteProduct(id);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.filterSection}>
          <SharedFilter
            placeholder="Product Name"
            onFilter={(val) => {
              setFilterName(val);
              setCurrentPage(1);
            }}
          />
        </div>

        <button className={styles.addButton} onClick={handleAddClick}>
          <div className={styles.plusIconWrapper}>
            <Plus size={20} color="white" />
          </div>
          <span>Add a new product</span>
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductsTable
            products={productsList}
            onEdit={handleEditClick}
            onDelete={handleDelete}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingProduct ? "Edit product" : "Add a new product"}
      >
        <ProductForm
          initialData={editingProduct}
          onCancel={closeModal}
          onSubmit={handleFormSubmit}
          isLoading={isPending}
        />
      </Modal>
    </div>
  );
}
