import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { NewsletterSection } from "@/components/layout/newsletter-section";
import { PageLoadingIndicator } from "@/components/ui/page-loading-indicator";
import { BackToTop } from "@/components/ui/back-to-top";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://stoxwear.nl"),
  title: {
    default: "STOX | Mode Boutique",
    template: "%s | STOX Boutique",
  },
  description: "Ontdek zorgvuldig geselecteerde mode voor de veeleisende klant bij STOX, de premier mode boutique in Elsloo.",
  keywords: ["mode", "boutique", "Elsloo", "kleding", "designer", "STOX", "fashion", "damesmode", "herenmode"],
  authors: [{ name: "STOX" }],
  creator: "STOX Boutique",
  publisher: "STOX Boutique",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: "https://stoxwear.nl",
    languages: {
      'nl-NL': "https://stoxwear.nl",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://stoxwear.nl",
    siteName: "STOX Boutique",
    title: "STOX | Mode Boutique",
    description: "Ontdek zorgvuldig geselecteerde mode voor de veeleisende klant bij STOX, de premier mode boutique in Elsloo.",
    images: [
      {
        url: "/images/pexels-karolina-grabowska-6275959.webp",
        width: 1200,
        height: 630,
        alt: "STOX boutique interieur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STOX | Mode Boutique",
    description: "Ontdek zorgvuldig geselecteerde mode voor de veeleisende klant bij STOX, de premier mode boutique in Elsloo.",
    images: ["/images/pexels-karolina-grabowska-6275959.webp"],
    creator: "@stox",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Arimo Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <PageLoadingIndicator />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <NewsletterSection />
          <SiteFooter />
        </div>
        <BackToTop />
        
        {/* Structured Data */}
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "STOX Boutique",
              "url": "https://stoxwear.nl",
              "logo": "https://stoxwear.nl/logo.png",
              "image": "https://stoxwear.nl/images/pexels-cottonbro-5263319.webp",
              "description": "Exclusieve mode boutique in Elsloo met zorgvuldig geselecteerde collecties.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Stationsstraat 84",
                "addressLocality": "Elsloo",
                "postalCode": "6181 AK",
                "addressCountry": "NL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.947362",
                "longitude": "5.764187"
              },
              "telephone": "+31464371487",
              "email": "info@stox.nl",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
                  "opens": "10:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Friday",
                  "opens": "10:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ],
              "priceRange": "€€€",
              "sameAs": [
                "https://www.instagram.com/stox",
                "https://www.facebook.com/stoxboutique"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
