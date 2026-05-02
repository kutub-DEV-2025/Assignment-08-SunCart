import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div>
      
      <section className="bg-orange-100 rounded-xl p-10 text-center mt-6">
        <h1 className="text-4xl font-bold text-orange-600">
          Summer Sale 50% OFF
        </h1>
        <p className="mt-3 text-lg">Hot Deals 🔥</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Popular Products</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Summer Care Tips</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">Stay Hydrated</h3>
            <p className="text-sm mt-2">
              Drink enough water to stay fresh during hot summer days.
            </p>
          </div>

          <div className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">Use Sunscreen</h3>
            <p className="text-sm mt-2">
              Protect your skin from UV rays with SPF sunscreen.
            </p>
          </div>

          <div className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">Wear Light Clothes</h3>
            <p className="text-sm mt-2">
              Cotton and breathable clothes help reduce heat.
            </p>
          </div>
        </div>
      </section>

    
      <section className="mt-12 mb-10">
        <h2 className="text-2xl font-bold mb-4">Top Brands</h2>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="border rounded p-6 text-center shadow-sm">
            SunShade
          </div>

          <div className="border rounded p-6 text-center shadow-sm">
            BeachWalk
          </div>

          <div className="border rounded p-6 text-center shadow-sm">
            CoolWear
          </div>

          <div className="border rounded p-6 text-center shadow-sm">
            SummerGo
          </div>
        </div>
      </section>
    </div>
  );
}