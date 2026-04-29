import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CustomersClient from "./CustomersClient";
import { customersApi } from "@/lib/api/clientApi";

export default async function CustomersPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["customers", "", 1],
    queryFn: () => customersApi.getAll({ name: "", page: 1 }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CustomersClient />
    </HydrationBoundary>
  );
}
