"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageAutoSliderProps {
  images: string[];
  speed?: number;
  onImageClick?: (src: string) => void;
}

export const ImageAutoSlider = ({ images, speed = 30, onImageClick }: ImageAutoSliderProps) => {
  const [paused, setPaused] = useState(false);
  const duplicated = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes slider-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .slider-track {
          animation: slider-scroll ${speed}s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div
        className="w-full overflow-hidden py-4"
        style={{
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage: "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div
          className="slider-track flex gap-4 w-max"
          style={{ animationPlayState: paused ? "paused" : "running" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {duplicated.map((src, i) => (
            <button
              key={i}
              onClick={() => onImageClick?.(images[i % images.length])}
              className="flex-shrink-0 w-44 h-44 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8945F] group cursor-pointer"
              aria-label={`Foto ${(i % images.length) + 1} vergrößern`}
            >
              <Image
                src={src}
                alt={`Fahrschule Kendirci Foto ${(i % images.length) + 1}`}
                width={288}
                height={288}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading={i < images.length ? "eager" : "lazy"}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
