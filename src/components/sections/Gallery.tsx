"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

const photos = Array.from({ length: 16 }, (_, i) => `/media/photos/${String(i + 1).padStart(2, "0")}.webp`);

export default function Gallery() {
  const t = useTranslations("gallery");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[var(--ivory)] overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4">
          {t("title")}
        </h2>
        <p className="text-[var(--muted)] text-lg">{t("sub")}</p>
      </div>

      {/* Auto-scrolling slider — full width, no horizontal padding */}
      <ImageAutoSlider images={photos} speed={42} onImageClick={setLightbox} />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            onClick={() => setLightbox(null)}
            aria-label="Schließen"
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[90vh] aspect-square md:aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Galerie-Bild"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
