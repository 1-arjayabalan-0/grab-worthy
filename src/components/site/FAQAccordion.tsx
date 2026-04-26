import React from 'react';
import { BlogFAQ } from '@/data/blogs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQAccordion({ faqs }: { faqs: BlogFAQ[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="my-12 p-8 bg-card border border-border">
      <h3 className="font-serif text-2xl text-foreground mb-6">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-border">
            <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-primary transition-colors py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}