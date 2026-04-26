import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-6">404</h1>
      <p className="text-xl text-muted-foreground mb-8">This page got lost in the shuffle.</p>
      <Link
        href="/"
        className="inline-block bg-foreground text-background px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-foreground/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}