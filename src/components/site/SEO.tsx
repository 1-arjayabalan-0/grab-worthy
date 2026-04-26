import React from 'react';
import { Helmet } from 'react-helmet-async';

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  canonicalUrl?: string;
};

export function SEO({
  title = 'Useful Discoveries — Editorial Affiliate Journal',
  description = 'A quietly luxurious editorial magazine recommending practical Amazon finds for the home, kitchen, desk, organization, beauty, travel, and lifestyle.',
  image = '/images/categories/home-decor.jpg',
  type = 'website',
  canonicalUrl,
}: SEOProps) {
  const siteName = 'Useful Discoveries';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="pinterest-rich-pin" content="true" />
    </Helmet>
  );
}