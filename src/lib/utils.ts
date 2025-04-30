import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Color utility functions to replace custom Tailwind classes
export const colorClasses = {
  // Text colors
  textPrimary: "text-[hsl(var(--primary))]",
  textSecondary: "text-[hsl(var(--secondary))]",
  textMuted: "text-[hsl(var(--muted-foreground))]",
  textForeground: "text-[hsl(var(--foreground))]",
  
  // Background colors
  bgPrimary: "bg-[hsl(var(--primary))]",
  bgSecondary: "bg-[hsl(var(--secondary))]",
  bgMuted: "bg-[hsl(var(--muted))]",
  bgBackground: "bg-[hsl(var(--background))]",
  
  // Border colors
  borderPrimary: "border-[hsl(var(--primary))]",
  borderSecondary: "border-[hsl(var(--secondary))]",
  borderMuted: "border-[hsl(var(--muted))]",
  borderDefault: "border-[hsl(var(--border))]",
  
  // Button variants
  buttonPrimary: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))/90]",
  buttonSecondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))/80]",
  buttonDestructive: "bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] hover:bg-[hsl(var(--destructive))/90]",
  buttonOutline: "border border-[hsl(var(--input))] bg-[hsl(var(--background))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]",
  buttonGhost: "hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]",
};

export function formatPrice(
  price: number,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "EUR", notation = "standard" } = options;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export function getInitials(name: string) {
  const parts = name.split(" ");
  let initials = "";

  if (parts.length === 1) {
    initials = parts[0].substring(0, 2);
  } else {
    for (let i = 0; i < Math.min(parts.length, 2); i++) {
      initials += parts[i].charAt(0);
    }
  }

  return initials.toUpperCase();
} 