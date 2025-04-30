"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

// Sample cart data - in a real app, this would come from your cart context/state
const initialCartItems = [
  {
    id: "1",
    name: "Oversized Cotton T-Shirt",
    price: 29.99,
    color: "Black",
    size: "M",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "High Waist Straight Jeans",
    price: 89.99,
    color: "Blue",
    size: "S",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?q=80&w=1954&auto=format&fit=crop",
    isSale: true,
    discount: 20,
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    price: 129.99,
    color: "Brown",
    size: "One Size",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      const itemPrice = item.isSale && item.discount
        ? item.price * (1 - item.discount / 100)
        : item.price;
      return sum + itemPrice * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 4.99;
  const total = subtotal + shipping;

  return (
    <div className="container py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-3">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <div className="flow-root">
                  <ul className="-my-6 divide-y">
                    {cartItems.map((item) => {
                      const itemPrice = item.isSale && item.discount
                        ? item.price * (1 - item.discount / 100)
                        : item.price;
                      
                      return (
                        <li key={item.id} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={96}
                              height={96}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium">
                                <h3>
                                  <Link
                                    href={`/product/${item.id}`}
                                    className="hover:text-primary"
                                  >
                                    {item.name}
                                  </Link>
                                </h3>
                                <p className="ml-4">
                                  {formatPrice(itemPrice * item.quantity)}
                                </p>
                              </div>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {item.color} / {item.size}
                              </p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <button
                                  className="rounded-md border px-2 py-1 text-muted-foreground hover:bg-muted"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  disabled={item.quantity <= 1}
                                >
                                  -
                                </button>
                                <span className="w-8 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  className="rounded-md border px-2 py-1 text-muted-foreground hover:bg-muted"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="flex items-center text-sm font-medium text-primary hover:text-primary/80"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <Trash2 className="mr-1 h-4 w-4" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-muted/30 p-6 shadow-sm">
            <h2 className="text-lg font-medium">Order Summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-t border-dashed pt-4">
                <dt className="text-sm text-muted-foreground">Subtotal</dt>
                <dd className="text-sm font-medium">
                  {formatPrice(subtotal)}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="flex items-center text-sm text-muted-foreground">
                  <span>Shipping</span>
                </dt>
                <dd className="text-sm font-medium">{formatPrice(shipping)}</dd>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <dt className="text-base font-medium">Total</dt>
                <dd className="text-base font-bold">{formatPrice(total)}</dd>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full" size="lg" asChild>
                <Link href="/checkout">
                  Proceed to Checkout
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed p-12 text-center">
          <h2 className="mb-4 text-xl font-medium">Your cart is empty</h2>
          <p className="mb-6 text-muted-foreground">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link href="/products/all">Continue Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
} 