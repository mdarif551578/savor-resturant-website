
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import careersData from "@/data/careers.json";
import { Check } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Join Our Team"
        subtitle="We're looking for passionate individuals to help us create unforgettable dining experiences. Explore our open positions."
        imageSrc="https://placehold.co/1600x500.png"
        imageHint="restaurant team"
      />
      <div className="container mx-auto py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {careersData.openings.map((job, i) => (
            <div key={job.title} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-left">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl text-primary">{job.title}</CardTitle>
                  <CardDescription className="pt-2 text-base">{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg text-foreground mb-4">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-right">
                    <Button as="a" href="mailto:careers@culinarycanvas.com" className="transition-transform hover:scale-105">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: `${careersData.openings.length * 0.15}s` }}>
          <h3 className="font-headline text-2xl text-foreground">Don't see a fit?</h3>
          <p className="text-muted-foreground mt-2">
            We're always open to connecting with talented people. <br/>
            Feel free to send your resume to <a href="mailto:careers@culinarycanvas.com" className="text-primary hover:underline">careers@culinarycanvas.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
