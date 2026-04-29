"use client";

import { useDashboard } from "@/hooks/usePharmacy";
import Statistics from "@/components/Dashboard/Statistics";
import type { DashboardData } from "@/types";
import RecentCustomers from "@/components/Dashboard/RecentCustomers";
import IncomeExpenses from "@/components/Dashboard/IncomeExpenses";
import styles from "./DashboardClient.module.css";

export default function DashboardClient() {
  const { data, isLoading, isError } = useDashboard() as {
    data: DashboardData | undefined;
    isLoading: boolean;
    isError: boolean;
  };

  if (isLoading) return <div className="flex justify-center py-20"></div>;
  if (isError || !data)
    return (
      <p className="py-10 text-center text-red-500">
        Failed to load dashboard data
      </p>
    );

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <Statistics
        products={data.statistics.allProducts}
        suppliers={data.statistics.allSuppliers}
        customers={data.statistics.allCustomers}
      />
      <div className={styles.mainGrid}>
        <RecentCustomers customers={data.recentCustomers} />
        <IncomeExpenses data={data.incomeExpenses || []} />
      </div>
    </div>
  );
}
