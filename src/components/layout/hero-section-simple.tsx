"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSectionSimple() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlay with improved aesthetics */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        <Image
          src="/images/pexels-karolina-grabowska-6275959.webp"
          alt="STOX boutique interieur - exclusieve mode en persoonlijk stijladvies in Elsloo"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container">
          <div className="max-w-2xl space-y-6 px-4 md:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              <span className="block">Verfijnde Mode</span> 
              <span className="block mt-2">Met Persoonlijke Benadering</span>
            </h1>
            <p className="text-lg text-white/90 md:text-xl text-balance">
              STOX presenteert een zorgvuldig samengestelde collectie tijdloze stukken ontworpen voor elegantie, comfort en persoonlijke expressie.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 pt-2">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 transition-all duration-300 group">
                <Link href="/about" className="flex items-center gap-2">
                  Ontdek Ons Verhaal
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20 transition-all duration-300">
                <Link href="/collections">Bekijk Collecties</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 