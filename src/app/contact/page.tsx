
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/shared/contact-form";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether it's a question, a reservation, or feedback, get in touch with us."
        imageSrc="https://placehold.co/1600x500.png"
        imageHint="restaurant contact"
      />
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 bg-card p-8 rounded-lg shadow-lg animate-slide-in-from-left">
            <h2 className="font-headline text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-8 animate-slide-in-from-right">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="font-headline text-2xl font-bold text-foreground mb-4">Our Details</h3>
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
            </div>
            
             <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <social.icon className="h-8 w-8" />
                        <span className="sr-only">{social.name}</span>
                    </Link>
                  ))}
                </div>
            </div>

          </div>
        </div>

         <div className="mt-20 animate-fade-in-up">
            <h2 className="font-headline text-center text-3xl font-bold text-foreground mb-6">Find Us Here</h2>
             <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-lg">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.285848338977!2d90.37523381498114!3d23.73719008459639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b17fc6ff45%3A0x1b373634a34b8c6!2sAhmed%20%26%20Kazi%20Tower!5e0!3m2!1sen!2sbd!4v1678263393198!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>

      </div>
    </div>
  );
}
