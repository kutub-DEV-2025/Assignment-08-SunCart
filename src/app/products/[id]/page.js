import products from "@/data/products.json";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  
  if (!session) {
    redirect(`/login?redirect=/products/${id}`);
  }

  
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <h2 className="p-6">Product not found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl shadow"
        />

  
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="mt-3 text-gray-600">{product.description}</p>

          <p className="mt-3">⭐ Rating: {product.rating}</p>
          <p>🏷️ Brand: {product.brand}</p>
          <p>📦 Stock: {product.stock}</p>

          <p className="mt-4 text-2xl font-bold text-orange-500">
            ${product.price}
          </p>

          <button className="mt-5 bg-orange-500 text-white px-5 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}