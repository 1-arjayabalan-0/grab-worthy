import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us.",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-2xl">
      <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-12 text-center">
        Get in Touch
      </h1>
      <p className="text-lg text-foreground/80 text-center mb-12">
        Have a product recommendation? Found something we should know about? We&apos;d love to hear from you.
      </p>
      <div className="bg-card border border-border p-8 text-center">
        <p className="text-muted-foreground">
          Email: <a href="mailto:grabworthy-support@codarivu.com" className="text-primary hover:underline">grabworthy-support@codarivu.com</a>
        </p>
      </div>
    </div>
  );
}