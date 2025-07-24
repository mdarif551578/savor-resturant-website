
"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import galleryData from "@/data/gallery.json";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageWithOverlay } from "@/components/shared/image-with-overlay";


export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <PageHeader
        title="Our Gallery"
        subtitle="A glimpse into the ambiance, dishes, and moments that make Culinary Canvas special."
      />
      <div className="container mx-auto py-20">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryData.images.map((img, index) => (
            <Dialog key={index} onOpenChange={(open) => !open && setSelectedImage(null)}>
              <DialogTrigger asChild>
                <div 
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl"
                  onClick={() => setSelectedImage(img.src)}
                >
                    <ImageWithOverlay
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                      imageClassName="object-cover"
                      data-ai-hint={img.hint}
                    />
                </div>
              </DialogTrigger>
              {selectedImage === img.src && (
                 <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                    <Image
                        src={selectedImage}
                        alt="Enlarged gallery view"
                        width={1200}
                        height={800}
                        className="rounded-lg object-contain"
                    />
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
