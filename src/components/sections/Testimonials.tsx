import { useTranslations } from "next-intl";
import { Star, ExternalLink } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const reviews = t.raw("reviews") as Array<{ text: string; author: string; rating: number }>;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4">
            {t("title")}
          </h2>
          <p className="text-[var(--muted)] text-lg">{t("sub")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[var(--ivory)] border border-[var(--line)] rounded-xl p-8 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-[var(--brass)] text-[var(--brass)]" />
                ))}
              </div>
              <p className="text-[var(--ink)] text-sm leading-relaxed flex-1 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm text-[var(--charcoal)]">{r.author}</span>
                <span className="text-xs text-[var(--muted)]">{t("source")}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://maps.app.goo.gl/VM95+7H"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--brass)] hover:text-[var(--brass-600)] font-medium transition-colors text-sm"
          >
            {t("cta")} <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
