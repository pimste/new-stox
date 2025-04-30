"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const sampleProduct = {
  id: "1",
  name: "Oversized Cotton T-Shirt",
  description:
    "This premium oversized T-shirt is crafted from 100% organic cotton for exceptional comfort and durability. Its relaxed fit offers a contemporary silhouette that pairs effortlessly with your favorite jeans or skirts. Perfect for everyday wear, this versatile piece features reinforced seams and a ribbed neckline that retains its shape wash after wash.",
  price: 29.99,
  category: "Women",
  images: [
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?q=80&w=1954&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["#000000", "#FFFFFF", "#a9a9a9"],
  colorNames: ["Black", "White", "Gray"],
  isFeatured: true,
  isNew: true,
  material: "100% Organic Cotton",
  care: "Machine wash cold, Tumble dry low, Do not bleach",
  relatedProductIds: ["2", "3", "4"],
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productId = params.id;
  // In a real app, fetch product by ID from API
  const product = sampleProduct;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }
    
    // In a real app, add to cart logic
    console.log("Added to cart:", {
      product,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/products/women" className="hover:text-foreground">
            Women
          </Link>{" "}
          / <span>{product.name}</span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={product.images[currentImageIndex] || "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop"}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.isNew && (
                <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                  New
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-md ${
                    currentImageIndex === index
                      ? "ring-2 ring-primary"
                      : "ring-1 ring-border hover:ring-muted-foreground"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="mt-2 text-xl font-medium">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="mb-2 text-sm font-medium">Color: {product.colorNames && selectedColor ? product.colorNames[product.colors.indexOf(selectedColor)] : ''}</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={color}
                    className={`h-8 w-8 rounded-full border ${
                      selectedColor === color
                        ? "ring-2 ring-primary ring-offset-2"
                        : "ring-1 ring-border hover:ring-muted-foreground"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select color: ${product.colorNames?.[index] || color}`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="mb-2 flex justify-between">
                <h3 className="text-sm font-medium">Size</h3>
                <button className="text-sm text-primary hover:underline">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-input hover:bg-muted"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="mb-2 text-sm font-medium">Quantity</h3>
              <div className="flex max-w-[150px] items-center rounded-md border">
                <button
                  className="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <div className="flex h-9 w-9 items-center justify-center">
                  {quantity}
                </div>
                <button
                  className="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:bg-muted"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Product Description */}
            <div className="space-y-4 pt-4">
              <div className="border-t pt-4">
                <h3 className="mb-2 font-medium">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              <div className="border-t pt-4">
                <h3 className="mb-2 font-medium">Material</h3>
                <p className="text-muted-foreground">{product.material}</p>
              </div>
              <div className="border-t pt-4">
                <h3 className="mb-2 font-medium">Care Instructions</h3>
                <p className="text-muted-foreground">{product.care}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 