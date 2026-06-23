"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function KontaktPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", gdpr: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSent(true);
      } else if (res.status === 503) {
        // Backend not configured yet → fall back to opening the mail client
        const mailto = `mailto:info@fahrschule-kendirci.de?subject=${encodeURIComponent(
          "Kontaktanfrage von " + form.name
        )}&body=${encodeURIComponent(
          form.message + "\n\nE-Mail: " + form.email
        )}`;
        window.location.href = mailto;
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <div className="bg-[var(--charcoal)] pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-white/60 text-xl">{t("hero_sub")}</p>
        </div>
      </div>

      <section className="py-24 px-6 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[var(--charcoal)] mb-8">{t("form_title")}</h2>

            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle size={48} className="text-[var(--brass)]" />
                <p className="text-[var(--charcoal)] font-medium text-lg">{t("success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--ink)] mb-2">{t("name")}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-[var(--line)] bg-white rounded-xl px-4 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--brass)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--ink)] mb-2">{t("email")}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[var(--line)] bg-white rounded-xl px-4 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--brass)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--ink)] mb-2">{t("message")}</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[var(--line)] bg-white rounded-xl px-4 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--brass)] transition-colors resize-none"
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={form.gdpr}
                    onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
                    className="mt-1 accent-[var(--brass)]"
                  />
                  <span className="text-xs text-[var(--muted)] leading-relaxed">
                    {t("gdpr")}{" "}
                    <a href={`/${locale}/datenschutz`} className="text-[var(--brass)] underline hover:no-underline">
                      {locale === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
                    </a>
                  </span>
                </label>
                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {locale === "de"
                      ? "Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an."
                      : "Something went wrong. Please try again or call us."}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-[var(--brass)] hover:bg-[var(--brass-600)] disabled:opacity-60 text-white font-medium px-8 py-4 rounded-xl transition-colors"
                >
                  <Send size={16} />
                  {loading ? (locale === "de" ? "Senden…" : "Sending…") : t("submit")}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <h2 className="font-serif text-2xl font-semibold text-[var(--charcoal)]">{t("info_title")}</h2>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brass)]/10 flex items-center justify-center text-[var(--brass)]">
                <Phone size={18} />
              </div>
              <div>
                <div className="font-medium text-[var(--charcoal)] mb-1">Telefon</div>
                <a href="tel:+491702382827" className="text-[var(--brass)] hover:text-[var(--brass-600)] font-semibold text-lg transition-colors">
                  0170 238 2827
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brass)]/10 flex items-center justify-center text-[var(--brass)]">
                <MapPin size={18} />
              </div>
              <div>
                <div className="font-medium text-[var(--charcoal)] mb-1">Adresse</div>
                <div className="text-[var(--muted)]">Kiesstraße 35<br />64283 Darmstadt</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brass)]/10 flex items-center justify-center text-[var(--brass)]">
                <Clock size={18} />
              </div>
              <div>
                <div className="font-medium text-[var(--charcoal)] mb-1">
                  {locale === "de" ? "Öffnungszeiten" : "Opening Hours"}
                </div>
                <div className="text-[var(--muted)] text-sm">
                  {locale === "de" ? "Ab 18:00 Uhr — vollständige Zeiten auf Anfrage" : "From 18:00 — full hours on request"}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-[var(--line)] aspect-video mt-4">
              <iframe
                title="Karte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.2!2d8.6370!3d49.8775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd709a5f0c8f6d%3A0x0!2sKiesstra%C3%9Fe+35%2C+64283+Darmstadt!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
