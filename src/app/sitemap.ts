import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogs";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://grabworthy.codarivu.com";

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const staticPages = [
    { path: "/about", priority: 0.7, changefreq: "monthly" as const },
    { path: "/contact", priority: 0.7, changefreq: "monthly" as const },
    { path: "/blog", priority: 0.9, changefreq: "weekly" as const },
    { path: "/privacy-policy", priority: 0.5, changefreq: "yearly" as const },
    { path: "/terms-of-service", priority: 0.5, changefreq: "yearly" as const },
    { path: "/affiliate-disclosure", priority: 0.5, changefreq: "yearly" as const },
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changefreq,
      priority: page.priority,
    })),
    ...categoryUrls,
    ...blogUrls,
  ];
}