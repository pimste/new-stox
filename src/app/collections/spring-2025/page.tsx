import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Serene Horizonten | STOX Boutique",
  description: "Ontdek onze Lente/Zomer 2025 collectie - vloeiende stoffen in gedempte tinten, harmonie tussen verfijning en comfort.",
};

export default function SpringCollectionPage() {
  return (
    <div className="container py-12 md:py-16 px-4 md:px-6">
      <div className="mb-8">
        <Button asChild variant="ghost" className="group mb-6 text-black">
          <Link href="/collections" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Terug naar Collecties
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-black">Serene Horizonten</h1>
        <p className="mt-2 text-lg text-muted-foreground">Lente/Zomer 2025</p>
      </div>
      
      <div className="space-y-6 mb-12">
        <p className="text-lg text-balance text-black">
          Geïnspireerd door kustlandschappen, deze collectie bevat vloeiende stoffen in gedempte tinten, die een moeiteloze harmonie creëren tussen verfijning en comfort.
        </p>
        <p className="text-balance text-black">
          Onze Lente/Zomer 2025 collectie weerspiegelt de kalmte en het licht van het seizoen. 
          Luchtige stoffen bewegen soepel mee, terwijl zachte kleuren rust en sereniteit uitstralen. 
          Perfect voor warme dagen en koele avonden, elk stuk is ontworpen om veelzijdigheid en stijl te bieden.
        </p>
      </div>
      
      {/* Fotocollage van lente/zomer collectie */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        <div className="col-span-2 overflow-hidden rounded-lg">
          <Image
            src="/images/lente/maite-onate--kxS-ws_2ZI-unsplash.webp"
            alt="Lente collectie - lichtgewicht items"
            width={500}
            height={375}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/lente/kristina-davliud-r349DBmuefU-unsplash.webp"
            alt="Lente collectie - gedempte tinten"
            width={240}
            height={360}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/lente/pew-nguyen-Ffk7pQkms8A-unsplash.webp"
            alt="Lente collectie - lichte stoffen"
            width={240}
            height={360}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="col-span-2 overflow-hidden rounded-lg">
          <Image
            src="/images/lente/edrei-ramos-Da_kkJY608s-unsplash.webp"
            alt="Lente collectie - zomerse outfit"
            width={500}
            height={375}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="col-span-3 overflow-hidden rounded-lg mt-3 md:mt-4">
          <Image
            src="/images/lente/retno-budihatni-WBGe26rO7FE-unsplash.webp"
            alt="Lente collectie - volledige outfit"
            width={800}
            height={333}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
      
      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold text-black">Collectie Kenmerken</h2>
        <ul className="list-disc pl-5 space-y-2 text-black">
          <li>Lichte, ademende stoffen perfect voor de warmere dagen</li>
          <li>Zachte, serene kleuren geïnspireerd door kustlandschappen</li>
          <li>Comfortabele silhouetten die bewegingsvrijheid bieden</li>
          <li>Veelzijdige stukken die gemakkelijk te combineren zijn</li>
          <li>Duurzame materialen met respect voor het milieu</li>
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