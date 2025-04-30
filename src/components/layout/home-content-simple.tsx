"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Gift, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

// Collection showcase items
const collections = [
  {
    id: 1,
    name: "Stijlvol Breiwerk",
    description: "Hoogwaardige materialen voor comfort en elegantie",
    image: "/images/pexels-cottonbro-5119526.webp"
  },
  {
    id: 2,
    name: "Luxe Bovenkleding",
    description: "Tijdloze designs voor een verfijnde silhouette",
    image: "/images/autumn-coat.webp"
  },
  {
    id: 3,
    name: "Exclusieve Accessoires",
    description: "Perfecte complementen voor iedere outfit",
    image: "/images/pexels-cottonbro-5119189.webp"
  }
];

// Customer testimonials
const testimonials = [
  {
    id: 1,
    name: "Anna Visser",
    quote: "Bij STOX voel ik me begrepen. Hun persoonlijke stijladvies heeft mijn garderobe volledig getransformeerd.",
    rating: 5,
    location: "Amsterdam"
  },
  {
    id: 2,
    name: "Martijn de Jong",
    quote: "De exclusieve collectie en persoonlijke aandacht maken STOX uniek. Elk bezoek is een bijzondere ervaring.",
    rating: 5,
    location: "Utrecht"
  },
  {
    id: 3,
    name: "Laura Bakker",
    quote: "Eindelijk een boutique die kwaliteit en stijl perfect combineert. Hun collectie is altijd verrassend en tijdloos elegant.",
    rating: 5,
    location: "Den Haag"
  }
];

export function HomeContentSimple() {
  return (
    <>
      {/* Boutique Introduction */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Onze Filosofie
                </p>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  De Kunst van Verfijnde Mode
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground text-balance">
                Bij STOX presenteren wij een zorgvuldig samengestelde collectie die het beste van tijdloze elegantie en hedendaagse stijl samenbrengt. Elk stuk vertelt een verhaal van vakmanschap en kwaliteit.
              </p>
              <p className="leading-relaxed text-muted-foreground text-balance">
                Onze boutique vernieuwt regelmatig met handgeselecteerde items uit de modehoofdsteden van Europa. Wij bieden niet alleen kleding, maar een volledige expressie van persoonlijke stijl, gekozen door kenners voor kenners.
              </p>
              <div className="pt-4 flex">
                <Button asChild variant="outline" className="group">
                  <Link href="/about" className="flex items-center gap-2">
                    Ontdek Ons Verhaal
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/pexels-karolina-grabowska-4711886.webp"
                alt="Elegant interieur van de STOX boutique"
                width={600}
                height={450}
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Collection Highlight */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Huidige Collectie
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Herfst Reflecties
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-balance">
              Onze herfst/winter collectie omvat een subtiel palet van rijke tinten, luxueuze stoffen en tijdloze silhouetten. Elke lijn is ontworpen voor de moderne kenner die kwaliteit en stijl op waarde schat.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg bg-white">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={85} 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg">{collection.name}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{collection.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button asChild className="group">
              <Link href="/collections" className="flex items-center gap-2">
                Verken Onze Collecties
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Visit CTA */}
      <section className="relative">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative aspect-video md:aspect-[2.5/1]">
          <Image
            src="/images/pexels-cottonbro-5263319.webp"
            alt="Stijlvolle gevel van de STOX boutique in Elsloo"
            fill
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </div>
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container">
            <div className="max-w-lg space-y-4 md:space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Bezoek Onze Boutique in Elsloo
              </h2>
              <p className="text-lg text-white/90 text-balance">
                Stap binnen in onze serene ruimte in Elsloo en ervaar onze collecties persoonlijk. Onze adviseurs verwelkomen u graag voor een stijlvolle ontdekkingsreis.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild className="bg-white text-black hover:bg-white/90 group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Vind Ons
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 