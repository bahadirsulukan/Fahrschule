"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@i18n/navigation";

const locales = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
] as const;

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className="inline-flex items-center rounded-full border border-[var(--line)] bg-white/60 p-0.5"
      role="group"
      aria-label="Sprache wählen / Choose language"
    >
      {locales.map((l) => {
        const active = currentLocale === l.code;
        return (
          <Link
            key={l.code}
            href={pathname}
            locale={l.code}
            aria-current={active ? "true" : undefined}
            className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors ${
              active
                ? "bg-[var(--brass)] text-white"
                : "text-[var(--muted)] hover:text-[var(--brass)]"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
