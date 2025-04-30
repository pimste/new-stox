import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Debug Page | STOX Boutique",
  description: "Minimal debug page without complex components",
};

export default function DebugPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Debug Page</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="mb-4">This is a simple page with minimal components for debugging.</p>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
        
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="/images/autumn-coat.webp"
            alt="Autumn coat"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
} 