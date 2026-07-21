import { Reveal } from '../components/Reveal'
import { Section, SectionHeader } from '../components/Section'
import { originStory, summaryPillars } from '../data/site'

export function SummarySection() {
  return (
    <Section id="zukunft">
      <Reveal>
        <SectionHeader
          eyebrow="Executive Summary"
          title="Ein visueller Zukunftsatlas für ein handlungsfähiges Deutschland"
          description="GermaNEW ist ein visueller Zukunftsatlas, der zeigt, wie Deutschland bis 2050 wieder handlungsfähiger, innovativer, gerechter, kreativer und technologisch souveräner werden kann."
        />
      </Reveal>

      <Reveal>
        <div className="mb-12 max-w-3xl space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
          {originStory.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {summaryPillars.map((pillar, index) => (
          <Reveal key={pillar.title}>
            <article className="group h-full border-l-2 border-gold/40 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <span className="text-xs font-semibold text-gold/80">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {pillar.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
