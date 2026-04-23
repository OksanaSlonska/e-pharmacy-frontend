"use client";

import { DashboardChart } from "@/components/Dashboard/DashboardChart";
import { RecentCustomers } from "@/components/Dashboard/RecentCustomers";
import { Statistics } from "@/components/Dashboard/Statistics";
import styles from "./page.module.css";

export const DashboardClient = ({ initialData }: { initialData: any }) => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Верхний ряд: Карточки статистики */}
      <section className={styles.statsSection}>
        <Statistics stats={initialData.stats} />
      </section>

      {/* Нижний ряд: График + Таблица клиентов */}
      <div className={styles.dataGrid}>
        <div className={styles.chartWrapper}>
          <DashboardChart />
        </div>
        <div className={styles.tableWrapper}>
          <RecentCustomers />
        </div>
      </div>
    </div>
  );
};
