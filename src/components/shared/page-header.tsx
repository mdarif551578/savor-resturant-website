
import { cn } from "@/lib/utils";
import { ImageWithOverlay } from "./image-with-overlay";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  imageSrc?: string;
  imageHint?: string;
}

export function PageHeader({ title, subtitle, className, imageSrc = "https://placehold.co/1600x500.png", imageHint = "restaurant detail" }: PageHeaderProps) {
  return (
    <section className={cn("relative text-center text-white h-[40vh] flex items-center justify-center", className)}>
       <ImageWithOverlay
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10"
          data-ai-hint={imageHint}
          priority
        />
      <div className="container">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
