import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - GrabWorthy",
  description:
    "Learn how GrabWorthy collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Last updated: May 2026</p>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Welcome to GrabWorthy (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We
            respect your privacy and are committed to protecting your personal
            data. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website
            grabworthy.in.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact us through our contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Interact with our content</li>
          </ul>
          <p className="mt-4">
            We also automatically collect certain technical and usage data when
            you visit our website, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Referring/exit URLs</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries</li>
            <li>Send you newsletters and updates (if subscribed)</li>
            <li>Analyze website usage to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookies & Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to track activity
            on our website and hold certain information. Cookies are files with
            a small amount of data that may include an anonymous unique
            identifier.
          </p>
          <p className="mt-4">
            We use essential cookies for website functionality and analytics
            cookies to understand how visitors interact with our website. You
            can instruct your browser to refuse all cookies or to indicate when
            a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Third-Party Services
          </h2>
          <p className="mb-4">
            We may use third-party services that collect, monitor and analyze
            data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics - for website analytics</li>
            <li>PostHog - for product analytics</li>
            <li>Vercel Analytics - for performance monitoring</li>
          </ul>
          <p className="mt-4">
            These third parties have access to your data only to perform these
            tasks on our behalf.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Affiliate Links</h2>
          <p>
            GrabWorthy participates in affiliate programs, including Amazon
            Associates and other affiliate networks. When you click on
            affiliate links on our site and make a purchase, we may receive a
            small commission at no extra cost to you. This helps support our
            content creation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal data. However, no method of
            transmission over the Internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Your Rights
          </h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Request data portability</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact us at{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact@grabworthy.in
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Children's Privacy
          </h2>
          <p>
            Our website is not intended for children under 13. We do not
            knowingly collect personal information from children under 13. If
            you become aware that a child has provided us with personal data,
            please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please{" "}
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