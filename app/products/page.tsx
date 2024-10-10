// app/products/page.tsx
"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the API (we'll implement this next)
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Placeholder API call
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div key={product.id} className="border p-4 rounded-lg">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                <h2 className="mt-2 text-lg font-medium">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
