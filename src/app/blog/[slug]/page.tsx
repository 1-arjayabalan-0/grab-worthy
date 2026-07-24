import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogPosts } from "@/data/blogs";
import { products } from "@/data/products";
import { Article } from "@/components/site/Article";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogPosts.find((p) => p.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.metaDescription,
    alternates: {
      canonical: `/blog/${slug}/`,
    },
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription,
      url: `https://grabworthy.codarivu.com/blog/${slug}/`,
      siteName: "Grab Worthy",
      images: [
        {
          url: article.featuredImage.startsWith("http")
            ? article.featuredImage
            : `https://grabworthy.codarivu.com${article.featuredImage}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.publishedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle || article.title,
      description: article.metaDescription,
      images: [
        article.featuredImage.startsWith("http")
          ? article.featuredImage
          : `https://grabworthy.codarivu.com${article.featuredImage}`,
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = blogPosts.find((p) => p.slug === slug);
  if (!article) notFound();

  const relatedProducts = products.filter((p) =>
    article.productIds.includes(p.id)
  );

  return <Article article={article} relatedProducts={relatedProducts} />;
}