"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Phone, ArrowRight, Star } from "lucide-react";

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations("hero");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  const START = 5.5;
  const END = 19;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    if (video.readyState >= 1) {
      video.currentTime = START;
    }
    video.play().catch(() => {});
  }, [reducedMotion]);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = START;
    video.play().catch(() => {});
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.currentTime >= END || video.currentTime < START) {
      video.currentTime = START;
      video.play().catch(() => {});
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {!reducedMotion ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/media/video/hero.mp4"
          poster="/media/photos/01.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/media/photos/01.webp)" }}
        />
      )}

      <div className="absolute inset-0 bg-[var(--charcoal)]/55" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 text-sm">
          <Star size={14} className="fill-[var(--brass)] text-[var(--brass)]" />
          <span>{t("trust")}</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
          {t("headline")}
        </h1>

        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl mx-auto">
          {t("sub")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+491702382827"
            className="inline-flex items-center justify-center gap-2 bg-[var(--brass)] hover:bg-[var(--brass-600)] text-white font-medium px-8 py-4 rounded-xl transition-colors text-base"
          >
            <Phone size={18} />
            {t("cta_call")}
          </a>
          <Link
            href={`/${locale}/kontakt`}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium px-8 py-4 rounded-xl transition-colors text-base"
          >
            {t("cta_contact")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
