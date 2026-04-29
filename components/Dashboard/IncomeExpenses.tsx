import { IncomeExpense } from "@/types";
import styles from "./IncomeExpenses.module.css";

export default function IncomeExpenses({ data }: { data: IncomeExpense[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Income/Expenses</div>

      <div className={styles.todayLabel}>Today</div>

      {data?.map((item, idx) => {
        const isIncome = item.type === "Income";
        const isError = item.type === "Error";

        const badgeClass = isIncome
          ? styles.incomeBadge
          : isError
            ? styles.errorBadge
            : styles.expenseBadge;

        const amountClass = isIncome
          ? styles.amountIncome
          : isError
            ? styles.amountError
            : styles.amountExpense;

        return (
          <div key={idx} className={styles.item}>
            <div className={`${styles.badge} ${badgeClass}`}>{item.type}</div>

            <div className={styles.nameWrapper}>
              <div className={styles.itemName}>{item.name}</div>

              {item.email && (
                <div className={styles.itemEmail}>{item.email}</div>
              )}
            </div>

            <div className={`${styles.amount} ${amountClass}`}>
              {isIncome || isError ? "+" : "-"}
              {Math.abs(
                parseFloat(item.amount.toString().replace(/[^\d.-]/g, "")),
              ).toFixed(2)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
