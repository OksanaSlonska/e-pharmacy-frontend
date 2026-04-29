import { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { pharmacyKeys } from "@/hooks/usePharmacy";
import { dashboardApi } from "@/lib/api/clientApi";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = { title: "Dashboard | E-Pharmacy" };

export default async function DashboardPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: pharmacyKeys.dashboard,
    queryFn: async () => {
      const { data } = await dashboardApi.get();
      return data;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboardClient />
    </HydrationBoundary>
  );
}
