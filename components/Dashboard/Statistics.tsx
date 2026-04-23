import styles from "./Statistics.module.css";

interface StatItem {
  id: number;
  title: string;
  count: string;
  icon: string;
}

export const Statistics = ({ stats }: { stats: StatItem[] }) => {
  return (
    <div className={styles.grid}>
      {stats.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.header}>
            <div className={styles.iconCircle}>
              <svg className={styles.icon}>
                <use xlinkHref={`/sprite.svg#${item.icon}`} />
              </svg>
            </div>
            <span className={styles.count}>{item.count}</span>
          </div>
          <p className={styles.title}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
