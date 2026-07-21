import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import { Section, SectionHeader } from '../components/Section'
import { pressPoints } from '../data/site'

export function PressSection() {
  return (
    <Section id="presse">
      <Reveal>
        <SectionHeader
          eyebrow="Presse & Reichweite"
          title="Warum GermaNEW berichtenswert ist"
          description="Ein visueller Zukunftsatlas für Deutschland 2050 — unabhängig, filmisch stark und anschlussfähig für viele Felder."
        />
      </Reveal>

      <div className="space-y-6">
        {pressPoints.map((point, index) => (
          <Reveal key={point.title}>
            <article className="flex gap-6 border-b border-ink/10 pb-6 last:border-0">
              <span className="font-display text-3xl font-semibold text-gold/80">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {point.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-12 rounded-sm border border-ink/10 bg-white p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold">Presse-Kit</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
            Bilder, Kurzprofile, Missionen-Übersicht und Story-Hintergrund für Redaktionen.
            Das Presse-Kit wird fortlaufend ergänzt — Anfragen über den Kontaktbereich.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="#film" variant="ghost">
              Film ansehen & teilen
            </Button>
            <Button href="#kontakt" variant="ghost">
              Presse anfragen
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
