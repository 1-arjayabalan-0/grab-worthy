import React from 'react';
import Link from "next/link";
import { categories } from '@/data/categories';
import { NewsletterCTA } from './NewsletterCTA';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-4 lg:col-span-5">
            <h3 className="font-serif text-2xl mb-4 text-foreground">Grab Worthy</h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              A quietly luxurious editorial magazine recommending practical Amazon finds for the home, kitchen, desk, organization, beauty, travel, and lifestyle.
            </p>
            <p className="text-xs text-muted-foreground max-w-sm">
              As an Amazon Associate we earn from qualifying purchases. This means we may receive a small commission if you buy through our links, at no extra cost to you.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-foreground hover:underline decoration-border underline-offset-4">
                  View all articles &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <NewsletterCTA variant="minimal" />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/about" className="hover:text-foreground transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/affiliate-disclosure" className="hover:text-foreground transition-colors">Affiliate Disclosure</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Grab Worthy Editorial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}