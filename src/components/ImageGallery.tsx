'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
}

export default function ImageGallery({ images, title = "Gallery" }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">{title}</h2>
      
      {/* Grid of thumbnail images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openImage(index)}
            className="relative h-48 cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-full max-w-4xl max-h-96 flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white hover:text-primary transition z-10"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white hover:text-primary transition"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full">
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
              />
              {images[selectedIndex].title && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-lg font-semibold">{images[selectedIndex].title}</p>
                </div>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 text-white hover:text-primary transition"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
