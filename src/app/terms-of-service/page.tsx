import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - GrabWorthy",
  description:
    "Terms and conditions for using GrabWorthy website and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-muted-foreground mb-8">Last updated: May 2026</p>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p>
            By accessing and using the GrabWorthy website (grabworthy.in), you
            accept and agree to be bound by the terms and provision of this
            agreement. If you do not agree to abide by these terms, please do
            not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily use GrabWorthy for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may
            not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Transfer the materials to another person</li>
            <li>Attempt to reverse engineer any software on the website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">User Content</h2>
          <p>
            Our website may allow you to post, link, store, share and otherwise
            make available certain information, text, graphics, videos, or
            other material (&quot;Content&quot;). You are responsible for the
            Content that you post, including its legality, reliability, and
            appropriateness.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Product Information & Recommendations
          </h2>
          <p className="mb-4">
            GrabWorthy provides curated product recommendations and
            information about various products. We strive to provide accurate
            and up-to-date information, but we cannot guarantee that all
            product information is current, complete, or accurate.
          </p>
          <p className="mt-4">
            Product prices, availability, and specifications are subject to
            change without notice. We recommend verifying product details
            directly on the retailer's website before making a purchase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Affiliate Disclosure</h2>
          <p className="mb-4">
            GrabWorthy is a participant in various affiliate programs,
            including Amazon Associates and other affiliate networks.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We may earn commissions from qualifying purchases made through
              links on our website
            </li>
            <li>Product prices are determined by the retailer, not us</li>
            <li>
              We are not responsible for product quality, delivery, or any
              issues with purchases made through affiliate links
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Disclaimer of Warranties
          </h2>
          <p>
            ALL INFORMATION, PRODUCTS, AND SERVICES ON THIS WEBSITE ARE
            PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED. GRABWORTHY MAKES NO REPRESENTATIONS OR WARRANTIES OF
            ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE WEBSITE
            OR THE INFORMATION, CONTENT, OR MATERIALS INCLUDED THEREON.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p>
            IN NO EVENT SHALL GRABWORTHY, NOR ITS DIRECTORS, EMPLOYEES,
            PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES,
            INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
            GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR
            ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE WEBSITE;
            (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE WEBSITE;
            (III) ANY CONTENT OBTAINED FROM THE WEBSITE; AND (IV) UNAUTHORIZED
            ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">External Links</h2>
          <p>
            Our website may contain links to external websites that are not
            provided or maintained by GrabWorthy. We do not guarantee the
            accuracy, relevance, timeliness, or completeness of any information
            on these external websites. We are not responsible for the content
            or privacy practices of these third-party sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of India and you irrevocably submit to the
            exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. What constitutes a material change will be
            determined at our sole discretion. By continuing to access or use
            our website after those revisions become effective, you agree to be
            bound by the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}