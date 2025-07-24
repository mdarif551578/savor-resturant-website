
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blogData from "@/data/blog.json";
import { Calendar, User } from "lucide-react";
import {format} from "date-fns";
import { ImageWithOverlay } from "@/components/shared/image-with-overlay";

export default function BlogPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="From Our Kitchen"
        subtitle="Stories, tips, and news from the heart of Culinary Canvas."
        imageSrc="https://placehold.co/1600x500.png"
        imageHint="food blog"
      />
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.posts.map((post, i) => (
             <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <Card className="flex flex-col overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl h-full">
                <CardHeader className="p-0 h-56">
                  <Link href={`/blog/${post.id}`}>
                    <ImageWithOverlay
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      data-ai-hint="food article"
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-2xl">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">{post.title}</Link>
                  </CardTitle>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3"/>
                      <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3"/>
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <CardDescription className="mt-4 text-left">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto transition-transform hover:scale-105">
                    <Link href={`/blog/${post.id}`}>Read More &rarr;</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
