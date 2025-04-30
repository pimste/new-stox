import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Collecties | STOX Boutique",
  description: "Ontdek onze zorgvuldig samengestelde collecties tijdloze modestukken bij STOX. Ervaar eigentijdse elegantie in ons seizoensaanbod.",
  openGraph: {
    title: "Collecties | STOX Boutique",
    description: "Ontdek onze zorgvuldig samengestelde collecties tijdloze modestukken bij STOX.",
    images: [
      {
        url: "/images/pexels-karolina-grabowska-6275959.webp",
        width: 1200,
        height: 630,
        alt: "STOX collectie overzicht",
      },
    ],
  },
};

const collections = [
  {
    id: "autumn-2023",
    title: "Herfst Reflecties",
    subtitle: "Herfst/Winter 2023",
    description: "Een meditatie over textuur en vorm, onze herfst/winter collectie omarmt het rijke palet van de herfst met luxe wol, gestructureerde silhouetten en ingetogen elegantie.",
    image: "/images/autumn-coat.webp",
    featured: true,
  },
  {
    id: "spring-2025",
    title: "Serene Horizonten",
    subtitle: "Lente/Zomer 2025",
    description: "Geïnspireerd door kustlandschappen, deze collectie bevat vloeiende stoffen in gedempte tinten, die een moeiteloze harmonie creëren tussen verfijning en comfort.",
    image: "/images/pexels-cottonbro-5119526.webp",
  },
  {
    id: "essentials",
    title: "Tijdloze Essentials",
    subtitle: "Basis Collectie",
    description: "De basis van elke verfijnde garderobe, onze essentials collectie presenteert zorgvuldig vervaardigde basisstukken die seizoenen en trends overstijgen.",
    image: "/images/pexels-cottonbro-5119189.webp",
  },
];

export default function CollectionsPage() {
  return (
    <div className="container py-12 md:py-16 px-4 md:px-6">
      <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-black">Collecties</h1>
      
      <div className="space-y-6">
        <p className="text-lg md:text-xl text-balance text-black">
          Ontdek onze zorgvuldig samengestelde collecties die elegantie, kwaliteit en tijdloze stijl verenigen.
        </p>
        <p className="text-muted-foreground text-balance">
          Elke STOX collectie vertelt een eigen verhaal door zorgvuldig geselecteerde stoffen, doordachte silhouetten en een niet-aflatende toewijding aan kwaliteit. Onze stukken zijn ontworpen om gekoesterde componenten van uw garderobe te worden, die seizoen na seizoen meegaan.
        </p>
      </div>
      
      {/* Main Collection */}
      <div className="mt-12 md:mt-16">
        <div className="relative overflow-hidden rounded-lg bg-muted">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-muted-foreground">{collections[0].subtitle}</div>
              <h2 className="mt-1 text-2xl font-medium md:text-3xl">{collections[0].title}</h2>
              <p className="mt-4 text-muted-foreground text-balance">
                {collections[0].description}
              </p>
              <Button asChild className="mt-6 text-white">
                <Link href={`/collections/${collections[0].id}`}>Ontdek Collectie</Link>
              </Button>
            </div>
            <div className="relative aspect-square md:aspect-auto">
              <Image
                src={collections[0].image}
                alt={`${collections[0].title} collectie door STOX`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Other Collections */}
      <div className="grid gap-10 md:grid-cols-2">
        {collections.filter(c => !c.featured).map(collection => (
          <div key={collection.id} className="group overflow-hidden rounded-lg border">
            <div className="relative aspect-[4/3]">
              <Image
                src={collection.image}
                alt={`${collection.title} collectie door STOX`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="text-sm uppercase tracking-wider text-muted-foreground">{collection.subtitle}</div>
              <h3 className="mt-1 text-2xl font-medium">{collection.title}</h3>
              <p className="mt-3 text-muted-foreground">
                {collection.description}
              </p>
              <Button asChild variant="outline" className="mt-6 text-black">
                <Link href={`/collections/${collection.id}`}>Ontdek Collectie</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 rounded-lg border border-muted bg-muted/20 p-8 text-center md:p-12">
        <h2 className="text-xl font-medium md:text-2xl">Bezoek Onze Boutique</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Ervaar onze collecties persoonlijk, waar onze ervaren stylisten u door elk stuk kunnen begeleiden en helpen een gepersonaliseerde garderobe te creëren die uw unieke stijl weerspiegelt.
        </p>
        <Button asChild className="mt-6">
          <Link href="/contact">Maak een Afspraak</Link>
        </Button>
      </div>
    </div>
  );
} 