import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Star, Heart, Globe, Zap } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "de" ? "Über uns" : "About Us",
    description: locale === "de"
      ? "Lernen Sie Fahrschule Kendirci kennen — persönliche Betreuung, faire Preise und echte Leidenschaft in Darmstadt."
      : "Meet Fahrschule Kendirci — personal guidance, fair prices and genuine passion in Darmstadt.",
  };
}

const photos = Array.from({ length: 16 }, (_, i) => `/media/photos/${String(i + 1).padStart(2, "0")}.webp`);

export default async function UeberUnsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  const values = [
    { icon: <Star className="fill-[var(--brass)] text-[var(--brass)]" size={20} />, label: locale === "de" ? "Top-Bewertung" : "Top Rating" },
    { icon: <Heart size={20} className="text-[var(--brass)]" />, label: locale === "de" ? "Persönliche Betreuung" : "Personal Support" },
    { icon: <Globe size={20} className="text-[var(--brass)]" />, label: locale === "de" ? "Mehrsprachig" : "Multilingual" },
    { icon: <Zap size={20} className="text-[var(--brass)]" />, label: locale === "de" ? "Schnell & Fair" : "Fast & Fair" },
  ];

  return (
    <>
      {/* Hero */}
      <div className="relative bg-[var(--charcoal)] pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={photos[2]} alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[var(--charcoal)]/70" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-white/60 text-xl">{t("hero_sub")}</p>
        </div>
      </div>

      {/* Story */}
      <section className="py-24 px-6 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src={photos[0]}
              alt="Fahrschule Kendirci"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[var(--charcoal)] mb-6">
              {t("story_title")}
            </h2>
            <p className="text-[var(--muted)] leading-relaxed text-lg mb-8">{t("story")}</p>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.label} className="flex items-center gap-3 text-sm font-medium text-[var(--ink)]">
                  {v.icon}
                  {v.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-[var(--charcoal)] mb-12">
            {t("team_title")}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10 text-left">
            <div className="relative w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-[var(--line)]">
              <Image
                src={photos[4]}
                alt={t("team_name")}
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
            <div>
              <div className="font-serif text-2xl font-semibold text-[var(--charcoal)] mb-1">{t("team_name")}</div>
              <div className="text-[var(--brass)] text-sm font-medium mb-4 uppercase tracking-wider">{t("team_role")}</div>
              <p className="text-[var(--muted)] leading-relaxed">{t("team_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-16 px-6 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl font-semibold text-[var(--charcoal)] mb-8 text-center">
            {t("gallery_title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {photos.slice(5, 9).map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image src={src} alt={`Fahrschule Kendirci ${i + 6}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
