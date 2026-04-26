import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex text-xs text-muted-foreground uppercase tracking-wider mb-8"
    >
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-border" />
            <Link
              href={item.href}
              className={`transition-colors ${
                index === items.length - 1
                  ? "text-foreground font-medium"
                  : "hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}