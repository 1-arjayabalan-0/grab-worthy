import React from 'react';
import { SEO } from '@/components/site/SEO';
import { CategoryExplorer } from '@/components/site/CategoryExplorer';
import { FeaturedFindsRibbon } from '@/components/site/FeaturedFindsRibbon';
import { EditorialArticleCard } from '@/components/site/EditorialArticleCard';
import { NewsletterCTA } from '@/components/site/NewsletterCTA';
import { categories } from '@/data/categories';
import { blogPosts } from '@/data/blogs';
import { products } from '@/data/products';
import { Link } from 'wouter';

export default function Home() {
  const featuredArticle = blogPosts[0];
  const recentArticles = blogPosts.slice(1, 5);
  const featuredProducts = products.filter(p => p.editorPick).slice(0, 8);

  return (
    <>
      <SEO />
      
      {/* Brand Statement Strip */}
      <div className="bg-primary/5 py-4 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-serif text-primary italic">
            Quiet upgrades that change the way a room feels. Curated Amazon finds for the intentional home.
          </p>
        </div>
      </div>

      {/* Featured Editorial */}
      <section className="py-12 md:py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <EditorialArticleCard article={featuredArticle} variant="large" />
        </div>
      </section>

      {/* This Week's Discoveries Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Latest Issues</h2>
            <Link href="/blog" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors border-b border-border pb-1">
              View Journal
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentArticles.map(article => (
              <EditorialArticleCard key={article.slug} article={article} variant="small" />
            ))}
          </div>
        </div>
      </section>

      {/* Category Explorer */}
      <CategoryExplorer categories={categories} />

      {/* Featured Finds Ribbon */}
      <FeaturedFindsRibbon products={featuredProducts} />

      {/* Newsletter */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <NewsletterCTA />
        </div>
      </section>
    </>
  );
}