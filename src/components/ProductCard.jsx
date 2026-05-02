import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="p-4 shadow rounded">
      <img src={product.image} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>⭐ {product.rating}</p>

      <Link href={`/products/${product.id}`}>
        <button className="btn mt-2">View Details</button>
      </Link>
    </div>
  );
}