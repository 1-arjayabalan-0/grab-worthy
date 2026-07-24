import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories } from "@/data/categories";
import { blogPosts } from "@/data/blogs";
import { products } from "@/data/products";
import { CategoryPage as CategoryPageComponent } from "@/components/site/CategoryPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} Finds & Reviews`,
    description: category.tagline,
    alternates: {
      canonical: `/category/${slug}/`,
    },
    openGraph: {
      title: `${category.name} Finds & Reviews | Grab Worthy`,
      description: category.tagline,
      url: `https://grabworthy.codarivu.com/category/${slug}/`,
      siteName: "Grab Worthy",
      images: [
        {
          url: category.heroImage.startsWith("http")
            ? category.heroImage
            : `https://grabworthy.codarivu.com${category.heroImage}`,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function CategoryPageRoute({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryPosts = blogPosts.filter((p) => p.category === slug);
  const categoryProducts = products.filter((p) => p.category === slug);

  return <CategoryPageComponent category={category} posts={categoryPosts} products={categoryProducts} />;
}