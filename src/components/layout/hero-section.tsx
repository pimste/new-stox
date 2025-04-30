"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlay with improved aesthetics */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        <Image
          src="/images/header.webp"
          alt="STOX boutique - exclusieve mode en persoonlijk stijladvies in Elsloo"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover scale-[1.02] transition-all duration-10000 ease-in-out hover:scale-[1.05]"
        />
      </div>

      <div className="absolute inset-0 z-20 flex items-center pt-0 md:pt-0 pb-0 md:pb-0">
        <div className="container">
          <motion.div 
            className="max-w-2xl space-y-4 md:space-y-6 px-6 md:px-8 mt-[-1rem] md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              <span className="block">Verfijnde Mode</span> 
              <span className="block mt-1 md:mt-2">Met Persoonlijke Benadering</span>
            </h1>
            <p className="text-lg text-white/90 md:text-xl text-balance">
              <span className="block md:hidden">
                Tijdloze stukken voor elegantie, comfort en persoonlijke expressie.
              </span>
              <span className="hidden md:block">
                STOX presenteert een zorgvuldig samengestelde collectie tijdloze stukken ontworpen voor elegantie, comfort en persoonlijke expressie.
              </span>
            </p>
            <motion.div 
              className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 pt-2 md:pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 transition-all duration-300 group">
                <Link href="/about" className="flex items-center gap-2">
                  Ontdek Ons Verhaal
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20 transition-all duration-300">
                <Link href="/collections">Bekijk Collecties</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 