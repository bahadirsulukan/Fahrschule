"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@i18n/navigation";
import { Menu, X, Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/leistungen", label: t("services") },
    { href: "/ueber-uns", label: t("about") },
    { href: "/kontakt", label: t("contact") },
  ];

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-[var(--ivory)]/95 backdrop-blur-sm shadow-sm border-b border-[var(--line)]"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-lg font-semibold tracking-tight text-[var(--charcoal)]">
            Fahrschule
          </span>
          <span className="font-serif text-sm text-[var(--brass)] tracking-widest uppercase">
            Kendirci
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--ink)] hover:text-[var(--brass)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Lang switcher */}
          <LanguageSwitcher />

          {/* CTA */}
          <a
            href="tel:+491702382827"
            className="flex items-center gap-2 bg-[var(--brass)] hover:bg-[var(--brass-600)] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <Phone size={14} />
            {t("cta")}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-[var(--ink)]"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--ivory)] border-t border-[var(--line)] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-[var(--ink)] hover:text-[var(--brass)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-[var(--line)]">
            <LanguageSwitcher />
            <a
              href="tel:+491702382827"
              className="flex items-center gap-2 bg-[var(--brass)] text-white text-sm font-medium px-4 py-2 rounded-lg"
            >
              <Phone size={14} />
              {t("cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
