import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import { Section, SectionHeader } from '../components/Section'
import { site } from '../data/site'

const INITIATOR_IMAGE = './assets/images/initiator/phil-splash.webp'

export function InitiatorSection() {
  return (
    <Section id="initiator" dark>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-sm">
            <img
              src={INITIATOR_IMAGE}
              alt="Phil Splash bei der Präsentation von GermaNEW"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <SectionHeader
            eyebrow="Initiator"
            title="Phil Splash / Millionpainter"
            description="Künstler, KI Marketing Manager, AI-Filmemacher und visueller Übersetzer komplexer Zukunftsthemen."
            light
          />

          <div className="space-y-4 text-base leading-relaxed text-white/75">
            <p>
              Phil Splash — Gründer von{' '}
              <a
                href={site.millionpainterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold hover:underline"
              >
                Millionpainter
              </a>{' '}
              — verbindet Kunst, Strategie, KI, Film und gesellschaftliche Debatte.
              GermaNEW ist sein Antwort auf eine gefühlte Strategielücke: zu viel
              Reden, zu wenig Plan, zu viel Pessimismus. Statt mitzureden, baut er
              ein Werkzeug, mit dem positive Zukunft sichtbar und prüfbar wird.
            </p>
            <p>
              Unter{' '}
              <a
                href={site.millionpainterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold hover:underline"
              >
                millionpainter.de
              </a>{' '}
              entwickelt er Formate, die komplexe Themen visuell zugänglich machen:
              von filmischen Zukunftsnarrativen über Workshop-Kits bis zu immersiven
              Ausstellungen. GermaNEW ist das Flaggschiff dieses Ansatzes.
            </p>
            <p>
              Der Fokus liegt auf Glaubwürdigkeit und Einladung: Zukunft soll gesehen,
              geprüft und weiterentwickelt werden können — von Schulen, Städten,
              Unternehmen und Kulturinstitutionen.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href={site.millionpainterUrl}
              variant="primary"
              className="border-gold bg-gold text-black"
            >
              Millionpainter besuchen
            </Button>
            <Button href="#film" variant="secondary">
              Film ansehen
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
