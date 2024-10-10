// app/api/products/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Mock product data
  const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: 39.99, image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: 49.99, image: "/images/product3.jpg" },
    { id: 4, name: "Product 4", price: 59.99, image: "/images/product4.jpg" },
  ];

  return NextResponse.json(products);
}
