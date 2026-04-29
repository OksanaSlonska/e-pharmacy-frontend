"use client";

import { Product, ProductFormData } from "@/types";
import styles from "./Forms.module.css";

interface ProductFormProps {
  initialData: Product | null;
  onCancel: () => void;
  onSubmit: (data: ProductFormData) => void;
  isLoading: boolean;
}

export const ProductForm = ({
  initialData,
  onCancel,
  onSubmit,
  isLoading,
}: ProductFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    const formData = new FormData(e.currentTarget);

    const data: ProductFormData = {
      name: String(formData.get("name") || "").trim(),
      category: String(formData.get("category") || ""),
      stock: Number(formData.get("stock")),
      suppliers: String(formData.get("suppliers") || "").trim(),
      price: Number(formData.get("price")),
      photo:
        initialData?.photo || "https://ftp.goit.study/img/avatars/default.png",
    };

    onSubmit(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input
          name="name"
          className={styles.input}
          placeholder="Product Info"
          defaultValue={initialData?.name || ""}
          required
        />

        <select
          name="category"
          className={styles.select}
          defaultValue={initialData?.category || ""}
          required
        >
          <option value="" disabled>
            Category
          </option>
          <option value="Medicine">Medicine</option>
          <option value="Heart">Heart</option>
          <option value="Head">Head</option>
          <option value="Hand">Hand</option>
          <option value="Leg">Leg</option>
          <option value="Dental care">Dental care</option>
          <option value="Skin care">Skin care</option>
        </select>
      </div>

      <div className={styles.row}>
        <input
          name="stock"
          type="number"
          className={styles.input}
          placeholder="Stock"
          defaultValue={initialData?.stock || ""}
          required
        />

        <input
          name="suppliers"
          className={styles.input}
          placeholder="Suppliers"
          defaultValue={initialData?.suppliers || ""}
          required
        />
      </div>

      <div className={styles.row}>
        <input
          name="price"
          type="number"
          step="0.01"
          className={styles.input}
          placeholder="Price"
          defaultValue={initialData?.price || ""}
          required
        />
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitBtn} disabled={isLoading}>
          {isLoading ? "Saving..." : initialData ? "Save" : "Add"}
        </button>
        <button type="button" onClick={onCancel} className={styles.cancelBtn}>
          Cancel
        </button>
      </div>
    </form>
  );
};
