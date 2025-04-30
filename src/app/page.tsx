import { Metadata } from "next";
import { HeroSection } from "@/components/layout/hero-section";
import { HomeContent } from "@/components/layout/home-content";

export const metadata: Metadata = {
  title: "STOX | Exclusieve Mode Boutique Elsloo",
  description: "Ontdek STOX, een premium mode boutique in Elsloo met zorgvuldig geselecteerde collecties en persoonlijk stijladvies voor de verfijnde garderobes.",
  keywords: [
    "STOX",
    "mode",
    "boutique",
    "Elsloo",
    "premium",
    "kleding",
    "styling",
    "personal shopping",
    "designer",
    "fashion",
  ],
  alternates: {
    canonical: "https://stoxwear.nl"
  }
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HomeContent />
    </div>
  );
}
