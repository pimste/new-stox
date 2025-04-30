"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Women",
    image: "https://images.unsplash.com/photo-1525450824786-227cbef70703?q=80&w=1974&auto=format&fit=crop",
    href: "/products/women",
    position: "left",
  },
  {
    name: "Men",
    image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1974&auto=format&fit=crop",
    href: "/products/men",
    position: "center",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=1970&auto=format&fit=crop",
    href: "/products/accessories",
    position: "right",
  },
];

export function CategoriesSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Shop by Category
        </h2>
        <p className="mt-4 text-muted-foreground">
          Explore our carefully curated collections for every occasion.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="relative aspect-square md:aspect-[4/5]">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className={cn(
                  "object-cover transition-transform duration-300 group-hover:scale-105",
                  category.position === "left" && "object-left",
                  category.position === "center" && "object-center",
                  category.position === "right" && "object-right"
                )}
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 