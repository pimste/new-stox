import { HomeContentSimple } from "@/components/layout/home-content-simple";
import { HeroSectionSimple } from "@/components/layout/hero-section-simple";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Home | STOX Boutique",
  description: "Test page with simplified components",
};

export default function TestHomePage() {
  return (
    <div className="flex flex-col">
      <HeroSectionSimple />
      <HomeContentSimple />
    </div>
  );
} 