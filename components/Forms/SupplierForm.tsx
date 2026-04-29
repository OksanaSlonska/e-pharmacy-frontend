import React from "react";
import { Supplier, SupplierFormData } from "@/types";
import styles from "./Forms.module.css";

interface SupplierFormProps {
  initialData: Supplier | null;
  onSubmit: (data: SupplierFormData) => void;
  onCancel: () => void;
  isLoading: boolean;
}

export const SupplierForm = ({
  initialData,
  onSubmit,
  onCancel,
  isLoading,
}: SupplierFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    const formData = new FormData(e.currentTarget);

    const data = {
      name: String(formData.get("name") || "").trim(),
      address: String(formData.get("address") || "").trim(),
      suppliers: String(formData.get("suppliers") || "").trim(),
      date: String(formData.get("date") || ""),

      amount: `৳ ${formData.get("amount")}`,
      status: String(formData.get("status") || "Active"),
    };

    onSubmit(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input
          name="name"
          className={styles.input}
          placeholder="Suppliers Info"
          defaultValue={initialData?.name || ""}
          required
        />
        <input
          name="address"
          className={styles.input}
          placeholder="Address"
          defaultValue={initialData?.address || ""}
          required
        />
      </div>

      <div className={styles.row}>
        <input
          name="suppliers"
          className={styles.input}
          placeholder="Company"
          defaultValue={initialData?.suppliers || ""}
          required
        />
        <input
          name="date"
          type="date"
          className={styles.input}
          defaultValue={initialData?.date || ""}
          required
        />
      </div>

      <div className={styles.row}>
        <input
          name="amount"
          type="number"
          step="0.01"
          className={styles.input}
          placeholder="Ammount"
          defaultValue={initialData?.amount?.replace(/[^\d.]/g, "") || ""}
          required
        />
        <select
          name="status"
          className={styles.select}
          defaultValue={initialData?.status || "Active"}
          required
        >
          <option value="Active">Active</option>
          <option value="Deactive">Deactive</option>
        </select>
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
