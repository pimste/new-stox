import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { ProtectedContact } from "@/components/ui/protected-contact";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact | STOX Boutique",
  description: "Bezoek onze boutique in Elsloo of neem contact op met STOX. Vind onze locatie, openingstijden en contactgegevens.",
};

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Bezoek Ons</h1>
      
      <div className="grid gap-12 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-3">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/pexels-cottonbro-5263319.webp"
              alt="STOX boutique entrance in Elsloo"
              width={1200}
              height={675}
              quality={85}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="space-y-8 md:col-span-2">
          <div>
            <h2 className="text-xl font-semibold md:text-2xl">Elsloo Boutique</h2>
            <p className="mt-2 text-muted-foreground text-balance">
              Onze boutique bevindt zich in Elsloo en biedt een serene ruimte om onze collecties te ontdekken.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium">Adres</p>
                <p className="text-muted-foreground">
                  Stationsstraat 84<br />
                  6181 AK Elsloo<br />
                  Nederland
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium">Openingstijden</p>
                <p className="text-muted-foreground">
                  di - wo - do: 10.00 u - 17.00 u<br />
                  vrijdag: 10.00 u - 20.00 u<br />
                  zaterdag: 10.00 u - 17.00 u
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium">Telefoon</p>
                <div className="text-muted-foreground">
                  <ProtectedContact 
                    type="phone" 
                    value="046 437 14 87" 
                    showIcon={false}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium">Email</p>
                <div className="text-muted-foreground">
                  <ProtectedContact 
                    type="email" 
                    value="info@stox.nl" 
                    showIcon={false}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Instagram className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium">Social Media</p>
                <Link
                  href="https://www.instagram.com/stoxelsloo/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  @stoxelsloo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 overflow-hidden rounded-lg bg-primary/5 md:mt-24">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-xl font-semibold md:text-2xl">PRIVATE SHOPPEN?</h2>
            <p className="mt-3 text-muted-foreground text-balance">
              Liever de winkel voor je alleen? Geen Probleem!
            </p>
            <div className="mt-6 space-y-3">
              <p className="font-medium text-muted-foreground">Op dinsdag t/m donderdag, na 17.00 uur maken we heel graag tijd voor je.</p>
              <p className="font-medium mt-4 text-muted-foreground">Bel gerust!</p>
            </div>
            <div className="mt-6">
              <ProtectedContact 
                type="phone" 
                value="046 437 14 87" 
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              />
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src="/images/pexels-cottonbro-5119211.webp"
              alt="STOX boutique interieur"
              fill
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-16 md:mt-20">
        <h2 className="mb-6 text-xl font-semibold md:text-2xl">Locatie</h2>
        <div className="h-[350px] w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.698630186922!2d5.764187!3d50.947362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0c9e0c3c73ccf%3A0x9f3d2ff7d6b04a7e!2sStationsstraat%2084%2C%206181%20AK%20Elsloo!5e0!3m2!1sen!2snl!4v1645890721234!5m2!1sen!2snl" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="STOX locatie in Elsloo"
          ></iframe>
        </div>
      </div>
    </div>
  );
} 