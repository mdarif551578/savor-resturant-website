
import Link from "next/link";
import { Facebook, Instagram, Twitter, UtensilsCrossed } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">Savor</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Flavors from around the world, served fine.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Level 7, Ahmed & Kazi Tower, Dhanmondi 2, Dhaka, Bangladesh</li>
              <li>01338-892580</li>
              <li>savor0525@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="text-sm font-semibold uppercase tracking-wider">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.icon.displayName}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Savor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
