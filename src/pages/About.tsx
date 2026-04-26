import React from 'react';
import { SEO } from '@/components/site/SEO';

export default function About() {
  return (
    <>
      <SEO 
        title="About Useful Discoveries"
        description="We hunt for the pieces that make daily life feel intentional, not staged."
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-12 text-center">About Us</h1>
        
        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-a:text-primary mx-auto text-foreground/90">
          <p className="text-2xl leading-relaxed text-foreground mb-10">
            There is a certain kind of object that feels finished — not expensive, exactly, but considered. The light is warmer. The texture is right. It solves a small problem so quietly you forget you ever had it.
          </p>

          <p>
            Useful Discoveries was born out of frustration with the modern internet. Most affiliate sites are built by robots, recommending plastic junk that breaks in a month, just to earn a commission. Most lifestyle magazines recommend things that cost a month's rent. 
          </p>

          <p>
            We wanted something in the middle. We spend our evenings scrolling Pinterest, hunting through Amazon's weirdly hidden premium pages, and testing the small upgrades that genuinely change how an apartment feels. 
          </p>

          <h2 className="mt-12 text-3xl mb-6">What We Cover</h2>
          <p>
            We curate the pieces that make a room feel intentional, not staged. The heavy linen throw, the warm table lamp, the kitchen tools that actually earn their drawer space, and the storage finds that respect a small footprint. 
          </p>
          <p>
            We have a strong bias toward natural materials (wood, stone, ceramic, glass, linen) and a deep aversion to loud branding and unnecessary plastic.
          </p>

          <h2 className="mt-12 text-3xl mb-6">The Affiliate Disclosure</h2>
          <p>
            We run this site as a business, and we want to be completely transparent about how we make money. <strong>Useful Discoveries is a participant in the Amazon Services LLC Associates Program.</strong> 
          </p>
          <p>
            This means that when you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. This comes at absolutely no additional cost to you.
          </p>
          <p>
            However, we do not let commissions dictate our recommendations. We only recommend products we would (and do) buy for our own homes. The editorial integrity of this journal is the only thing that keeps you coming back, and we don't take that lightly.
          </p>
        </div>
      </div>
    </>
  );
}