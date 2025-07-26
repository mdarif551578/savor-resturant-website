
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import eventsData from "@/data/events.json";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { ImageWithOverlay } from "@/components/shared/image-with-overlay";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Upcoming Events"
        subtitle="Join us for special occasions, from wine tastings to seasonal celebrations."
        imageSrc="/reservation.jpg"
        imageHint="special events"
      />
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.events.map((event, i) => (
            <div key={event.title} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <Card className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl h-full">
                <CardHeader className="p-0 h-56">
                  <ImageWithOverlay
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={250}
                    overlayClassName="bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                    data-ai-hint="restaurant event"
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-2xl text-primary">{event.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground my-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4"/>
                      <span>{format(new Date(event.date), "MMMM d, yyyy")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4"/>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <CardDescription className="mt-2 text-base">{event.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full transition-transform hover:scale-105">
                    <Link href="/reservations">Book Your Spot</Link>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
