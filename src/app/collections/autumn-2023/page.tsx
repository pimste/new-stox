import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Herfst Reflecties | STOX Boutique",
  description: "Ontdek onze Herfst/Winter 2023 collectie - luxe wol, gestructureerde silhouetten en ingetogen elegantie.",
};

export default function AutumnCollectionPage() {
  return (
    <div className="container py-12 md:py-16 px-4 md:px-6">
      <div className="mb-8">
        <Button asChild variant="ghost" className="group mb-6 text-black">
          <Link href="/collections" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Terug naar Collecties
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-black">Herfst Reflecties</h1>
        <p className="mt-2 text-lg text-muted-foreground">Herfst/Winter 2023</p>
      </div>
      
      <div className="space-y-4 mb-12 w-full overflow-hidden">
        <p className="text-lg text-black hyphens-auto overflow-wrap-anywhere">
          Een meditatie over textuur en vorm, onze herfst/winter collectie omarmt het rijke palet van de herfst met luxe wol, gestructureerde silhouetten en ingetogen elegantie.
        </p>
        <p className="text-black hyphens-auto overflow-wrap-anywhere">
          De collectie combineert tijdloze silhouetten met moderne details, waardoor elk stuk veelzijdig en draagbaar is. 
          Van fijn gebreide wollen truien tot gestructureerde jassen, onze ontwerpen bieden comfort zonder concessies 
          te doen aan stijl, zelfs in de koudste maanden.
        </p>
      </div>
      
      {/* Fotocollage van herfst collectie */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/autumn-coat.webp"
            alt="Herfst collectie jas"
            width={380}
            height={507}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/pexels-cottonbro-5119211.webp"
            alt="Herfst collectie gebreide items"
            width={380}
            height={507}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
      
      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold text-black">Collectie Kenmerken</h2>
        <ul className="list-disc pl-5 space-y-2 text-black">
          <li>Luxe wollen en cashmere stoffen voor optimaal comfort</li>
          <li>Rijke, aardse kleuren geïnspireerd door herfstlandschappen</li>
          <li>Gelaagde looks die veelzijdigheid bieden</li>
          <li>Gestructureerde silhouetten die elegantie uitstralen</li>
          <li>Tijdloze ontwerpen voor jarenlang draagplezier</li>
        </ul>
      </div>
      
      <div className="mt-16 flex justify-center">
        <Button asChild className="text-white">
          <Link href="/contact">Bezoek onze Boutique</Link>
        </Button>
      </div>
    </div>
  );
} 