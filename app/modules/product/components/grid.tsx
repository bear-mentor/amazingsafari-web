import { Card } from "~/components/ui/card";
import type { Product } from "../type";
import { Link } from "react-router";

export function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/products/${product.slug}`} className="block">
            <Card className="overflow-hidden border-0 shadow-none">
              <div className="relative">
                <img src={product.imageUrl} alt={product.name} className="w-full aspect-square object-cover" />
              </div>
              <div className="py-4 space-y-2">
                <h4 className="font-semibold text-md uppercase tracking-wide">{product.name}</h4>
                <p className="text-red-600 font-bold text-lg">Rp {product.price.toLocaleString()}</p>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
