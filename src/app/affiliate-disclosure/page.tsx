import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure - GrabWorthy",
  description:
    "Transparency about our affiliate relationships and how we earn revenue.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Affiliate Disclosure</h1>
      <p className="text-muted-foreground mb-8">Last updated: May 2026</p>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Our Commitment to Transparency
          </h2>
          <p>
            GrabWorthy believes in complete transparency with our readers. This
            Affiliate Disclosure explains how we monetize our content and
            maintains our commitment to honest, unbiased recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            What Are Affiliate Links?
          </h2>
          <p className="mb-4">
            Some links on GrabWorthy are &quot;affiliate links.&quot; This means
            if you click on the link and make a purchase, we may receive a
            small commission (at no extra cost to you). This commission helps
            support our work in creating helpful content.
          </p>
          <p>
            Affiliate programs we participate in include Amazon Associates,
            Flipkart Affiliate Program, and other relevant affiliate networks.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            How Affiliate Links Work
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              When you click an affiliate link on our site and complete a
              purchase, the retailer pays us a small commission
            </li>
            <li>
              This does NOT increase the price you pay - the price is the same
              whether or not you use our link
            </li>
            <li>
              We only recommend products we genuinely believe will help our
              readers
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Our Promise to You
          </h2>
          <p className="mb-4">
            Our recommendations are based on:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal experience and research</li>
            <li>Real customer reviews and feedback</li>
            <li>Value for money and quality</li>
            <li>Relevance to our audience's needs</li>
          </ul>
          <p className="mt-4">
            <strong>
              We never recommend a product solely for commission. Our readers'
              trust is more valuable than any affiliate earnings.
            </strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            How We Identify Affiliate Links
          </h2>
          <p>
            On our website, affiliate links may be identified through:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Product cards marked as &quot;Affiliate&quot; or &quot;Sponsored&quot;</li>
            <li>Buttons that say &quot;Check Price&quot; or &quot;Buy Now&quot;</li>
            <li>
              Notes in articles stating &quot;Contains affiliate links&quot;
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Your Support Matters
          </h2>
          <p>
            When you use our links to make a purchase, you&apos;re supporting
            GrabWorthy&apos;s mission to help you find the best products. This
            support enables us to continue creating free, helpful content for
            our community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
          <p>
            If you have any questions about our affiliate relationships or how
            we maintain transparency, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>
            . We&apos;re happy to clarify anything.
          </p>
        </section>
      </div>
    </div>
  );
}