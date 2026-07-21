import { Reveal } from '../components/Reveal'
import { Section, SectionHeader } from '../components/Section'
import { platformFeatures, platformQuote } from '../data/site'

export function PlatformSection() {
  return (
    <Section id="plattform">
      <Reveal>
        <SectionHeader
          eyebrow="Projektplattform"
          title="Mehr als eine Website — eine Zukunftsplattform"
          description="GermaNEW verbindet interaktive Formate, filmisches Storytelling und strategische Roadmaps zu einem System, das Menschen einlädt, Zukunft mitzugestalten."
        />
      </Reveal>

      <Reveal>
        <blockquote className="mb-12 border-l-4 border-gold bg-white p-6 md:p-8">
          <p className="font-display text-xl leading-relaxed text-ink md:text-2xl">
            {platformQuote}
          </p>
        </blockquote>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {platformFeatures.map((feature, index) => (
          <Reveal key={feature.title}>
            <article className="h-full border border-ink/10 bg-white p-6 transition-shadow hover:shadow-lg">
              <span className="text-xs font-semibold text-gold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {feature.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
