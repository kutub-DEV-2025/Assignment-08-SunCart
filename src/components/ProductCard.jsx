import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover rounded"
      />

      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
      <p>⭐ {product.rating}</p>
      <p className="font-bold">${product.price}</p>

      <Link href={`/products/${product.id}`}>
        <button className="bg-orange-500 text-white px-4 py-2 mt-3 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}