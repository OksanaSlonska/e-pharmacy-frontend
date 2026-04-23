import styles from "./RecentCustomers.module.css";

export const RecentCustomers = () => {
  const mockCustomers = [
    {
      id: 1,
      name: "Stella Thompson",
      email: "stella.t@gmail.com",
      spent: "$1,200",
    },
    {
      id: 2,
      name: "Nathaniel Wood",
      email: "nat.wood@outlook.com",
      spent: "$850",
    },
    { id: 3, name: "Elena G.", email: "elena.g@yahoo.com", spent: "$2,400" },
  ];

  return (
    <div className={styles.tableCard}>
      <h3 className={styles.title}>Recent Customers</h3>
      <ul className={styles.customerList}>
        {mockCustomers.map((user) => (
          <li key={user.id} className={styles.customerItem}>
            <div className={styles.info}>
              <span className={styles.name}>{user.name}</span>
              <span className={styles.email}>{user.email}</span>
            </div>
            <span className={styles.spent}>{user.spent}</span>
          </li>
        ))}
      </ul>
      <button className={styles.viewAll}>View all customers</button>
    </div>
  );
};
