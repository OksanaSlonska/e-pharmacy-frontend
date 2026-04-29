import { Pencil, Trash2 } from "lucide-react";
import { Product } from "@/types";
import styles from "./Tables.module.css";

export const ProductsTable = ({
  products,
  onEdit,
  onDelete,
}: {
  products: Product[];
  onEdit: (p: Product) => void;
  onDelete: (id: string) => void;
}) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>All products</div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Product Info</th>
              <th className={styles.th}>Category</th>
              <th className={styles.th}>Stock</th>
              <th className={styles.th}>Suppliers</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className={styles.td}>
                  <strong>{product.name}</strong>
                </td>
                <td className={styles.td}>{product.category}</td>
                <td className={styles.td}>{product.stock}</td>
                <td className={styles.td}>{product.suppliers}</td>
                <td className={styles.td}>{product.price}</td>
                <td className={styles.td}>
                  <div className={styles.actionButtons}>
                    <button
                      className={styles.editBtn}
                      title="Edit"
                      onClick={() => onEdit(product)}
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      className={styles.deleteBtn}
                      title="Delete"
                      onClick={() => onDelete(product._id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
