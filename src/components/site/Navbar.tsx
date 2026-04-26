"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/categories";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-background py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-2xl font-medium tracking-tight text-foreground"
        >
          Grab Worthy
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/blog" className="hover:text-foreground transition-colors">
            All Articles
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-foreground transition-colors py-2">
              Categories <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-card border border-border shadow-lg rounded-md w-48 overflow-hidden flex flex-col">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/category/${c.slug}`}
                    className="px-4 py-3 hover:bg-muted text-sm text-foreground transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[70vh] border-t" : "max-h-0 border-t-0"
          }`}
      >
        <div className="flex flex-col p-4 gap-4">
          <Link href="/blog" className="text-lg font-serif">
            All Articles
          </Link>
          <div className="h-px bg-border/50" />
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
            Categories
          </div>
          <div className="grid grid-cols-2 gap-3 pl-2">
            {categories.map((c) => (
              <Link key={c.slug} href={`/category/${c.slug}`} className="text-sm">
                {c.shortLabel}
              </Link>
            ))}
          </div>
          <div className="h-px bg-border/50 mt-2" />
          <Link href="/about" className="text-lg font-serif">
            About
          </Link>
          <Link href="/contact" className="text-lg font-serif">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}