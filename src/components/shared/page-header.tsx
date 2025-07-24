
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-muted/30 text-center", className)}>
      <div className="container">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
