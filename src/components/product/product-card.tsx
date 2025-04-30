"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { cn, formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
    images: string[];
    sizes?: string[];
    colors?: string[];
    isFeatured?: boolean;
    isNew?: boolean;
    isSale?: boolean;
    discount?: number;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = product.isSale && product.discount
    ? product.price * (1 - product.discount / 100)
    : null;
    
  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={300}
          height={400}
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
        <Button
          aria-label="Add to wishlist"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 rounded-full bg-white text-gray-900 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart className="h-5 w-5" />
        </Button>
        {product.isNew && (
          <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
            New
          </span>
        )}
        {product.isSale && (
          <span className="absolute left-2 top-2 rounded-full bg-destructive px-2 py-1 text-xs font-medium text-destructive-foreground">
            Sale
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 transition-colors hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="flex items-center gap-2">
          {discountedPrice ? (
            <>
              <p className="font-medium text-gray-900">
                {formatPrice(discountedPrice)}
              </p>
              <p className="text-sm text-gray-500 line-through">
                {formatPrice(product.price)}
              </p>
            </>
          ) : (
            <p className="font-medium text-gray-900">
              {formatPrice(product.price)}
            </p>
          )}
        </div>
        {product.colors && (
          <div className="flex gap-1 pt-2">
            {product.colors.map((color) => (
              <div
                key={color}
                className="h-4 w-4 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 