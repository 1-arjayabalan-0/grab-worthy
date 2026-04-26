import React from 'react';
import { Link } from 'wouter';
import { Category } from '@/data/categories';

export function CategoryExplorer({ categories }: { categories: Category[] }) {
  // Create an asymmetric grid layout
  // 1 large, 2 small, 1 wide, etc.
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-4">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Explore the Curations</h2>
          <Link href="/blog" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors border-b border-border pb-1">
            View All Categories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          {categories.map((category, index) => {
            // Determine span based on index for asymmetric look
            let spanClass = "md:col-span-4"; // default
            let rowSpan = "row-span-1";
            
            if (index === 0) {
              spanClass = "md:col-span-8";
              rowSpan = "md:row-span-2";
            } else if (index === 1 || index === 2) {
              spanClass = "md:col-span-4";
            } else if (index === 3) {
              spanClass = "md:col-span-6";
            } else if (index === 4) {
              spanClass = "md:col-span-6";
            } else if (index === 5 || index === 6 || index === 7) {
              spanClass = "md:col-span-4";
            }

            return (
              <Link 
                key={category.slug} 
                href={`/category/${category.slug}`}
                className={`group relative overflow-hidden block ${spanClass} ${rowSpan} bg-muted`}
              >
                <img 
                  src={category.heroImage} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <div className="text-white/80 text-xs uppercase tracking-widest font-medium mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {category.shortLabel}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">{category.name}</h3>
                  {index === 0 && (
                    <p className="text-white/90 max-w-md line-clamp-2 md:line-clamp-none">{category.tagline}</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}