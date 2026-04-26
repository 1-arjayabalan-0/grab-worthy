import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

export function StickyAffiliateCTA({ title, href }: { title: string; href: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 30% of the page
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      
      // Hide near bottom to not overlap footer
      setIsVisible(scrollPercentage > 0.3 && scrollPercentage < 0.95);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 p-4 md:hidden animate-in slide-in-from-bottom-8 duration-300">
      <div className="bg-foreground text-background shadow-xl rounded-lg p-3 flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-xs opacity-80 uppercase tracking-wider mb-0.5">Top Pick</div>
          <div className="font-serif text-sm truncate">{title}</div>
        </div>
        <a 
          href={href}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="shrink-0 bg-background text-foreground px-4 py-2 text-xs font-medium uppercase tracking-wider rounded flex items-center gap-1.5"
        >
          View
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}