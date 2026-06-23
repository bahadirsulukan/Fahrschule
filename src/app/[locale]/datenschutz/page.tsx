export default function DatenschutzPage() {
  return (
    <>
      <div className="bg-[var(--charcoal)] pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl font-semibold text-white">Datenschutzerklärung</h1>
        </div>
      </div>
      <section className="py-16 px-6 bg-[var(--ivory)]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[var(--muted)] mb-8">
            Gemäß DSGVO — Angaben werden noch ergänzt (Platzhalter)
          </p>

          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-3">1. Verantwortlicher</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            Fahrschule Kendirci, Kiesstraße 35, 64283 Darmstadt<br />
            Telefon: 0170 238 2827
          </p>

          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-3">2. Erhobene Daten</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            Beim Besuch dieser Website werden nur technisch notwendige Daten verarbeitet.
            Bei Nutzung des Kontaktformulars werden Name, E-Mail-Adresse und Nachricht
            zur Beantwortung Ihrer Anfrage gespeichert.
          </p>

          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-3">3. Ihre Rechte</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
            der Verarbeitung Ihrer Daten. Wenden Sie sich dazu an die oben genannte Kontaktadresse.
          </p>

          <p className="text-xs text-[var(--muted)] mt-8 border-t border-[var(--line)] pt-4">
            ⚠️ Dieser Inhalt ist ein Platzhalter. Bitte vollständige Datenschutzerklärung durch einen Rechtsanwalt erstellen lassen.
          </p>
        </div>
      </section>
    </>
  );
}
