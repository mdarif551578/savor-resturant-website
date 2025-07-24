
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import team from "@/data/team.json";
import { ImageWithOverlay } from "@/components/shared/image-with-overlay";

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="Our Story"
        subtitle="Crafting memories, one plate at a time."
        imageSrc="https://placehold.co/1600x500.png"
        imageHint="restaurant history"
      />
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="font-headline text-3xl text-foreground">Welcome to Savor</h2>
              <p>
                Founded in 2015, Savor was born from a simple yet powerful idea: to create a dining experience that transcends the ordinary. We believe that food is an art form, and our restaurant is the canvas where our talented chefs paint their masterpieces.
              </p>
              <p>
                Our philosophy is rooted in using the finest, locally-sourced ingredients to craft innovative dishes that honor both tradition and modernity. Every element on your plate is thoughtfully chosen and meticulously prepared to create a symphony of flavors, textures, and aromas.
              </p>
              <p>
                But our story is about more than just food. It's about creating a warm, inviting atmosphere where guests can relax, connect, and make lasting memories. We are more than just a restaurant; we are a destination for those who appreciate the beauty of a well-crafted meal and the joy of shared moments.
              </p>
            </div>
            <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
               <ImageWithOverlay
                  src="https://placehold.co/600x800.png"
                  alt="Our Chef"
                  width={600}
                  height={800}
                  data-ai-hint="chef portrait"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground">Meet the Team</h2>
          <p className="mt-2 text-muted-foreground">The passion and talent behind our creations.</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.members.map((member) => (
              <Card key={member.name} className="border-0 shadow-lg bg-card overflow-hidden">
                <CardContent className="p-0 text-center flex flex-col items-center pt-6">
                  <div className="w-36 h-36 rounded-full overflow-hidden">
                    <ImageWithOverlay
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={150}
                      data-ai-hint="professional portrait"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
