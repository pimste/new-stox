"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Instagram, Facebook } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Collecties", href: "/collections" },
  { name: "Over Ons", href: "/over-ons" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="container flex h-16 items-center justify-between px-4 md:h-20 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-bold md:flex md:w-auto">
            STOX
          </Link>

          <nav className="ml-10 hidden md:flex md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Brand Logo in the middle - visible on all devices */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center z-10">
          <Link href="/" className="font-arimo text-3xl md:text-5xl font-bold tracking-wider text-black hover:scale-105 transition-transform duration-300">
            STOX
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://www.instagram.com/stoxelsloo/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.facebook.com/stox.menwomen/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
          
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "hidden md:inline-flex"
            )}
          >
            Maak Afspraak
          </Link>

          <button
            type="button"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open hoofdmenu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile menu with improved animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
              <Link href="/" className="flex items-center font-bold">
                STOX
              </Link>
              
              {/* Brand Logo in the middle - kept visible in mobile menu */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <Link href="/" className="font-arimo text-3xl font-bold tracking-wider text-black hover:scale-105 transition-transform duration-300">
                  STOX
                </Link>
              </div>
              
              <button
                type="button"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Sluit hoofdmenu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div>
              <div className="container mt-16 space-y-5 py-6 px-4 md:px-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-xl font-medium text-foreground transition-colors hover:text-muted-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Maak Afspraak
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="mt-8 flex justify-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <Link
                    href="https://www.instagram.com/stoxelsloo/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-muted p-3 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/stox.menwomen/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-muted p-3 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 