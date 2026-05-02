import products from "@/data/products.json";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = products.find((p) => p.id == id);

  if (!product) return <h2>Not Found</h2>;

  return (
    <div className="p-6">
      <img src={product.image} className="w-64" alt={product.name} />
      <h1 className="text-2xl">{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}