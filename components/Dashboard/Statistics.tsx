import styles from "./Statistics.module.css";

interface StatisticsProps {
  products: number;
  suppliers: number;
  customers: number;
}

const STATS = [
  {
    key: "products" as const,
    icon: "icon-smoney-finance",
    label: "All products",
    highlight: true,
  },
  {
    key: "suppliers" as const,
    icon: "icon-smoney-finance",
    label: "All suppliers",
    highlight: false,
  },
  {
    key: "customers" as const,
    icon: "icon-users",
    label: "All customers",
    highlight: false,
  },
];

export default function Statistics({
  products,
  suppliers,
  customers,
}: StatisticsProps) {
  const values = { products, suppliers, customers };

  return (
    <div className={styles.statsGrid}>
      {STATS.map(({ key, icon, label, highlight }) => (
        <div
          key={key}
          className={`${styles.card} ${highlight ? styles.highlight : ""}`}
        >
          <div className={styles.cardHeader}>
            <svg className={styles.icon}>
              <use xlinkHref={`/sprite.svg#${icon}`} />
            </svg>
            <span className={styles.label}>{label}</span>
          </div>
          <p className={styles.value}>{(values[key] || 0).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
