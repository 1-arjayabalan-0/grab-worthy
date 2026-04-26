import React from 'react';
import { useRoute } from 'wouter';
import { SEO } from '@/components/site/SEO';
import { JsonLd } from '@/components/site/JsonLd';
import { Breadcrumbs } from '@/components/site/Breadcrumbs';
import { PinterestSaveButton } from '@/components/site/PinterestSaveButton';
import { AffiliateProductModule } from '@/components/site/AffiliateProductModule';
import { FAQAccordion } from '@/components/site/FAQAccordion';
import { RelatedArticles } from '@/components/site/RelatedArticles';
import { StickyAffiliateCTA } from '@/components/site/StickyAffiliateCTA';
import { NewsletterCTA } from '@/components/site/NewsletterCTA';
import { blogPosts } from '@/data/blogs';
import { getCategoryBySlug } from '@/data/categories';
import { products } from '@/data/products';
import NotFound from './not-found';

export default function Article() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug;
  const article = blogPosts.find(p => p.slug === slug);

  if (!article) return <NotFound />;

  const category = getCategoryBySlug(article.category);
  const articleProducts = article.productIds.map(id => products.find(p => p.id === id)).filter(Boolean) as any[];
  const topProduct = articleProducts.find(p => p.editorPick) || articleProducts[0];
  
  const relatedPosts = article.relatedPostSlugs
    .map(s => blogPosts.find(p => p.slug === s))
    .filter(Boolean) as any[];

  const canonicalUrl = `${window.location.origin}/blog/${article.slug}`;

  // JSON-LD Schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": [`${window.location.origin}${article.featuredImage}`],
    "datePublished": article.publishedDate,
    "author": [{
      "@type": "Organization",
      "name": "Useful Discoveries Editorial",
      "url": window.location.origin
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Useful Discoveries"
    }
  };

  const faqSchema = article.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <>
      <SEO 
        title={article.metaTitle}
        description={article.metaDescription}
        image={article.featuredImage}
        type="article"
        canonicalUrl={canonicalUrl}
      />
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <article className="pb-16 md:pb-24">
        {/* Magazine Style Hero */}
        <div className="container mx-auto px-4 pt-8 md:pt-12 pb-8">
          <Breadcrumbs items={[
            { label: 'Journal', href: '/blog' },
            ...(category ? [{ label: category.name, href: `/category/${category.slug}` }] : []),
            { label: article.title, href: `/blog/${article.slug}` }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center mb-10">
            {category && (
              <a href={`/category/${category.slug}`} className="text-xs uppercase tracking-widest text-primary font-medium mb-4 block hover:underline underline-offset-4">
                {category.name}
              </a>
            )}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground uppercase tracking-widest">
              <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl mb-16">
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-muted overflow-hidden">
            <img 
              src={article.featuredImage} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <PinterestSaveButton 
              url={`/blog/${article.slug}`}
              media={article.featuredImage}
              description={article.pinterestDescription}
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:text-foreground mx-auto text-foreground/90">
            {/* Intro */}
            {article.introduction.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl md:text-2xl leading-relaxed text-foreground" : ""}>{p}</p>
            ))}

            {/* First Product right after intro if available */}
            {articleProducts[0] && (
              <div className="not-prose">
                <AffiliateProductModule product={articleProducts[0]} />
              </div>
            )}

            {/* Sections & Remaining Products */}
            {article.sections.map((section, idx) => {
              // We'll interleave remaining products into sections
              const pIdx = idx + 1;
              const product = articleProducts[pIdx];

              return (
                <div key={idx} className="mt-12">
                  <h2 className="text-2xl md:text-3xl mt-12 mb-6">{section.heading}</h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {product && (
                    <div className="not-prose">
                      <AffiliateProductModule product={product} />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Dump any leftover products */}
            {articleProducts.slice(article.sections.length + 1).map((product, idx) => (
              <div key={`extra-${idx}`} className="not-prose">
                <AffiliateProductModule product={product} />
              </div>
            ))}

            {/* FAQ */}
            {article.faq.length > 0 && (
              <div className="not-prose">
                <FAQAccordion faqs={article.faq} />
              </div>
            )}

            {/* Closing */}
            {article.closing.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl mt-24 mb-16">
          <NewsletterCTA />
        </div>

        <div className="container mx-auto px-4">
          <RelatedArticles articles={relatedPosts} />
          
          {relatedPosts.length > 0 && (
            <div className="text-center mt-12">
              <a href={`/blog/${relatedPosts[0].slug}`} className="inline-block bg-foreground text-background px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-foreground/90 transition-colors">
                Discover Next: {relatedPosts[0].title}
              </a>
            </div>
          )}
        </div>
      </article>

      {topProduct && (
        <StickyAffiliateCTA 
          title={topProduct.productName} 
          href={topProduct.affiliateLink} 
        />
      )}
    </>
  );
}