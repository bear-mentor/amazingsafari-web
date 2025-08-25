import { ProductsGrid } from "~/modules/product/components/grid";
import type { Route } from "./+types/home";
import type { Product } from "~/modules/product/type";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amazing Safari" },
    { name: "description", content: "Zoo merchandise." },
  ];
}

export async function clientLoader() {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`
  );
  const products: Product[] = await response.json();
  return { products };
}

export default function HomeRoute({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div>
      <section className="m-20">
        <p className="font-bold text-3xl text-center">
          Zoo Merchandise for Everyone
        </p>
      </section>

      <ProductsGrid products={products} />
    </div>
  );
}
