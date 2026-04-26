"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function NewsletterCTA({ variant = 'default' }: { variant?: 'default' | 'minimal' }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  if (submitted) {
    return (
      <div className={`bg-background border border-border p-8 ${variant === 'default' ? 'text-center max-w-xl mx-auto' : ''}`}>
        <h4 className="font-serif text-xl mb-2 text-foreground">Thank you for subscribing.</h4>
        <p className="text-muted-foreground">You'll receive our next dispatch on Sunday morning.</p>
      </div>
    );
  }

  return (
    <div className={`${variant === 'default' ? 'bg-secondary/30 p-10 md:p-16 text-center max-w-3xl mx-auto' : ''}`}>
      <h4 className={`font-serif mb-3 text-foreground ${variant === 'default' ? 'text-3xl' : 'text-xl'}`}>
        The Sunday Dispatch
      </h4>
      <p className={`text-muted-foreground mb-6 ${variant === 'default' ? 'max-w-md mx-auto' : ''}`}>
        One exceptional find, a few quiet thoughts on living well, and the best of the week's discoveries. No spam, ever.
      </p>
      
      <form onSubmit={handleSubmit} className={`flex gap-2 ${variant === 'default' ? 'sm:flex-row flex-col max-w-md mx-auto' : ''}`}>
        <input
          type="email"
          placeholder="Your email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/60"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          {variant === 'default' ? 'Subscribe' : <ArrowRight className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
}