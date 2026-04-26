import React from 'react';
import { BlogPost } from '@/data/blogs';
import { EditorialArticleCard } from './EditorialArticleCard';

export function RelatedArticles({ articles, title = "Keep Reading" }: { articles: BlogPost[], title?: string }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mt-16 md:mt-24 pt-16 border-t border-border">
      <h2 className="font-serif text-3xl text-foreground mb-10">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <EditorialArticleCard key={article.slug} article={article} variant="small" />
        ))}
      </div>
    </section>
  );
}