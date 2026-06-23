import Link from "next/link";
import { useTranslations } from "next-intl";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection({ locale }: { locale: string }) {
  const t = useTranslations("cta_section");

  return (
    <section className="bg-[var(--ink)] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-5">
          {t("title")}
        </h2>
        <p className="text-white/60 text-lg mb-10">{t("sub")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+491702382827"
            className="inline-flex items-center justify-center gap-3 bg-[var(--brass)] hover:bg-[var(--brass-600)] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            <Phone size={20} />
            {t("cta_call")}
          </a>
          <Link
            href={`/${locale}/kontakt`}
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-8 py-4 rounded-xl transition-colors text-base"
          >
            {t("cta_contact")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
