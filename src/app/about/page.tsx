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

        <section className="bg-slate-50 -mx-4 md:-mx-6 px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black mb-6">ONS TEAM</h2>
            <p className="text-balance text-black mb-8">
              STOX wordt gedragen door een team van gepassioneerde modekenners die allemaal één doel delen: u helpen er op uw best uit te zien. Ons team combineert jarenlange ervaring met een scherp oog voor trends en materialen, waardoor we u het beste van beide werelden kunnen bieden - tijdloze elegantie en hedendaagse stijl.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Persoonlijk Advies</h3>
                <p className="text-sm text-muted-foreground">Onze stylisten nemen de tijd om uw persoonlijke stijl te begrijpen en te versterken</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Vakmanschap</h3>
                <p className="text-sm text-muted-foreground">Ons atelier met ervaren kleermakers zorgt voor de perfecte pasvorm</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Kwaliteitsgarantie</h3>
                <p className="text-sm text-muted-foreground">Wij selecteren alleen de beste materialen en afwerkingen voor onze collectie</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-black">BEZOEK ONS</h2>
            <p className="text-balance text-black">
              We nodigen u van harte uit om onze boutique in Elsloo te bezoeken. Ontdek zelf waarom STOX al meer dan 25 jaar een begrip is in de regio. Onze deur staat altijd open voor een vrijblijvend bezoek, persoonlijk stijladvies of gewoon een gezellig gesprek.
            </p>
            <p className="text-balance text-black">
              <strong>Locatie:</strong><br/>
              Stationsstraat 84<br/>
              6181 AK Elsloo<br/>
            </p>
            <p className="text-balance text-black">
              <strong>Openingstijden:</strong><br/>
              Maandag: 13:00 - 18:00<br/>
              Dinsdag-Vrijdag: 10:00 - 18:00<br/>
              Zaterdag: 10:00 - 17:00<br/>
              Zondag: Gesloten
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Opnemen
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg order-1 md:order-2">
            <Image 
              src="/images/autumn-coat.webp"
              alt="STOX collectie - luxe bovenkleding" 
              width={600} 
              height={800}
              className="h-auto w-full object-cover" 
            />
          </div>
        </section>

        <section className="bg-slate-50 -mx-4 md:-mx-6 px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black mb-6">VOLG ONS</h2>
            <p className="text-balance text-black mb-8">
              Blijf op de hoogte van onze nieuwste collecties, evenementen en aanbiedingen door ons te volgen op sociale media. Wij delen regelmatig inspiratie, stijltips en een kijkje achter de schermen van onze boutique.
            </p>
            <div className="flex gap-6 justify-center">
              <Link 
                href="https://www.instagram.com/stoxelsloo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white p-4 rounded-full hover:bg-primary/90 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="https://www.facebook.com/stox.menwomen/?locale=nl_NL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white p-4 rounded-full hover:bg-primary/90 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 