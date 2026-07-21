import { Reveal } from '../components/Reveal'
import { Section, SectionHeader } from '../components/Section'
import { visionGallery } from '../data/gallery'

export function VisionGallerySection() {
  return (
    <Section id="vision" dark className="overflow-hidden">
      <Reveal>
        <SectionHeader
          eyebrow="Vision in Bildern"
          title="Deutschland 2050 — plakativer Zukunftsatlas"
          description="Starke Visuals machen abstrakte Strategie greifbar. Diese Bilder zeigen, wohin die sieben Missionen führen können — positiv, konkret, diskutierbar."
          light
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visionGallery.map((item, index) => (
          <Reveal key={item.id}>
            <figure
              className={`group relative overflow-hidden rounded-sm ${
                index === 0 ? 'md:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
                  index === 0 ? 'aspect-[16/10] md:min-h-[420px]' : 'aspect-[4/3]'
                }`}
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 md:p-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
