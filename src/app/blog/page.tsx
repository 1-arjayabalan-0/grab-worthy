import { EditorialArticleCard } from "@/components/site/EditorialArticleCard";
import { blogPosts } from "@/data/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description: "Explore our curated collection of editorial articles and product discoveries.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "The Journal | Grab Worthy",
    description: "Explore our curated collection of editorial articles and product discoveries.",
    url: "https://grabworthy.codarivu.com/blog/",
    siteName: "Grab Worthy",
    images: [
      {
        url: "https://grabworthy.codarivu.com/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Grab Worthy Journal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="mb-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
          The Journal
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          In-depth explorations of products, spaces, and the everyday objects that
          shape how we live.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((article) => (
          <EditorialArticleCard key={article.slug} article={article} variant="medium" />
        ))}
      </div>
    </div>
  );
}