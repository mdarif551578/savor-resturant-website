
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Mail, MapPin, Phone, Star } from 'lucide-react';

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
          overlayClassName="bg-gradient-to-t from-black via-black/50 to-transparent"
          data-ai-hint="restaurant ambiance"
          priority
        />
        <div className="container mx-auto flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-5xl font-bold md:text-7xl animate-fade-in-down">
            Savor - A Multicuisine Restaurant
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl animate-fade-in-up">
            Flavors from around the world, served fine.
            <br />
            We host Family Events * Dates * Meeting * Wedding & Celebrations.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 px-8 rounded-full transition-transform transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link href="/menu">Explore Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-bold text-lg py-6 px-8 rounded-full transition-transform transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link href="/reservations">Book a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground animate-fade-in-up">Featured Dishes</h2>
          <p className="mt-2 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>A selection of our most loved creations.</p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.map((item, i) => (
              <div key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.2 + 0.2}s` }}>
                <Card className="overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground animate-fade-in-up">What Our Guests Say</h2>
          <p className="text-sm text-muted-foreground mt-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Not yet rated (1 review)</p>
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
                      <Card className="h-full flex flex-col justify-between p-6 text-left shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
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
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold text-foreground animate-fade-in-up">Find Us</h2>
            <p className="mt-2 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Visit us for an unforgettable dining experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-from-left">
              <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-lg">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d3652.285848338977!2d90.37523381498114!3d23.73719008459639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b17fc6ff45%3A0x1b373634a34b8c6!2sAhmed%20%26%20Kazi%20Tower!5e0!3m2!1sen!2sbd!4v1678263393198!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="space-y-6 animate-slide-in-from-right">
                <h3 className="font-headline text-2xl font-bold text-foreground">Our Location</h3>
                <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                        <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                        <span>Level 7, Ahmed & Kazi Tower, Dhanmondi 2, Dhaka, Bangladesh</span>
                    </li>
                    <li className="flex items-center">
                        <Phone className="h-6 w-6 text-primary mr-4" />
                        <span>01338-892580</span>
                    </li>
                    <li className="flex items-center">
                        <Mail className="h-6 w-6 text-primary mr-4" />
                        <a href="mailto:savor0525@gmail.com" className="hover:text-primary transition-colors">
                        savor0525@gmail.com
                        </a>
                    </li>
                </ul>
                <Button asChild variant="outline" className="transition-transform hover:scale-105">
                    <Link href="/contact">Get Directions</Link>
                </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto">
           <div className="max-w-2xl mx-auto p-8 bg-card rounded-lg shadow-2xl animate-fade-in-up">
            <h2 className="font-headline text-3xl font-bold text-foreground mb-6 text-center">Make a Reservation</h2>
            <ReservationForm />
           </div>
        </div>
      </section>
    </div>
  );
}
