import React, { useState } from 'react';
import { SEO } from '@/components/site/SEO';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with the Useful Discoveries editorial team."
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
        <h1 className="font-serif text-5xl text-foreground mb-6">Get in Touch</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Have a product you think we'd love? A question about an article? Just want to say hello?
        </p>

        {submitted ? (
          <div className="bg-card border border-border p-12 text-center">
            <h3 className="font-serif text-2xl mb-4 text-foreground">Message Received</h3>
            <p className="text-muted-foreground">
              Thank you for writing. We read every email and will get back to you if a response is needed.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium uppercase tracking-wider">Subject</label>
              <select 
                id="subject" 
                className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors appearance-none rounded-none"
              >
                <option>General Inquiry</option>
                <option>Product Suggestion</option>
                <option>Partnership/Sponsorship</option>
                <option>Site Feedback</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider">Message</label>
              <textarea 
                id="message" 
                rows={6}
                required
                className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wider hover:bg-foreground/90 transition-colors w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-20 pt-10 border-t border-border">
          <h3 className="font-serif text-2xl mb-4">Direct Email</h3>
          <p className="text-muted-foreground">
            You can also reach us directly at <a href="mailto:hello@usefuldiscoveries.example.com" className="text-foreground hover:underline underline-offset-4">hello@usefuldiscoveries.example.com</a>.
          </p>
        </div>
      </div>
    </>
  );
}