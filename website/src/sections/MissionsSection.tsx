import { useState } from 'react'
import { MissionImage } from '../components/MissionImage'
import { Reveal } from '../components/Reveal'
import { Section, SectionHeader } from '../components/Section'
import { missions } from '../data/missions'

export function MissionsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = missions[Math.max(0, activeIndex)]

  return (
    <Section id="missionen" className="bg-white">
      <Reveal>
        <SectionHeader
          eyebrow="Die 7 Missionen"
          title="Sieben Wege zu Deutschland 2050"
          description="Jede Mission verbindet Ziel, Begründung, konkrete Maßnahmen und ein 2050-Bild — mit einem ersten Schritt ab 2026."
        />
      </Reveal>

      <div className="hidden lg:block">
        <Reveal>
          <div className="mb-8 flex flex-wrap gap-2 border-b border-ink/10 pb-4">
            {missions.map((mission, index) => (
              <button
                key={mission.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-sm px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                  activeIndex === index
                    ? 'bg-ink text-white'
                    : 'text-ink/70 hover:bg-ink/5 hover:text-ink'
                }`}
              >
                <span className="mr-2 text-xs text-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {mission.title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <MissionDetail mission={active} />
        </Reveal>
      </div>

      <div className="space-y-4 lg:hidden">
        {missions.map((mission, index) => (
          <Reveal key={mission.id}>
            <div className="overflow-hidden rounded-sm border border-ink/10 bg-surface">
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                aria-expanded={activeIndex === index}
              >
                <span>
                  <span className="text-xs font-semibold text-gold">
                    Mission {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold">
                    {mission.title}
                  </span>
                </span>
                <span className="text-2xl text-gold">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="border-t border-ink/10 px-5 pb-5">
                  <MissionDetail mission={mission} compact />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function MissionDetail({
  mission,
  compact = false,
}: {
  mission: (typeof missions)[number]
  compact?: boolean
}) {
  return (
    <div className={`grid gap-8 ${compact ? '' : 'lg:grid-cols-2'}`}>
      <MissionImage mission={mission} />
      <div>
        <h3 className="font-display text-2xl font-semibold md:text-3xl">
          {mission.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink/80">{mission.goal}</p>

        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
            Warum es wichtig ist
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">{mission.why}</p>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
            Konkrete Maßnahmen
          </h4>
          <ul className="mt-3 space-y-2">
            {mission.measures.map((measure) => (
              <li
                key={measure}
                className="flex gap-3 text-sm leading-relaxed text-ink/75"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                {measure}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="border-l-2 border-gold/50 pl-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              2050-Bild
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              {mission.vision2050}
            </p>
          </div>
          <div className="border-l-2 border-red/40 pl-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-red">
              Erster Schritt ab 2026
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              {mission.firstStep2026}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
