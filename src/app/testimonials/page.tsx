
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import { SentimentSummarizer } from "@/components/shared/sentiment-summarizer";

export default function TestimonialsPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="What Our Guests Are Saying"
        subtitle="We're proud to share the experiences of our valued customers. Your feedback inspires us."
        imageSrc="/reservation.jpg"
        imageHint="customer reviews"
      />
      
      <section className="container mx-auto py-20">
        <SentimentSummarizer />
      </section>
      
      <section className="container mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.testimonials.map((testimonial, index) => (
             <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transition-transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter>
                  <p className="font-bold text-right w-full text-primary">- {testimonial.name}</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
