import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Old timestamped slugs that Google indexed before the posts were renamed (2026-07-24)
  async redirects() {
    return [
      {
        source: "/blog/best-wall-decor-items-for-living-room-that-actually-make-you-1777743064145",
        destination: "/blog/best-kitchen-wall-decor-items-that-actually-make-it-a-better-home/",
        permanent: true,
      },
      {
        source: "/blog/best-makeup-organizers-to-take-your-beauty-routine-to-the-ne-1777784333372",
        destination: "/blog/best-makeup-organizers-to-take-your-beauty-routine-to-the-next-level/",
        permanent: true,
      },
      {
        source: "/blog/best-amazon-bedroom-decor-accessories-for-a-warm-relaxing-vi-1777784822353",
        destination: "/blog/best-amazon-bedroom-decor-accessories-for-a-warm-relaxing-vibe/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;