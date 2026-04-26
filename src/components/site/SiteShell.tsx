import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}