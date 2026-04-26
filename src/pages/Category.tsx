import React from 'react';
import { useRoute } from 'wouter';
import { SEO } from '@/components/site/SEO';
import { JsonLd } from '@/components/site/JsonLd';
import { Breadcrumbs } from '@/components/site/Breadcrumbs';
import { EditorialArticleCard } from '@/components/site/EditorialArticleCard';
import { AffiliateProductModule } from '@/components/site/AffiliateProductModule';
import { categories } from '@/data/categories';
import { blogPosts } from '@/data/blogs';
import { products } from '@/data/products';
import NotFound from './not-found';
import { Link } from 'wouter';

export default function Category() {
  const [, params] = useRoute('/category/:slug');
  const slug = params?.slug;
  const category = categories.find(c => c.slug === slug);

  if (!category) return <NotFound />;

  const categoryPosts = blogPosts.filter(p => p.category === slug);
  const categoryProducts = products.filter(p => p.category === slug);
  const topProducts = categoryProducts.filter(p => p.editorPick).slice(0, 3);
  if (topProducts.length === 0) topProducts.push(...categoryProducts.slice(0, 3));

  const canonicalUrl = `${window.location.origin}/category/${category.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": categoryPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${window.location.origin}/blog/${post.slug}`
    }))
  };

  return (
    <>
      <SEO 
        title={`${category.name} Finds & Reviews`}
        description={category.tagline}
        image={category.heroImage}
        canonicalUrl={canonicalUrl}
      />
      <JsonLd data={jsonLd} />

      {/* Category Hero */}
      <div className="relative pt-24 pb-32 md:py-40 bg-muted overflow-hidden border-b border-border">
        <img 
          src={category.heroImage} 
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 md:bg-background/60 backdrop-blur-sm md:backdrop-blur-none" />
        <div className="container relative mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Categories', href: '/#categories' },
            { label: category.name, href: `/category/${category.slug}` }
          ]} />
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-tight mb-6">
              {category.name}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-serif italic mb-8">
              {category.tagline}
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {category.editorialIntro}
            </p>
          </div>
        </div>
      </div>

      {/* Top Picks for this category */}
      {topProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-foreground mb-12 text-center">Top {category.shortLabel} Picks</h2>
            <div className="max-w-4xl mx-auto">
              {topProducts.map(product => (
                <AffiliateProductModule key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Articles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-foreground mb-12">Read the Journal</h2>
          
          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map(article => (
                <EditorialArticleCard key={article.slug} article={article} variant="medium" />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-muted-foreground bg-card border border-border">
              Articles in this category are being updated. Check back soon.
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl text-foreground mb-8">Explore Other Rooms</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.filter(c => c.slug !== category.slug).map(c => (
              <Link 
                key={c.slug} 
                href={`/category/${c.slug}`}
                className="px-6 py-3 bg-background border border-border text-sm font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
              >
                {c.shortLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}