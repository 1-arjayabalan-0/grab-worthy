export const revalidate = 86400;

import { Inter, Fraunces } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({
  subsets: ["latin"],
  variable: "--app-font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--app-font-serif",
  display: "swap",
});
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Grab Worthy - Editorial Affiliate Journal",
    template: "%s | Grab Worthy",
  },
  description:
    "A quietly luxurious editorial magazine recommending practical Amazon finds for the home, kitchen, desk, organization, beauty, travel, and lifestyle.",
  metadataBase: new URL("https://grabworthy.codarivu.com"),
  verification: {
    google: 'cWbG2nIb2Zeyu4_3DjbZQERidDmzsMfJTLcl2Ih0ED8',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grabworthy.codarivu.com",
    siteName: "Grab Worthy",
    title: "Grab Worthy - Editorial Affiliate Journal",
    description:
      "A quietly luxurious editorial magazine recommending practical Amazon finds for the home, kitchen, desk, organization, beauty, travel, and lifestyle.",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Grab Worthy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grab Worthy - Editorial Affiliate Journal",
    description:
      "A quietly luxurious editorial magazine recommending practical Amazon finds for the home, kitchen, desk, organization, beauty, travel, and lifestyle.",
    images: ["/opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Grab Worthy",
              url: "https://grabworthy.codarivu.com",
              logo: "https://grabworthy.codarivu.com/opengraph.jpg",
              description:
                "Editorial affiliate journal recommending practical Amazon finds for home, kitchen, desk, organization, beauty, travel, and lifestyle.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Grab Worthy",
              url: "https://grabworthy.codarivu.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://grabworthy.codarivu.com/blog/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <TooltipProvider>
          <div className="min-h-[100dvh] flex flex-col font-sans bg-background text-foreground">
            <Navbar />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </body>
      {
        process.env.NEXT_ENV === "production" && (
          <Analytics />
        )
      }
    </html>
  );
}