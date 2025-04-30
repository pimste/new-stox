import Link from "next/link";
import { ShoppingCart, User, Search } from "lucide-react";

import { cn, colorClasses } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const mainNavItems = [
  {
    title: "New Arrivals",
    href: "/products/new-arrivals",
  },
  {
    title: "Women",
    href: "/products/women",
  },
  {
    title: "Men",
    href: "/products/men",
  },
  {
    title: "Accessories",
    href: "/products/accessories",
  },
  {
    title: "Sale",
    href: "/products/sale",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-[hsl(var(--primary))]",
                  "text-black dark:text-white"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">STOX</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Account">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[10px] font-medium text-white">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
} 