
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

import menu from '@/data/menu.json';
import testimonials from '@/data/testimonials.json';
import { ReservationForm } from '@/components/shared/reservation-form';
import { ImageWithOverlay } from '@/components/shared/image-with-overlay';

export default function Home() {
  const featuredDishes = menu.items.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative h-screen w-full text-white">
        <ImageWithOverlay
          src="https://placehold.co/1600x900.png"
          alt="Restaurant ambiance"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10"
          imageClassName="bg-black"
          overlayClassName="bg-gradient-to-t from-black via-black/50 to-black/50"
          data-ai-hint="restaurant ambiance"
          priority
        />
        <div className="container mx-auto flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-5xl font-bold md:text-7xl animate-fade-in-down">
            Savor
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl animate-fade-in-up">
            Flavors from around the world, served fine. We host Family Events * Dates * Meeting * Wedding & Celebrations.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 px-8 rounded-full transition-transform transform hover:scale-105">
              <Link href="/menu">Explore Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-bold text-lg py-6 px-8 rounded-full transition-transform transform hover:scale-105">
              <Link href="/reservations">Book a Table</Link>
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
                <CardHeader className="p-0 h-64">
                   <ImageWithOverlay
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      overlayClassName="bg-gradient-to-t from-black/80 via-black/50 to-transparent"
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
          <p className="text-sm text-muted-foreground mt-2">Not yet rated (1 review)</p>
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
                              <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
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
           <div className="max-w-2xl mx-auto p-8 bg-card rounded-lg shadow-2xl">
            <h2 className="font-headline text-3xl font-bold text-foreground mb-6 text-center">Make a Reservation</h2>
            <ReservationForm />
           </div>
        </div>
      </section>
    </div>
  );
}
