'use client';

import { useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';

const amenities = [
  { name: 'Free WiFi', icon: '📶' },
  { name: 'AC Rooms', icon: '❄️' },
  { name: 'TV', icon: '📺' },
  { name: 'Kitchen', icon: '🍳' },
];

const galleryImages = [
  {
    image: image1,
    alt: 'Luxury interior placeholder',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    image: image2,
    alt: 'Quiet lounge placeholder',
    className: 'md:col-span-1',
  },
  {
    image: image3,
    alt: 'Elegant suite placeholder',
    className: 'md:col-span-1',
  },
  {
    image: image4,
    alt: 'Refined bedroom placeholder',
    className: 'md:col-span-2',
  },
  {
    image: image5,
    alt: 'Luxury bathroom placeholder',
    className: 'md:col-span-1',
  },
  {
    image: image6,
    alt: 'Cozy reading nook placeholder',
    className: 'md:col-span-1',
  },
];
  

export default function AmenitiesGallerySection() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeLightbox = () => setSelectedImage(null);

  return (
    <section id="gallery" className="bg-warm px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-4">Amenities</p>
          <h2 className="section-title">Everything You Need</h2>
          <p className="section-copy mt-5">
            Thoughtful comforts, beautifully considered, for a stay that feels effortless.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.name + index}
              className="card-surface p-8 text-center transition duration-200 hover:-translate-y-1"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-2xl text-navy">
                <span className="leading-none">{amenity.icon}</span>
              </div>
              <h3 className="mt-6 font-serif text-xl text-navy">{amenity.name}</h3>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-3xl text-center">
          <p className="section-label mb-4">Gallery</p>
          <h2 className="section-title">Discover Our Spaces</h2>
          <p className="section-copy mt-5">
            Subtle textures, calm light, and moments of stillness captured in soft editorial form.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={`${image.alt}-${index}`}
              type="button"
              aria-label={`Open ${image.alt}`}
              onClick={() => setSelectedImage(image.image)}
              className={`card-surface group relative overflow-hidden bg-white transition duration-200 hover:-translate-y-1 ${image.className}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src={image.image}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-300 ease-out group-hover:scale-105"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(2,6,23,0.88)] px-4 py-8 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-sm"
            >
              Close
            </button>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
              <Image
                src={selectedImage}
                alt="Expanded gallery view"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
