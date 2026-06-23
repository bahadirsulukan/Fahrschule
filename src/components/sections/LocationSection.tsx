import { useTranslations } from "next-intl";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function LocationSection() {
  const t = useTranslations("location");

  return (
    <section className="py-24 px-6 bg-[var(--ivory)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-xl overflow-hidden border border-[var(--line)] aspect-video lg:aspect-square">
            <iframe
              title="Fahrschule Kendirci auf Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.2!2d8.6370!3d49.8775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd709a5f0c8f6d%3A0x0!2sKiesstra%C3%9Fe+35%2C+64283+Darmstadt!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brass)]/10 flex items-center justify-center text-[var(--brass)] flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <div className="font-medium text-[var(--charcoal)] mb-1">Adresse</div>
                <div className="text-[var(--muted)] text-sm">{t("address")}</div>
                <div className="text-xs text-[var(--muted)] mt-1">Plus Code: VM95+7H Darmstadt</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brass)]/10 flex items-center justify-center text-[var(--brass)] flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <div className="font-medium text-[var(--charcoal)] mb-1">Telefon</div>
                <a
                  href="tel:+491702382827"
                  className="text-[var(--brass)] hover:text-[var(--brass-600)] font-medium transition-colors"
                >
                  {t("phone")}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brass)]/10 flex items-center justify-center text-[var(--brass)] flex-shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <div className="font-medium text-[var(--charcoal)] mb-1">{t("hours_title")}</div>
                <div className="text-[var(--muted)] text-sm">{t("hours_note")}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="https://maps.google.com/maps/dir//Kiesstraße+35,+64283+Darmstadt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--charcoal)] hover:bg-black text-white font-medium px-6 py-3 rounded-xl transition-colors text-sm"
              >
                <Navigation size={16} />
                {t("directions")}
              </a>
              <a
                href="tel:+491702382827"
                className="inline-flex items-center justify-center gap-2 bg-[var(--brass)] hover:bg-[var(--brass-600)] text-white font-medium px-6 py-3 rounded-xl transition-colors text-sm"
              >
                <Phone size={16} />
                {t("call")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
