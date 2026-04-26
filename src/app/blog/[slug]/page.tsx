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