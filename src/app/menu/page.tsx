
"use client";

import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import menuData from "@/data/menu.json";
import type { MenuItem } from "@/types";

export default function MenuPage() {
  const { categories, items } = menuData;

  const getItemsByCategory = (category: string): MenuItem[] => {
    return items.filter((item) => item.category === category);
  };

  return (
    <div>
      <PageHeader
        title="Our Menu"
        subtitle="A symphony of flavors crafted with the freshest seasonal ingredients."
      />
      <div className="container mx-auto py-20">
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getItemsByCategory(category).map((item) => (
                  <Card key={item.name} className="overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                    <CardHeader className="p-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={300}
                        className="h-64 w-full object-cover"
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
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
