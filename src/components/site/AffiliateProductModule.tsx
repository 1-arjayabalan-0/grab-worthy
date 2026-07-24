import React from 'react';
import { Product } from '@/data/products';
import { PinterestSaveButton } from './PinterestSaveButton';
import { JsonLd } from './JsonLd';
import { Check, ExternalLink } from 'lucide-react';

const SITE_URL = "https://grabworthy.codarivu.com";

export function AffiliateProductModule({ product }: { product: Product }) {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.productName,
    description: product.shortDescription,
    image: product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`,
    brand: {
      "@type": "Brand",
      name: "Amazon",
    },
    offers: {
      "@type": "Offer",
      url: product.affiliateLink,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Amazon",
      },
    },
    ...(product.editorPick && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        reviewCount: "100",
      },
    }),
  };

  return (
    <div className="my-12 border border-border bg-card overflow-hidden">
      <JsonLd data={productJsonLd} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto md:h-full bg-muted">
          <img 
            src={product.image} 
            alt={product.productName}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <PinterestSaveButton 
            url={product.affiliateLink}
            media={product.image}
            description={product.shortDescription}
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.editorPick && (
              <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 uppercase tracking-wider">
                Editor's Pick
              </span>
            )}
            {product.budgetPick && (
              <span className="bg-foreground text-background text-xs font-medium px-3 py-1 uppercase tracking-wider">
                Budget Pick
              </span>
            )}
          </div>
        </div>
        
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <h3 className="font-serif text-2xl text-foreground mb-2">
            {product.productName}
          </h3>
          {product.priceHint && (
            <div className="text-muted-foreground text-sm mb-6">
              {product.priceHint}
            </div>
          )}
          
          <p className="text-foreground leading-relaxed mb-6">
            {product.shortDescription}
          </p>

          <blockquote className="border-l-2 border-primary pl-4 text-muted-foreground italic mb-6">
            "{product.whyPeopleLoveIt}"
          </blockquote>

          <ul className="space-y-3 mb-8">
            {product.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <a 
            href={product.affiliateLink}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 transition-colors px-6 py-4 text-sm font-medium uppercase tracking-wider w-full"
          >
            Check Price on Amazon
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}