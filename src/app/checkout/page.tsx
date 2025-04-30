"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, CreditCard, Check } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Sample cart data for checkout
const cartItems = [
  {
    id: "1",
    name: "Oversized Cotton T-Shirt",
    price: 29.99,
    color: "Black",
    size: "M",
    quantity: 1,
  },
  {
    id: "3",
    name: "High Waist Straight Jeans",
    price: 89.99 * 0.8, // 20% discount applied
    quantity: 1,
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    price: 129.99,
    quantity: 1,
  },
];

const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const shipping = 4.99;
const tax = subtotal * 0.21; // 21% VAT
const total = subtotal + shipping + tax;

export default function CheckoutPage() {
  const [step, setStep] = useState<"information" | "shipping" | "payment" | "confirmation">("information");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Netherlands",
    phone: "",
    shippingMethod: "standard",
    paymentMethod: "card",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "information") setStep("shipping");
    else if (step === "shipping") setStep("payment");
    else if (step === "payment") setStep("confirmation");
  };

  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <ol className="flex items-center">
          {[
            { name: "Information", value: "information" },
            { name: "Shipping", value: "shipping" },
            { name: "Payment", value: "payment" },
            { name: "Confirmation", value: "confirmation" },
          ].map((s, index) => (
            <li
              key={s.value}
              className={`flex items-center ${
                index < steps.indexOf(step) + 1
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                  index < steps.indexOf(step) + 1
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground"
                }`}
              >
                {index < steps.indexOf(step) ? (
                  <Check className="h-4 w-4" />
                ) : (
                  index + 1
                )}
              </span>
              <span className="ml-2 hidden text-sm font-medium md:inline">
                {s.name}
              </span>
              {index < 3 && (
                <div className="mx-3 h-0.5 w-8 bg-muted-foreground/30"></div>
              )}
            </li>
          ))}
        </ol>
      </div>
    );
  };

  const steps = ["information", "shipping", "payment", "confirmation"];

  return (
    <div className="container py-8 md:py-12">
      <Link
        href="/cart"
        className="mb-6 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to cart
      </Link>

      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      {renderStepIndicator()}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="md:col-span-2 lg:col-span-3">
          {step === "information" && (
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-medium">Contact Information</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="mb-1 block text-sm font-medium">
                        Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="Netherlands">Netherlands</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full md:w-auto">
                      Continue to Shipping
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {step === "shipping" && (
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-medium">Shipping Method</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex cursor-pointer items-center justify-between rounded-md border p-4 hover:bg-muted/50">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="standard"
                          checked={formData.shippingMethod === "standard"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-primary"
                        />
                        <div className="ml-3">
                          <span className="block font-medium">
                            Standard Shipping
                          </span>
                          <span className="block text-sm text-muted-foreground">
                            2-4 business days
                          </span>
                        </div>
                      </div>
                      <span className="font-medium">{formatPrice(4.99)}</span>
                    </label>

                    <label className="flex cursor-pointer items-center justify-between rounded-md border p-4 hover:bg-muted/50">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="express"
                          checked={formData.shippingMethod === "express"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-primary"
                        />
                        <div className="ml-3">
                          <span className="block font-medium">
                            Express Shipping
                          </span>
                          <span className="block text-sm text-muted-foreground">
                            1-2 business days
                          </span>
                        </div>
                      </div>
                      <span className="font-medium">{formatPrice(9.99)}</span>
                    </label>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full md:w-auto">
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {step === "payment" && (
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-medium">Payment Method</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex cursor-pointer items-center justify-between rounded-md border p-4 hover:bg-muted/50">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === "card"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-primary"
                        />
                        <div className="ml-3 flex items-center">
                          <CreditCard className="mr-2 h-5 w-5 text-muted-foreground" />
                          <span className="block font-medium">
                            Credit / Debit Card
                          </span>
                        </div>
                      </div>
                    </label>

                    <label className="flex cursor-pointer items-center justify-between rounded-md border p-4 hover:bg-muted/50">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === "paypal"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-primary"
                        />
                        <div className="ml-3">
                          <span className="block font-medium">PayPal</span>
                        </div>
                      </div>
                    </label>

                    <label className="flex cursor-pointer items-center justify-between rounded-md border p-4 hover:bg-muted/50">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="ideal"
                          checked={formData.paymentMethod === "ideal"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-primary"
                        />
                        <div className="ml-3">
                          <span className="block font-medium">iDEAL</span>
                        </div>
                      </div>
                    </label>
                  </div>

                  {formData.paymentMethod === "card" && (
                    <div className="space-y-4 rounded-md border p-4">
                      <div>
                        <label className="mb-1 block text-sm font-medium">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="**** **** **** ****"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="mb-1 block text-sm font-medium">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-sm font-medium">
                            CVC
                          </label>
                          <input
                            type="text"
                            placeholder="***"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <Button type="submit" className="w-full md:w-auto">
                      Place Order
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {step === "confirmation" && (
            <div className="rounded-lg border p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Order Confirmed!</h2>
              <p className="mb-6 text-muted-foreground">
                Thank you for your order. We've received your payment and will
                process your order shortly.
              </p>
              <p className="mb-8 text-muted-foreground">
                Order confirmation has been sent to{" "}
                <span className="font-medium text-foreground">
                  {formData.email}
                </span>
              </p>
              <Button asChild>
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border bg-muted/30 p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Order Summary</h2>
            <ul className="divide-y">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between py-2">
                  <div>
                    <p className="font-medium">
                      {item.name}
                      {item.quantity > 1 && ` (×${item.quantity})`}
                    </p>
                    {item.color && item.size && (
                      <p className="text-sm text-muted-foreground">
                        {item.color} / {item.size}
                      </p>
                    )}
                  </div>
                  <p className="font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (21% VAT)</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-medium">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 