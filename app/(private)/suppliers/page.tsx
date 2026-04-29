import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { suppliersApi } from "@/lib/api/clientApi";
import SuppliersClient from "./SuppliersClient";

export default async function SuppliersPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["suppliers", "", 1],
    queryFn: () => suppliersApi.getAll({ name: "", page: 1 }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SuppliersClient />
    </HydrationBoundary>
  );
}
