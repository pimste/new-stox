"use client";

import { ProductCard } from "@/components/product/product-card";

// Sample data - in a real application, this would come from your CMS or API
const featuredProducts = [
  {
    id: "1",
    name: "Oversized Cotton T-Shirt",
    category: "Women",
    price: 29.99,
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop"],
    colors: ["#000000", "#FFFFFF", "#a9a9a9"],
    isFeatured: true,
    isNew: true,
  },
  {
    id: "2",
    name: "Slim Fit Wool Blazer",
    category: "Men",
    price: 149.99,
    images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop"],
    colors: ["#000000", "#2F4F4F"],
    isFeatured: true,
  },
  {
    id: "3",
    name: "High Waist Straight Jeans",
    category: "Women",
    price: 89.99,
    images: ["https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?q=80&w=1954&auto=format&fit=crop"],
    colors: ["#4169E1", "#191970"],
    isFeatured: true,
    isSale: true,
    discount: 20,
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    category: "Accessories",
    price: 129.99,
    images: ["https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1974&auto=format&fit=crop"],
    colors: ["#8B4513", "#000000"],
    isFeatured: true,
  },
];

export function FeaturedProducts() {
  return (
    <section className="container py-16 md:py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Featured Products
        </h2>
        <p className="mt-4 text-muted-foreground">
          Discover our carefully curated selection of the season's must-haves.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
} 