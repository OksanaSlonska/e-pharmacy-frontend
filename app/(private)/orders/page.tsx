import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ordersApi } from "@/lib/api/clientApi";
import OrdersClient from "./OrdersClient";

export default async function OrdersPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["orders", ""],
    queryFn: () => ordersApi.getAll({ name: "" }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OrdersClient />
    </HydrationBoundary>
  );
}
