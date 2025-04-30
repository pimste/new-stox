import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { ProtectedContact } from "@/components/ui/protected-contact";
import { buttonVariants } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 text-sm">
            <p className="text-base font-medium tracking-tight">STOX</p>
            <p className="max-w-xs text-muted-foreground">
              STOX biedt geen standaardcollectie, maar het beste van gerenommeerde merken die passen bij jouw stijl.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.instagram.com/stoxelsloo/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary p-2 text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.facebook.com/stox.menwomen/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary p-2 text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-muted-foreground hover:text-foreground">
                  Collecties
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="text-muted-foreground hover:text-foreground">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Juridisch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacybeleid" className="text-muted-foreground hover:text-foreground">
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link href="/algemene-voorwaarden" className="text-muted-foreground hover:text-foreground">
                  Algemene Voorwaarden
                </Link>
              </li>
              <li>
                <Link href="/cookiebeleid" className="text-muted-foreground hover:text-foreground">
                  Cookiebeleid
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground">
                Stationsstraat 84<br />
                6181 AK Elsloo<br />
                Nederland
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <ProtectedContact 
                  type="email" 
                  value="info@stox.nl" 
                  className="hover:text-foreground"
                />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <ProtectedContact 
                  type="phone" 
                  value="046 437 14 87" 
                  className="hover:text-foreground"
                />
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} STOX Boutique. Alle rechten voorbehouden.
          </p>
          <p className="mt-2 text-xs text-muted-foreground italic md:mt-0">
            Met Elsloose trots gemaakt door Elsloose handen
          </p>
        </div>
      </div>
    </footer>
  );
} 