import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { Section, SectionHeader } from '../components/Section'
import { transparencyPoints } from '../data/site'

export function TransparencySection() {
  const [sourcesOpen, setSourcesOpen] = useState(false)

  return (
    <Section id="transparenz" className="bg-white">
      <Reveal>
        <SectionHeader
          eyebrow="Transparenz"
          title="Vertrauen durch Offenheit"
          description="GermaNEW ist unabhängig, überparteilich und kein Regierungsprojekt. Zukunftsentwürfe sind Einladungen zum Diskurs — nicht fertige Wahrheiten."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {transparencyPoints.map((point) => (
          <Reveal key={point.title}>
            <article className="h-full border border-ink/10 p-6">
              <h3 className="font-display text-lg font-semibold">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {point.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 overflow-hidden rounded-sm border border-ink/10">
          <button
            type="button"
            className="flex w-full items-center justify-between bg-surface px-6 py-4 text-left"
            onClick={() => setSourcesOpen((open) => !open)}
            aria-expanded={sourcesOpen}
          >
            <span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                Quellen & Referenzen
              </span>
              <span className="mt-1 block font-display text-lg font-semibold">
                Referenzbereich
              </span>
            </span>
            <span className="text-xl text-gold">{sourcesOpen ? '−' : '+'}</span>
          </button>
          {sourcesOpen && (
            <div className="border-t border-ink/10 px-6 py-5">
              <p className="text-sm leading-relaxed text-ink/70">
                {/* PLACEHOLDER: Quellenbereich in Vorbereitung */}
                <strong>In Vorbereitung.</strong> Hier werden Studien, Datenquellen und
                Referenzen zu den sieben Missionen veröffentlicht — nachvollziehbar,
                versioniert und diskutierbar. Der Bereich wird mit dem Ausbau der Plattform
                ergänzt.
              </p>
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  )
}
