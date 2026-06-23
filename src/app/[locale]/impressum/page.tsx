export default function ImpressumPage() {
  return (
    <>
      <div className="bg-[var(--charcoal)] pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl font-semibold text-white">Impressum</h1>
        </div>
      </div>
      <section className="py-16 px-6 bg-[var(--ivory)]">
        <div className="max-w-3xl mx-auto prose prose-sm text-[var(--ink)]">
          <p className="text-[var(--muted)] mb-8">
            Gemäß § 5 TMG — Angaben werden noch ergänzt (Platzhalter)
          </p>

          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-3">Angaben gemäß § 5 TMG</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            Fahrschule Kendirci<br />
            Inhaber: Mehmet Kendirci (bitte bestätigen)<br />
            Kiesstraße 35<br />
            64283 Darmstadt<br />
            Deutschland
          </p>

          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-3">Kontakt</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            Telefon: 0170 238 2827<br />
            E-Mail: [E-Mail-Adresse bitte ergänzen]
          </p>

          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-3">Aufsichtsbehörde</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            [Angaben zur zuständigen Fahrschulbehörde bitte ergänzen]
          </p>

          <p className="text-xs text-[var(--muted)] mt-8 border-t border-[var(--line)] pt-4">
            ⚠️ Dieser Inhalt ist ein Platzhalter. Bitte vollständige rechtliche Angaben eintragen.
          </p>
        </div>
      </section>
    </>
  );
}
