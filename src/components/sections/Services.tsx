import Link from "next/link";
import { useTranslations } from "next-intl";
import { Car, RotateCcw, BookOpen, Zap, ArrowRight, Bike } from "lucide-react";

export default function Services({ locale }: { locale: string }) {
  const t = useTranslations("services");

  const cards = [
    { key: "classB", icon: <Car size={22} /> },
    { key: "classB197", icon: <Car size={22} /> },
    { key: "classA", icon: <Bike size={22} /> },
    { key: "refresher", icon: <RotateCcw size={22} /> },
    { key: "theory", icon: <BookOpen size={22} /> },
    { key: "intensive", icon: <Zap size={22} /> },
  ] as const;

  return (
    <section className="py-24 px-6 bg-[var(--ivory)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4">
            {t("title")}
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">{t("sub")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ key, icon }) => (
            <div
              key={key}
              className="group bg-white border border-[var(--line)] rounded-xl p-8 hover:border-[var(--brass)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--brass)]/10 flex items-center justify-center text-[var(--brass)] mb-5 group-hover:bg-[var(--brass)] group-hover:text-white transition-colors">
                {icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-3">
                {t(`${key}.name` as Parameters<typeof t>[0])}
              </h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {t(`${key}.desc` as Parameters<typeof t>[0])}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-[var(--muted)] mb-6">{t("prices_note")}</p>
          <Link
            href={`/${locale}/leistungen`}
            className="inline-flex items-center gap-2 text-[var(--brass)] hover:text-[var(--brass-600)] font-medium transition-colors"
          >
            {t("more")} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
