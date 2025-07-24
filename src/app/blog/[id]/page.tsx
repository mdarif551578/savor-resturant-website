
import { notFound } from "next/navigation";
import Image from "next/image";
import blogData from "@/data/blog.json";
import { Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { ImageWithOverlay } from "@/components/shared/image-with-overlay";

export async function generateStaticParams() {
  return blogData.posts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogData.posts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto py-20">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4"/>
                <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4"/>
                <span>By {post.author}</span>
              </div>
            </div>
          </header>
          
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg mb-12">
            <ImageWithOverlay
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint="food article"
            />
          </div>

          <div
            className="prose prose-lg max-w-none text-muted-foreground mx-auto text-left"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Separator className="my-12" />

          <div className="text-center">
            <h3 className="font-headline text-2xl font-semibold">About the Author</h3>
            <p className="mt-2 text-muted-foreground">{post.author}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
