import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tijdloze Essentials | STOX Boutique",
  description: "Ontdek onze Tijdloze Essentials - de basis van elke verfijnde garderobe met zorgvuldig vervaardigde basisstukken.",
};

export default function EssentialsCollectionPage() {
  return (
    <div className="container py-12 md:py-16 px-4 md:px-6">
      <div className="mb-8">
        <Button asChild variant="ghost" className="group mb-6 text-black">
          <Link href="/collections" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Terug naar Collecties
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-black">Tijdloze Essentials</h1>
        <p className="mt-2 text-lg text-muted-foreground">Basis Collectie</p>
      </div>
      
      <div className="space-y-6 mb-12">
        <p className="text-lg text-balance text-black">
          De basis van elke verfijnde garderobe, onze essentials collectie presenteert zorgvuldig vervaardigde basisstukken die seizoenen en trends overstijgen.
        </p>
        <p className="text-balance text-black">
          Onze essentials zijn ontworpen om de hoeksteen van uw garderobe te vormen. 
          Gemaakt van duurzame, hoogwaardige materialen die hun vorm behouden en met de tijd mooier worden. 
          Elk stuk is doordacht ontworpen voor maximale veelzijdigheid en draagcomfort.
        </p>
      </div>
      
      {/* Fotocollage van essentials collectie */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/basiscollectie/maite-onate--kxS-ws_2ZI-unsplash.webp"
            alt="Essentials collectie - tijdloze jurk"
            width={300}
            height={450}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/basiscollectie/edith-hulcoop-YCz_vbe14r8-unsplash.webp"
            alt="Essentials collectie - basis items"
            width={300}
            height={300}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/basiscollectie/nilufar-nattaq-AthqJqqG1Yk-unsplash.webp"
            alt="Essentials collectie - casual chic"
            width={300}
            height={300}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="col-span-3 mt-3 md:mt-4 grid grid-cols-2 gap-3 md:gap-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/basiscollectie/retno-budihatni-WBGe26rO7FE-unsplash.webp"
              alt="Essentials collectie - perfecte pasvorm"
              width={400}
              height={267}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/basiscollectie/mahaya-moradi-WLI1GCl_frU-unsplash.webp"
              alt="Essentials collectie - tijdloze elegantie"
              width={400}
              height={267}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-3 overflow-hidden rounded-lg mt-3 md:mt-4">
          <Image
            src="/images/basiscollectie/tian-dayong-CztYfHeb_Ow-unsplash.webp"
            alt="Essentials collectie - verfijnde details"
            width={800}
            height={333}
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </div>
      
      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold text-black">Collectie Kenmerken</h2>
        <ul className="list-disc pl-5 space-y-2 text-black">
          <li>Tijdloze ontwerpen die nooit uit de mode raken</li>
          <li>Hoogwaardige natuurlijke materialen voor comfort en duurzaamheid</li>
          <li>Neutrale kleurenpalet voor eindeloze combinatiemogelijkheden</li>
          <li>Perfecte pasvorm voor verschillende lichaamstypes</li>
          <li>Veelzijdige stukken die van casual tot formeel gedragen kunnen worden</li>
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