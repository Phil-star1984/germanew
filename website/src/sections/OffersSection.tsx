import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import { Section, SectionHeader } from '../components/Section'
import { offers } from '../data/offers'
import { offersIntro } from '../data/site'

export function OffersSection() {
  return (
    <Section id="angebote" className="bg-white">
      <Reveal>
        <SectionHeader
          eyebrow="Angebote"
          title="Formate, die Zukunft erlebbar machen"
          description={offersIntro}
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {offers.map((offer) => (
          <Reveal key={offer.id}>
            <article className="group overflow-hidden border border-ink/10 bg-surface transition-shadow hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0c0e]">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="border-l-2 border-gold/50 p-6 group-hover:border-gold">
                <h3 className="font-display text-xl font-semibold">{offer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {offer.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-ink/50">
                  Für: {offer.audience}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
            Interesse an einem Format? Phil Splash /{' '}
            <a
              href="https://millionpainter.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline-offset-2 hover:text-gold hover:underline"
            >
              Millionpainter
            </a>{' '}
            berät persönlich — unverbindlich und auf Augenhöhe.
          </p>
          <Button href="#kontakt" variant="ghost" className="border-ink/30">
            Angebot anfragen
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
