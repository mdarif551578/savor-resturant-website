
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, UtensilsCrossed } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/nav";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label }: { href: string, label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-lg font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary font-bold" : "text-muted-foreground"
      )}
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">Savor</span>
        </Link>
        
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
               <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <UtensilsCrossed className="h-6 w-6 text-primary" />
                <span className="font-headline text-xl font-bold">Savor</span>
              </Link>
              <nav className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </nav>
               <Button asChild className="mt-4 bg-primary hover:bg-accent text-primary-foreground font-bold rounded-full">
                  <Link href="/reservations">Reserve a Table</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
