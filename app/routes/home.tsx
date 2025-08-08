import { ProductsGrid } from "~/modules/product/components/grid";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Amazing Safari" }, { name: "description", content: "Zoo merchandise." }];
}

export async function clientLoader() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/products`);
  const products = await response.json();
  return products;
}

export default function HomeRoute({ loaderData }: Route.ComponentProps) {
  const products = loaderData;

  return (
    <div>
      <section>
        <h1>Zoo Merchandise for Everyone</h1>
      </section>

      <ProductsGrid products={products} />
    </div>
  );
}
