import React, { useState } from 'react';
import { SEO } from '@/components/site/SEO';
import { EditorialArticleCard } from '@/components/site/EditorialArticleCard';
import { categories } from '@/data/categories';
import { blogPosts } from '@/data/blogs';

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory 
    ? blogPosts.filter(post => post.category === activeCategory)
    : blogPosts;

  return (
    <>
      <SEO 
        title="Editorial Journal"
        description="Read our latest guides, roundups, and deep-dives on the best practical finds."
      />
      
      <div className="bg-card py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 max-w-2xl">The Journal</h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Thoughtful reviews and curations of the products that quietly improve daily life.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
              activeCategory === null 
                ? 'bg-foreground text-background' 
                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 border border-border'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                activeCategory === category.slug 
                  ? 'bg-foreground text-background' 
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 border border-border'
              }`}
            >
              {category.shortLabel}
            </button>
          ))}
        </div>

        {/* Articles Layout */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredPosts.map((article, index) => (
              <div key={article.slug} className={index === 0 && !activeCategory ? "md:col-span-2 lg:col-span-3" : ""}>
                <EditorialArticleCard 
                  article={article} 
                  variant={index === 0 && !activeCategory ? "large" : "medium"} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="font-serif text-2xl mb-2 text-muted-foreground">No articles found</h3>
            <p className="text-muted-foreground">Check back soon for new content in this category.</p>
          </div>
        )}
      </div>
    </>
  );
}