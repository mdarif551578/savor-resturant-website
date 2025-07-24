
import { notFound } from "next/navigation";
import Image from "next/image";
import blogData from "@/data/blog.json";
import { Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { ImageWithOverlay } from "@/components/shared/image-with-overlay";
import { PageHeader } from "@/components/shared/page-header";

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
      <PageHeader
        title={post.title}
        subtitle={`By ${post.author} on ${format(new Date(post.date), "MMMM d, yyyy")}`}
        imageSrc={post.image}
        imageHint="food article"
      />
      <div className="container mx-auto py-20">
        <article className="max-w-4xl mx-auto">
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
