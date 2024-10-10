// app/api/products/[id]/route.ts
import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Product 1", price: 29.99, description: "Description for Product 1", image: "/images/product1.jpg" },
  { id: 2, name: "Product 2", price: 39.99, description: "Description for Product 2", image: "/images/product2.jpg" },
  { id: 3, name: "Product 3", price: 49.99, description: "Description for Product 3", image: "/images/product3.jpg" },
  { id: 4, name: "Product 4", price: 59.99, description: "Description for Product 4", image: "/images/product4.jpg" },
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
