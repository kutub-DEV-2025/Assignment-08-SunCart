import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl">🌞 Summer Sale 50% OFF</h1>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {products.slice(0, 3).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}