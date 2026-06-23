import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://fahrschule-kendirci.de"
  ),
  title: {
    default: "Fahrschule Kendirci — Darmstadt",
    template: "%s | Fahrschule Kendirci",
  },
  description:
    "Fahrschule Kendirci in Darmstadt — 4,9 ★ bei 154 Bewertungen. Persönliche Betreuung, faire Preise, mehrsprachige Unterstützung. Jetzt anrufen.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Fahrschule Kendirci",
    images: [{ url: "/media/photos/01.webp", width: 1200, height: 630 }],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "de" | "en")) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <head>
        <link rel="alternate" hrefLang="de" href="/de" />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="x-default" href="/de" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DrivingSchool",
              name: "Fahrschule Kendirci",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kiesstraße 35",
                postalCode: "64283",
                addressLocality: "Darmstadt",
                addressCountry: "DE",
              },
              telephone: "+491702382827",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "154",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased pb-14 md:pb-0">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
