"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Voer een geldig e-mailadres in");
      return;
    }
    
    setStatus("loading");
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Er is iets misgegaan. Probeer het later opnieuw.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Er is iets misgegaan. Probeer het later opnieuw.");
      console.error("Newsletter subscription error:", error);
    }
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Blijf op de hoogte
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meld je aan voor onze nieuwsbrief en ontvang als eerste updates over nieuwe collecties, exclusieve events en styling tips.
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubscribe}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="Je e-mailadres"
                className="h-12 px-4 w-full rounded-md bg-white"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                disabled={status === "loading" || status === "success"}
                aria-label="E-mailadres voor nieuwsbrief"
              />
              {status === "error" && (
                <p className="absolute -bottom-6 left-0 text-sm text-red-500">
                  {errorMessage}
                </p>
              )}
            </div>
            <Button 
              type="submit" 
              className="h-12 px-8 rounded-md flex items-center gap-2 whitespace-nowrap transition-all duration-300"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verwerken...
                </span>
              ) : status === "success" ? (
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Aangemeld!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Aanmelden
                  <SendIcon className="h-4 w-4" />
                </span>
              )}
            </Button>
          </motion.form>

          {status === "success" && (
            <motion.p 
              className="mt-4 text-sm text-green-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Bedankt voor je aanmelding! Controleer je inbox voor een bevestiging.
            </motion.p>
          )}

          <motion.p 
            className="mt-6 text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Door je aan te melden ga je akkoord met onze <a href="#" className="underline hover:text-foreground">privacyverklaring</a>. 
            Je kunt je op elk moment uitschrijven.
          </motion.p>
        </div>
      </div>
    </section>
  );
} 