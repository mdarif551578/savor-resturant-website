
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
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether it's a question, a reservation, or feedback, get in touch with us."
      />
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 bg-card p-8 rounded-lg shadow-lg">
            <h2 className="font-headline text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="font-headline text-2xl font-bold text-foreground mb-4">Our Details</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <span>123 Gourmet Lane, Foodie City, 12345</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                   <a href="mailto:contact@culinarycanvas.com" className="hover:text-primary transition-colors">
                    contact@culinarycanvas.com
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

         <div className="mt-20">
            <h2 className="font-headline text-center text-3xl font-bold text-foreground mb-6">Find Us Here</h2>
             <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-lg">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.225826848605!2d-122.4194156846813!3d37.77492957975904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c4c7c3b9b%3A0x2d3a1f3da7e1c84f!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1626349320823!5m2!1sen!2sus" 
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
