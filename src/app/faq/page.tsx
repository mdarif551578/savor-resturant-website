
import { PageHeader } from "@/components/shared/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "@/data/faq.json";

export default function FaqPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our restaurant, reservations, and more."
        imageSrc="https://placehold.co/1600x500.png"
        imageHint="questions answers"
      />
      <div className="container mx-auto py-20">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.faqs.map((faq, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <AccordionItem value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="text-left font-headline text-xl hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
