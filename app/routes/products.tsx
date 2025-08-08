import { ProductsGrid } from "~/modules/product/components/grid";
import type { Route } from "./+types/products";
import type { Product } from "~/modules/product/type";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Products of Amazing Safari" }];
}

export async function clientLoader() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/products`);
  const products: Product[] = await response.json();
  return { products };
}

export default function ProductsRoute({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div>
      <ProductsGrid products={products} />
    </div>
  );
}
