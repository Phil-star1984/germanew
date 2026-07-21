import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { Section, SectionHeader } from '../components/Section'
import { timelinePhases } from '../data/timeline'

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = timelinePhases[activeIndex]

  return (
    <Section id="strategie" dark>
      <Reveal>
        <SectionHeader
          eyebrow="Strategischer Plan"
          title="Roadmap 2026–2050"
          description="Vier Phasen von Neustart bis Zukunftslabor — mit Meilensteinen, die überprüfbar und anpassbar bleiben."
          light
        />
      </Reveal>

      <Reveal>
        <div className="relative mb-10 hidden md:block">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/15" />
          <div
            className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-gold transition-all duration-500 motion-reduce:transition-none"
            style={{
              width: `${((activeIndex + 1) / timelinePhases.length) * 100}%`,
            }}
          />
          <div className="relative flex justify-between">
            {timelinePhases.map((phase, index) => (
              <button
                key={phase.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group flex flex-col items-center"
              >
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors ${
                    index <= activeIndex
                      ? 'border-gold bg-gold'
                      : 'border-white/30 bg-black'
                  }`}
                />
                <span
                  className={`mt-4 max-w-[8rem] text-center text-xs font-semibold uppercase tracking-wider ${
                    activeIndex === index ? 'text-gold' : 'text-white/50'
                  }`}
                >
                  {phase.period}
                </span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="md:hidden">
        <Reveal>
          <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            {timelinePhases.map((phase, index) => (
              <button
                key={phase.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
                  activeIndex === index
                    ? 'bg-gold text-black'
                    : 'border border-white/20 text-white/70'
                }`}
              >
                {phase.period}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="rounded-sm border border-white/10 bg-white/5 p-6 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {active.period}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
            {active.title}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75">
            {active.summary}
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                Schwerpunkte
              </h4>
              <ul className="mt-4 space-y-3">
                {active.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-white/70"
                  >
                    <span className="text-gold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                Meilensteine
              </h4>
              <ul className="mt-4 space-y-3">
                {active.milestones.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-white/70"
                  >
                    <span className="font-semibold text-red">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              disabled={activeIndex === 0}
              onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
              className="rounded-sm border border-white/20 px-4 py-2 text-sm text-white/70 transition-colors hover:border-gold hover:text-gold disabled:opacity-30"
            >
              ← Zurück
            </button>
            <button
              type="button"
              disabled={activeIndex === timelinePhases.length - 1}
              onClick={() =>
                setActiveIndex((i) => Math.min(timelinePhases.length - 1, i + 1))
              }
              className="rounded-sm border border-white/20 px-4 py-2 text-sm text-white/70 transition-colors hover:border-gold hover:text-gold disabled:opacity-30"
            >
              Weiter →
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
