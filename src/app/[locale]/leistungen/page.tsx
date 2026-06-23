import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Car, Bike, RotateCcw, BookOpen, Zap } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "de" ? "Leistungen & Führerscheinklassen" : "Services & Licence Classes",
    description: locale === "de"
      ? "Alle Führerscheinklassen bei Fahrschule Kendirci in Darmstadt — B, B197, A, Auffrischung, Intensivkurs."
      : "All licence classes at Fahrschule Kendirci in Darmstadt — B, B197, A, refresher, intensive.",
  };
}

export default async function LeistungenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "leistungen" });
  const s = await getTranslations({ locale, namespace: "services" });

  const classes = [
    { key: "classB", icon: <Car size={28} />, color: "bg-blue-50 text-blue-700" },
    { key: "classB197", icon: <Car size={28} />, color: "bg-purple-50 text-purple-700" },
    { key: "classA", icon: <Bike size={28} />, color: "bg-orange-50 text-orange-700" },
    { key: "refresher", icon: <RotateCcw size={28} />, color: "bg-green-50 text-green-700" },
    { key: "theory", icon: <BookOpen size={28} />, color: "bg-yellow-50 text-yellow-700" },
    { key: "intensive", icon: <Zap size={28} />, color: "bg-red-50 text-red-700" },
  ] as const;

  return (
    <>
      {/* Page hero */}
      <div className="bg-[var(--charcoal)] pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-white/60 text-xl">{t("hero_sub")}</p>
        </div>
      </div>

      {/* Classes */}
      <section className="py-24 px-6 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl font-semibold text-[var(--charcoal)] mb-12 text-center">
            {t("classes_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map(({ key, icon, color }) => (
              <div
                key={key}
                className="bg-white border border-[var(--line)] rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${color}`}>
                  {icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-3">
                  {s(`${key}.name` as Parameters<typeof s>[0])}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {s(`${key}.desc` as Parameters<typeof s>[0])}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices note */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-semibold text-[var(--charcoal)] mb-4">
            {t("prices_title")}
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">{t("prices_note")}</p>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
