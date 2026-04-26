"use client";

import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { EditorialArticleCard } from "@/components/site/EditorialArticleCard";
import { AffiliateProductModule } from "@/components/site/AffiliateProductModule";
import { categories } from "@/data/categories";
import { BlogPost } from "@/data/blogs";
import { Product } from "@/data/products";

interface CategoryProps {
  category: {
    slug: string;
    name: string;
    shortLabel: string;
    tagline: string;
    editorialIntro: string;
    heroImage: string;
  };
  posts: BlogPost[];
  products: Product[];
}

export function CategoryPage({ category, posts, products }: CategoryProps) {
  const topProducts = products.filter((p) => p.editorPick).slice(0, 3);
  if (topProducts.length === 0 && products.length > 0) {
    topProducts.push(...products.slice(0, 3));
  }

  return (
    <>
      <div className="relative pt-24 pb-32 md:py-40 bg-muted overflow-hidden border-b border-border">
        <img
          src={category.heroImage}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 md:bg-background/60 backdrop-blur-sm md:backdrop-blur-none" />
        <div className="container relative mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Categories", href: "/#categories" },
              { label: category.name, href: `/category/${category.slug}` },
            ]}
          />
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

      {topProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-foreground mb-12 text-center">
              Top {category.shortLabel} Picks
            </h2>
            <div className="max-w-4xl mx-auto">
              {topProducts.map((product) => (
                <AffiliateProductModule key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-foreground mb-12">Read the Journal</h2>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((article) => (
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

      <section className="py-16 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl text-foreground mb-8">Explore Other Rooms</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
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