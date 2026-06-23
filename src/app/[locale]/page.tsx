import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import USPs from "@/components/sections/USPs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import LocationSection from "@/components/sections/LocationSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Fahrschule Kendirci — Darmstadt",
  description:
    "Fahrschule Kendirci in Darmstadt — 4,9 ★ bei 154 Bewertungen. Persönliche Betreuung, faire Preise, mehrsprachige Unterstützung auf Deutsch, Englisch und Türkisch.",
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <TrustBar />
      <Services locale={locale} />
      <USPs />
      <Gallery />
      <Testimonials />
      <LocationSection />
      <CTASection locale={locale} />
    </>
  );
}
