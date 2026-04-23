import { DashboardClient } from "./DashboardClient";

// Позже здесь будет реальный fetch данных с бэкенда
async function getDashboardData() {
  return {
    stats: [
      { id: 1, title: "All products", count: "8,400", icon: "icon-products" },
      { id: 2, title: "All suppliers", count: "2,120", icon: "icon-suppliers" },
      { id: 3, title: "All customers", count: "140", icon: "icon-customers" },
    ],
  };
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  return <DashboardClient initialData={data} />;
}
