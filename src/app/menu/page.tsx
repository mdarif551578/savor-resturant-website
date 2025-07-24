
"use client";

import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import menuData from "@/data/menu.json";
import type { MenuItem } from "@/types";
import { ImageWithOverlay } from "@/components/shared/image-with-overlay";

export default function MenuPage() {
  const { categories, items } = menuData;

  const getItemsByCategory = (category: string): MenuItem[] => {
    return items.filter((item) => item.category === category);
  };

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Our Menu"
        subtitle="A symphony of flavors crafted with the freshest seasonal ingredients."
        imageSrc="https://placehold.co/1600x500.png"
        imageHint="gourmet menu"
      />
      <div className="container mx-auto py-20">
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="transition-transform hover:scale-105">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getItemsByCategory(category).map((item, i) => (
                   <div key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    <Card className="overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl h-full">
                      <CardHeader className="p-0 h-64">
                        <ImageWithOverlay
                          src={item.image}
                          alt={item.name}
                          width={400}
                          height={300}
                          data-ai-hint="gourmet food"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="font-headline text-2xl">{item.name}</CardTitle>
                        <CardDescription className="mt-2 text-base h-12">{item.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <p className="text-xl font-bold text-primary">${item.price.toFixed(2)}</p>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
