"use client";

import { useTranslations } from "next-intl";
import { Link } from "@i18n/navigation";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-[var(--charcoal)] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <div className="font-serif text-xl font-semibold text-white">Fahrschule</div>
            <div className="font-serif text-sm text-[var(--brass)] tracking-widest uppercase">Kendirci</div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">{t("tagline")}</p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="tel:+491702382827"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-[var(--brass)] transition-colors"
            >
              <Phone size={14} />
              0170 238 2827
            </a>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <MapPin size={14} />
              Kiesstraße 35, 64283 Darmstadt
            </div>
          </div>
        </div>

        {/* Nav */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-white/40 mb-5">{t("nav_title")}</h3>
          <ul className="flex flex-col gap-3">
            {[
              { href: "/", label: nav("home") },
              { href: "/leistungen", label: nav("services") },
              { href: "/ueber-uns", label: nav("about") },
              { href: "/kontakt", label: nav("contact") },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-white/40 mb-5">{t("legal_title")}</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/impressum" className="text-sm text-white/70 hover:text-white transition-colors">
                {t("imprint")}
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="text-sm text-white/70 hover:text-white transition-colors">
                {t("privacy")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-center">
          <p className="text-xs text-white/40">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
