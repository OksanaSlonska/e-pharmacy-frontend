import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { productsApi } from "@/lib/api/clientApi";
import ProductsClient from "./ProductsClient";

export default async function ProductsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products", ""],
    queryFn: () => productsApi.getAll({ name: "" }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductsClient />
    </HydrationBoundary>
  );
}
