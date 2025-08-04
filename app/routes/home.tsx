import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Amazing Safari" }, { name: "description", content: "Zoo merchandise." }];
}

export async function clientLoader() {
  const response = await fetch(`http://localhost:3000/products`);
  const products = await response.json();
  return products;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const products = loaderData;

  return (
    <div>
      <h1>Amazing Safari</h1>
      <ul>
        {products.map((product: any) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}
