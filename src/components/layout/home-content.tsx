"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Gift, Users } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

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
    name: "Harrie Lambrichts",
    quote: "Prima zaak goede service en te gekke kleding 👍 zeker bezoeken 👍",
    rating: 5
  },
  {
    id: 2,
    name: "Jeroen Halmans",
    quote: "Altijd super geholpen. Vriendelijke eigenaars staan met kennis en kunde paraat!",
    rating: 5
  },
  {
    id: 3,
    name: "Guido Smeets",
    quote: "Wil je goed gekleed volgens de huidige mode de straat op gaan zul je zeker bij deze klantvriendelijke zaak eens binnen moeten lopen.",
    rating: 5
  }
];

export function HomeContent() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Boutique Introduction with Animations */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={fadeInUp}
            >
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
              <motion.div 
                className="pt-4 flex"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Button asChild variant="outline" className="group text-black">
                  <Link href="/about" className="flex items-center gap-2">
                    Ontdek Ons Verhaal
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/pexels-cottonbro-6069553.webp"
                alt="Exclusieve mode collectie in de STOX boutique"
                width={600}
                height={450}
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-cover transition-all duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Collection Highlight */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Huidige Collectie
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Herfst Reflecties
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-balance">
              Onze herfst/winter collectie omvat een subtiel palet van rijke tinten, luxueuze stoffen en tijdloze silhouetten. Elke lijn is ontworpen voor de moderne kenner die kwaliteit en stijl op waarde schat.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild className="group">
              <Link href="/collections" className="flex items-center gap-2">
                Verken Onze Collecties
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Key Benefits */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Persoonlijk Advies</h3>
              <p className="text-sm text-muted-foreground text-balance">
                Onze modeadviseurs staan klaar om u te helpen uw persoonlijke stijl te verfijnen
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Exclusieve Collecties</h3>
              <p className="text-sm text-muted-foreground text-balance">
                Regelmatig vernieuwde, beperkte collecties van de meest gerenommeerde ontwerpers
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Gratis Vermaken</h3>
              <p className="text-sm text-muted-foreground text-balance">
                Professionele aanpassingen voor een perfecte pasvorm bij aankoop in onze boutique
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Customer Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Klantervaringen
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Stemmen van Onze Gasten
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="rounded-lg border p-6 shadow-sm bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-4 italic text-muted-foreground text-balance">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Highlight */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Onze Diensten
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Gepersonaliseerde Ervaring
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-balance">
              STOX gaat verder dan het aanbieden van mode. Wij creëren een ervaring op maat die ervoor zorgt dat elk kledingstuk niet alleen past bij uw lichaam, maar ook bij uw levensstijl en persoonlijkheid.
            </p>
          </motion.div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            <motion.div 
              className="rounded-lg border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-medium">Persoonlijke Styling</h3>
              <p className="mt-3 text-muted-foreground text-balance">
                Onze ervaren stylisten bieden privéconsultaties om collecties en items te presenteren die uw persoonlijke stijl en levensstijl perfect complementeren.
              </p>
            </motion.div>
            
            <motion.div 
              className="rounded-lg border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-medium">Maatwerk Aanpassingen</h3>
              <p className="mt-3 text-muted-foreground text-balance">
                Bij STOX bieden wij gratis professionele aanpassingen om de pasvorm van uw nieuwe kleding te perfectioneren, uitgevoerd door onze vakkundige kleermakers.
              </p>
            </motion.div>
            
            <motion.div 
              className="rounded-lg border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium">Garderobe Consultatie</h3>
              <p className="mt-3 text-muted-foreground text-balance">
                Laat onze stylisten uw bestaande garderobe analyseren en aanbevelingen doen voor nieuwe stukken die uw collectie verfijnen en verrijken.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 flex justify-center lg:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild variant="outline" className="group text-black">
              <Link href="/contact" className="flex items-center gap-2">
                Maak Een Afspraak
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Visit CTA */}
      <section className="relative">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative aspect-[9/8] sm:aspect-video md:aspect-[3.5/1]">
          <Image
            src={isMobile ? "/images/pexels-karolina-grabowska-6275959.webp" : "/images/pexels-cottonbro-5263319.webp"}
            alt="Stijlvolle gevel van de STOX boutique in Elsloo"
            fill
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </div>
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container">
            <motion.div 
              className="max-w-lg space-y-4 md:space-y-6 mx-auto md:ml-auto md:mr-0 text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
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
                <Button asChild className="bg-transparent border-2 border-white text-white hover:bg-white/20">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}