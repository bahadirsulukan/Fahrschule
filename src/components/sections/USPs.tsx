import { useTranslations } from "next-intl";
import { Star, Zap, User, BadgeCheck, Globe, MapPin } from "lucide-react";

export default function USPs() {
  const t = useTranslations("usps");

  const items = [
    { key: "rating", icon: <Star className="fill-[var(--brass)] text-[var(--brass)]" size={22} /> },
    { key: "fast", icon: <Zap size={22} className="text-[var(--brass)]" /> },
    { key: "personal", icon: <User size={22} className="text-[var(--brass)]" /> },
    { key: "price", icon: <BadgeCheck size={22} className="text-[var(--brass)]" /> },
    { key: "multilingual", icon: <Globe size={22} className="text-[var(--brass)]" /> },
    { key: "local", icon: <MapPin size={22} className="text-[var(--brass)]" /> },
  ] as const;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4">
            {t("title")}
          </h2>
          <p className="text-[var(--muted)] text-lg">{t("sub")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {items.map(({ key, icon }) => (
            <div key={key} className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-[var(--line)] flex items-center justify-center">
                {icon}
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[var(--charcoal)] mb-1">
                  {t(`${key}.title` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {t(`${key}.desc` as Parameters<typeof t>[0])}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
