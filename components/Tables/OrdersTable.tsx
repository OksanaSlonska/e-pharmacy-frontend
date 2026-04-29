import { Order } from "@/types";
import { StatusBadge } from "./StatusBadge";
import Image from "next/image";
import styles from "./Tables.module.css";

interface OrdersTableProps {
  orders: Order[];
}

export const OrdersTable = ({ orders }: OrdersTableProps) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>All orders</div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>User Info</th>
              <th className={styles.th}>Address</th>
              <th className={styles.th}>Products</th>
              <th className={styles.th}>Order date</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className={styles.td}>
                  <div className={styles.userInfo}>
                    <Image
                      src={order.photo || "/images/default-avatar.png"}
                      alt={order.name}
                      width={36}
                      height={36}
                      className={styles.avatar}
                    />
                    <span>{order.name}</span>
                  </div>
                </td>
                <td className={styles.td}>{order.address}</td>
                <td className={styles.td}>{order.products}</td>
                {/* Используем order.order_date из интерфейса */}
                <td className={styles.td}>{order.order_date}</td>
                <td className={styles.td}>{order.price}</td>
                <td className={styles.td}>
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
