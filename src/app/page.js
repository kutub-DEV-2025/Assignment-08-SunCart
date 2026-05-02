import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import "animate.css";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12">

     
      <section className="mt-6 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 md:px-12 py-14 shadow-lg">
        <div className="max-w-2xl">
          <div className="animate__animated animate__fadeInDown">
            <p className="text-sm font-medium tracking-wide uppercase mb-2">
              SunCart AI Picks
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Summer Sale <span className="text-white/90">50% OFF</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/90">
              Hot deals, fresh summer essentials, and smart picks curated for you.
            </p>

            <button className="mt-6 bg-white text-orange-600 font-semibold px-5 py-2 rounded-xl hover:scale-105 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

   
      <section className="mt-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Popular Products
          </h2>

          <span className="text-sm text-orange-500 font-medium cursor-pointer">
            View All
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-2"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

    
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Summer Care Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition border border-orange-100">
            <h3 className="font-semibold text-lg text-orange-600">
              Stay Hydrated
            </h3>
            <p className="text-sm text-gray-600 mt-2 leading-6">
              Drink enough water to stay fresh and active during hot summer days.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition border border-orange-100">
            <h3 className="font-semibold text-lg text-orange-600">
              Use Sunscreen
            </h3>
            <p className="text-sm text-gray-600 mt-2 leading-6">
              Protect your skin from UV rays with a good SPF sunscreen.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition border border-orange-100">
            <h3 className="font-semibold text-lg text-orange-600">
              Wear Light Clothes
            </h3>
            <p className="text-sm text-gray-600 mt-2 leading-6">
              Breathable cotton clothes help keep you cool and comfortable.
            </p>
          </div>
        </div>
      </section>

     
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Top Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["SunShade", "BeachWalk", "CoolWear", "SummerGo"].map((brand) => (
            <div
              key={brand}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition border border-gray-100 font-semibold text-gray-800"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}