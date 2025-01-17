"use client";
// app/products/[id]/page.tsx
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Rating from "@/app/components/Rating";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {rate: number, count: number};
};

export default function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();

        console.log(data,"product")
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        router.push("/products"); // Redirect if the product is not found
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id, router]);
  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <main className="p-8">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-auto object-cover"
        />
        <div className="flex flex-col flex-1">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <Rating initialRating={product.rating.rate} totalStars={5} />
          <p className="mt-2 text-gray-600">${product.price.toFixed(2)}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </main>
  );
}
