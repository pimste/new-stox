import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Over Ons | STOX Boutique",
  description: "Ontdek het verhaal achter STOX, een boetiek die gespecialiseerd is in het selecteren van de beste kledingstukken van gerenommeerde merken.",
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">OVER ONS</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 text-balance">
          Het verhaal achter STOX, een passie voor stijl en perfecte pasvorm sinds 1997
        </p>
      </div>

      <div className="grid gap-16 md:gap-24">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-black">STOX biedt geen standaardcollectie!</h2>
            <p className="text-lg text-balance text-black">
              Wij selecteren het beste van gerenommeerde merken en creëren zo onze eigen collectie.
            </p>
            <p className="text-balance text-black">
              Opgericht in 1997 door het echtpaar Smeets, is STOX uitgegroeid van een kleine, gespecialiseerde modezaak tot een begrip in Elsloo en ver daarbuiten. Onze focus op persoonlijke service en unieke kledingstukken maakt ons anders dan standaard modewinkels.
            </p>
            <p className="text-balance text-black">
              Daarnaast verfrissen we wekelijks onze collectie met de allerleukste items uit Amsterdam, Brussel en Parijs. Niet alleen droommaten, maar eigentijdse outfits voor ieder kleedmoment.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg order-1 md:order-2">
            <Image 
              src="/images/pexels-cottonbro-5119526.webp"
              alt="STOX collectie - hoogwaardige materialen" 
              width={600} 
              height={800}
              className="h-auto w-full object-cover" 
            />
          </div>
        </section>

        <section className="bg-slate-50 -mx-4 md:-mx-6 px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black mb-8">MAATSERIES</h2>
            <p className="text-xl font-medium text-black mb-6">
              STOX voert maatseries met damesmaten van 34 tot en met 46.<br/>
              Bij de heren brengen wij deze brede maatseries tot en met xxxl, ook in lengtematen!
            </p>
            <p className="text-balance text-black">
              Onze ervaring leert dat niet iedereen gemakkelijk kleding vindt die perfect past. Daarom bieden wij een uitgebreide range aan maatseries, zodat iedereen bij STOX slaagt. Of je nu op zoek bent naar casual of formele kleding, onze collectie is samengesteld om een breed scala aan lichaamstypes en voorkeuren te bedienen.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-lg">
            <Image 
              src="/images/pexels-cottonbro-5263319.webp"
              alt="STOX boutique in Elsloo" 
              width={600} 
              height={450}
              className="h-auto w-full object-cover" 
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-black">GRATIS SERVICE</h2>
            <p className="text-lg text-balance text-black font-medium">
              Wist u dat maar 5% van alle Nederlanders de ideale confectiemaat heeft?<br/>
              Voor de 95% die dat niet heeft, biedt STOX een pasklare service.
            </p>
            <p className="text-balance text-black">
              Het vermaken van uw nieuwe kleding in ons eigen atelier is GRATIS!<br/>
              Zo kunt u genieten van een perfecte pasvorm...
            </p>
            <p className="text-balance text-black">
              Bij STOX begrijpen we dat een perfecte pasvorm essentieel is voor zowel comfort als stijl. Daarom bieden we gratis vermakingen aan voor alle aankopen in onze boutique. Onze ervaren kleermakers zorgen ervoor dat elk kledingstuk precies past bij uw lichaamsbouw en persoonlijke voorkeur.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 