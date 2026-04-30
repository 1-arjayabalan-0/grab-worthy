export const dynamic = "force-dynamic";

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
  metadataBase: new URL("https://grab-worthy.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      <Analytics />
    </html>
  );
}