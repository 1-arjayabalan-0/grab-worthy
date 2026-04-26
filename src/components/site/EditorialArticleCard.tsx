import React from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blogs";
import { getCategoryBySlug } from "@/data/categories";

export function EditorialArticleCard({
  article,
  variant = "medium",
}: {
  article: BlogPost;
  variant?: "large" | "medium" | "small";
}) {
  const category = getCategoryBySlug(article.category);

  if (variant === "large") {
    return (
      <article className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 overflow-hidden bg-muted">
          <Link href={`/blog/${article.slug}`}>
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center px-4 md:pl-8 md:pr-0">
          <Link
            href={`/category/${category?.slug}`}
            className="text-xs uppercase tracking-widest text-muted-foreground mb-4 hover:text-foreground transition-colors"
          >
            {category?.name}
          </Link>
          <Link href={`/blog/${article.slug}`}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
              {article.title}
            </h2>
            <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
              {article.metaDescription}
            </p>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">
              {article.readTime}
            </div>
          </Link>
        </div>
      </article>
    );
  }

  if (variant === "small") {
    return (
      <article className="group cursor-pointer flex flex-col gap-4">
        <Link href={`/blog/${article.slug}`} className="overflow-hidden bg-muted">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <div>
          <Link
            href={`/category/${category?.slug}`}
            className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block hover:text-foreground transition-colors"
          >
            {category?.shortLabel}
          </Link>
          <Link href={`/blog/${article.slug}`}>
            <h3 className="font-serif text-xl text-foreground leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
              {article.readTime}
            </div>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group cursor-pointer flex flex-col gap-4">
      <Link href={`/blog/${article.slug}`} className="overflow-hidden bg-muted">
        <img
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div>
        <Link
          href={`/category/${category?.slug}`}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-3 block hover:text-foreground transition-colors"
        >
          {category?.shortLabel}
        </Link>
        <Link href={`/blog/${article.slug}`}>
          <h3 className="font-serif text-2xl text-foreground leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {article.metaDescription}
          </p>
          <div className="text-xs text-muted-foreground uppercase tracking-widest">
            {article.readTime}
          </div>
        </Link>
      </div>
    </article>
  );
}