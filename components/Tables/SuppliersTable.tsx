import { Pencil } from "lucide-react";
import { Supplier } from "@/types";
import styles from "./Tables.module.css";

interface Props {
  suppliers: Supplier[];
  onEdit: (supplier: Supplier) => void;
}

export const SuppliersTable = ({ suppliers, onEdit }: Props) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>All suppliers</div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Suppliers Info</th>
              <th className={styles.th}>Address</th>
              <th className={styles.th}>Company</th>
              <th className={styles.th}>Delivery date</th>
              <th className={styles.th}>Ammount</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier._id}>
                <td className={styles.td}>
                  <strong>{supplier.name}</strong>
                </td>
                <td className={styles.td}>{supplier.address}</td>

                <td className={styles.td}>{supplier.suppliers}</td>
                <td className={styles.td}>{supplier.date}</td>
                <td className={styles.td}>{supplier.amount}</td>
                <td className={styles.td}>
                  <span
                    className={
                      supplier.status === "Active"
                        ? styles.statusActive
                        : styles.statusDeactive
                    }
                  >
                    {supplier.status}
                  </span>
                </td>
                <td className={styles.td}>
                  <div className={styles.actionButtons}>
                    <button
                      className={styles.editBtn}
                      title="Edit"
                      onClick={() => onEdit(supplier)}
                    >
                      <Pencil size={16} />
                      <span style={{ marginLeft: "4px" }}>Edit</span>
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
