"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

const products = [
  {
    id: "basic",
    name: "Kravy Billing Basic",
    short: "Perfect for small shops starting digital billing.",
    price: 499,
    tag: "Most Affordable",
  },
  {
    id: "pos-pro",
    name: "Kravy POS Pro",
    short: "Full POS experience for busy counters and restaurants.",
    price: 899,
    tag: "Best for Restaurants",
  },
  {
    id: "inventory-addon",
    name: "Inventory Add-on",
    short: "Track stock, low alerts, and purchase planning.",
    price: 299,
    tag: "Inventory Control",
  },
  {
    id: "analytics-pro",
    name: "Analytics Pro",
    short: "Smart insights, best-seller reports, and growth trends.",
    price: 699,
    tag: "Growth Insights",
  },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Choose the right plan for your shop
        </h1>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Mix and match Kravy billing products based on your shop size, counter
          rush, and reporting needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#070818] shadow-md hover:shadow-xl transition-shadow p-5 flex flex-col"
          >
            <div className="absolute top-4 right-4 text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
              {p.tag}
            </div>

            <h2 className="text-lg font-semibold mb-1">{p.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {p.short}
            </p>

            <div className="mt-auto flex items-end justify-between gap-3">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Starting at
                </p>
                <p className="text-2xl font-bold">
                  ₹{p.price}
                  <span className="text-sm text-gray-500"> / month</span>
                </p>
              </div>

              <button
                onClick={() =>
                  addToCart({
                    id: p.id,
                    name: p.name,
                    price: p.price,
                  })
                }
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-semibold shadow-sm"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
