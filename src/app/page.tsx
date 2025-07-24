
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

import menu from '@/data/menu.json';
import testimonials from '@/data/testimonials.json';
import { ContactForm } from '@/components/shared/contact-form';

export default function Home() {
  const featuredDishes = menu.items.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] w-full text-white">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Restaurant ambiance"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10 brightness-50"
          data-ai-hint="restaurant ambiance"
        />
        <div className="container mx-auto flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-5xl font-bold md:text-7xl animate-fade-in-down">
            Savor
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl animate-fade-in-up">
            Flavors from around the world, served fine. We host Family Events, Dates, Meetings, Weddings & Celebrations.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 px-8 rounded-full transition-transform transform hover:scale-105">
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-bold text-lg py-6 px-8 rounded-full transition-transform transform hover:scale-105">
              <Link href="/reservations">Make a Reservation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground">Featured Dishes</h2>
          <p className="mt-2 text-muted-foreground">A selection of our most loved creations.</p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.map((item) => (
              <Card key={item.name} className="overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                <CardHeader className="p-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover"
                    data-ai-hint="gourmet food"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-2xl">{item.name}</CardTitle>
                  <CardDescription className="mt-2 text-base">{item.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <p className="text-xl font-bold text-primary">${item.price.toFixed(2)}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground">What Our Guests Say</h2>
          <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full flex flex-col justify-between p-6 text-left shadow-lg">
                        <div>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted'}`} />
                            ))}
                          </div>
                          <p className="mt-4 text-muted-foreground italic">"{testimonial.quote}"</p>
                        </div>
                        <p className="mt-4 font-bold text-right text-primary">- {testimonial.name}</p>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="font-headline text-4xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground">Have a question or special request? Drop us a line.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
            <div className="h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Restaurant interior"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint="restaurant interior"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
