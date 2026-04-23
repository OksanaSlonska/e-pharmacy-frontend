import styles from "./DashboardChart.module.css";

export const DashboardChart = () => {
  return (
    <div className={styles.chartCard}>
      <h3 className={styles.title}>Income / Expenses</h3>
      <div className={styles.placeholder}>
        <div className={styles.visualStub}>
          {/* Имитация столбцов графика */}
          <div className={styles.bar} style={{ height: "60%" }}></div>
          <div className={styles.bar} style={{ height: "80%" }}></div>
          <div className={styles.bar} style={{ height: "40%" }}></div>
          <div className={styles.bar} style={{ height: "90%" }}></div>
          <div className={styles.bar} style={{ height: "50%" }}></div>
        </div>
        <p className={styles.hint}>
          Chart will be rendered here (Recharts / Chart.js)
        </p>
      </div>
    </div>
  );
};
