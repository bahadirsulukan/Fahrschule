import { useTranslations } from "next-intl";
import { Star, MapPin, Globe, Zap } from "lucide-react";

export default function TrustBar() {
  const t = useTranslations("trust");

  const items = [
    {
      icon: <Star className="fill-[var(--brass)] text-[var(--brass)]" size={20} />,
      title: t("rating"),
      sub: t("rating_sub"),
    },
    {
      icon: <MapPin size={20} className="text-[var(--brass)]" />,
      title: t("location"),
      sub: t("location_sub"),
    },
    {
      icon: <Globe size={20} className="text-[var(--brass)]" />,
      title: t("multilingual"),
      sub: t("multilingual_sub"),
    },
    {
      icon: <Zap size={20} className="text-[var(--brass)]" />,
      title: t("fast"),
      sub: t("fast_sub"),
    },
  ];

  return (
    <section className="bg-[var(--charcoal)] py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="mb-1">{item.icon}</div>
            <div className="font-serif text-lg font-semibold text-white">{item.title}</div>
            <div className="text-sm text-white/50">{item.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
