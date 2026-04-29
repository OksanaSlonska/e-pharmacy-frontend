import styles from "./Tables.module.css";

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusClass = status.toLowerCase();

  return (
    <span className={`${styles.statusBadge} ${styles[statusClass]}`}>
      {status}
    </span>
  );
};
