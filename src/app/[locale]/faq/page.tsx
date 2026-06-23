"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const t = useTranslations("faq");
  const questions = t.raw("questions") as Array<{ q: string; a: string }>;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <div className="bg-[var(--charcoal)] pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">{t("title")}</h1>
          <p className="text-white/60 text-xl">{t("hero_sub")}</p>
        </div>
      </div>

      <section className="py-24 px-6 bg-[var(--ivory)]">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {questions.map((item, i) => (
            <div key={i} className="bg-white border border-[var(--line)] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="font-medium text-[var(--charcoal)] group-hover:text-[var(--brass)] transition-colors pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[var(--muted)] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-[var(--muted)] text-sm leading-relaxed border-t border-[var(--line)] pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
