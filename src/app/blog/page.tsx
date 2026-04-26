import { EditorialArticleCard } from "@/components/site/EditorialArticleCard";
import { blogPosts } from "@/data/blogs";

export const metadata = {
  title: "Journal",
  description: "Explore our curated collection of editorial articles and product discoveries.",
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