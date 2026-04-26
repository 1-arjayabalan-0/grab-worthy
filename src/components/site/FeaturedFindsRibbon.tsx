"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Product } from '@/data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function FeaturedFindsRibbon({ products, title = "Editor's Current Obsessions" }: { products: Product[], title?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16 md:py-24 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-3xl text-foreground">{title}</h2>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')} 
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground disabled:opacity-30 hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground disabled:opacity-30 hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map(product => (
            <div key={product.id} className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] shrink-0 snap-start group cursor-pointer">
              <a href={product.affiliateLink} target="_blank" rel="sponsored nofollow noopener" className="block">
                <div className="aspect-square bg-muted mb-4 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.productName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {(product.editorPick || product.budgetPick) && (
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {product.editorPick && (
                        <span className="bg-primary text-primary-foreground text-[10px] font-medium px-2 py-0.5 uppercase tracking-wider">
                          Editor's Pick
                        </span>
                      )}
                      {product.budgetPick && !product.editorPick && (
                        <span className="bg-foreground text-background text-[10px] font-medium px-2 py-0.5 uppercase tracking-wider">
                          Budget
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {product.productName}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {product.shortDescription}
                </p>
                {product.priceHint && (
                  <div className="text-xs font-medium text-foreground">
                    {product.priceHint}
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}