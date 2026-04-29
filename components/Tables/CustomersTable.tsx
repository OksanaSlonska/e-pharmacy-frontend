import styles from "./Tables.module.css";
import Image from "next/image";
import { Customer } from "@/types";

interface CustomersTableProps {
  customers: Customer[];
}

export const CustomersTable = ({ customers }: CustomersTableProps) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>Customers Data</div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>User Info</th>
              <th className={styles.th}>Email</th>
              <th className={styles.th}>Address</th>
              <th className={styles.th}>Phone</th>
              <th className={styles.th}>Register date</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td className={styles.td}>
                  <div className={styles.userInfo}>
                    <Image
                      src={customer.image || "/default-avatar.png"}
                      alt={customer.name}
                      width={36}
                      height={36}
                      className={styles.avatar}
                    />
                    <span>{customer.name}</span>
                  </div>
                </td>
                <td className={styles.td}>{customer.email}</td>
                <td className={styles.td}>{customer.address}</td>
                <td className={styles.td}>{customer.phone}</td>
                <td className={styles.td}>{customer.register_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
