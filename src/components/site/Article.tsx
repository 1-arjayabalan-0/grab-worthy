"use client";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PinterestSaveButton } from "@/components/site/PinterestSaveButton";
import { AffiliateProductModule } from "@/components/site/AffiliateProductModule";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { StickyAffiliateCTA } from "@/components/site/StickyAffiliateCTA";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import { getCategoryBySlug } from "@/data/categories";
import { BlogPost } from "@/data/blogs";
import { Product } from "@/data/products";

interface ArticleProps {
  article: BlogPost;
  relatedProducts?: Product[];
}

export function Article({ article, relatedProducts = [] }: ArticleProps) {
  const category = getCategoryBySlug(article.category);
  const topProduct = relatedProducts.find((p) => p.editorPick) || relatedProducts[0];

  return (
    <article className="pb-16 md:pb-24">
      {/* Magazine Style Hero */}
      <div className="container mx-auto px-4 pt-8 md:pt-12 pb-8">
        <Breadcrumbs
          items={[
            { label: "Journal", href: "/blog" },
            ...(category
              ? [{ label: category.name, href: `/category/${category.slug}` }]
              : []),
            { label: article.title, href: `/blog/${article.slug}` },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-10">
          {category && (
            <a
              href={`/category/${category.slug}`}
              className="text-xs uppercase tracking-widest text-primary font-medium mb-4 block hover:underline underline-offset-4"
            >
              {category.name}
            </a>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground uppercase tracking-widest">
            <span>
              {new Date(article.publishedDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
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
            <p
              key={i}
              className={i === 0 ? "text-xl md:text-2xl leading-relaxed text-foreground" : ""}
            >
              {p}
            </p>
          ))}

          {/* First Product right after intro if available */}
          {relatedProducts[0] && (
            <div className="not-prose">
              <AffiliateProductModule product={relatedProducts[0]} />
            </div>
          )}

          {/* Sections & Remaining Products */}
          {article.sections.map((section, idx) => {
            const pIdx = idx + 1;
            const product = relatedProducts[pIdx];

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
          {relatedProducts.slice(article.sections.length + 1).map((product, idx) => (
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
        {topProduct && (
          <StickyAffiliateCTA title={topProduct.productName} href={topProduct.affiliateLink} />
        )}
      </div>
    </article>
  );
}