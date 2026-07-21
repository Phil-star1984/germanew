import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { Section, SectionHeader } from '../components/Section'
import { media } from '../data/media'

function getShareUrl() {
  if (typeof window !== 'undefined') {
    return window.location.href.split('#')[0] + '#film'
  }
  return ''
}

export function FilmSection() {
  const [copied, setCopied] = useState(false)

  const sharePage = (platform: 'linkedin' | 'whatsapp') => {
    const url = encodeURIComponent(getShareUrl() || window.location.href)
    const text = encodeURIComponent(
      'GermaNEW — Ein visueller Zukunftsatlas für Deutschland 2050. Positiv, konkret, inspirierend.',
    )

    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
    }

    window.open(urls[platform], '_blank', 'noopener,noreferrer')
  }

  const copyLink = async () => {
    const link = getShareUrl() || window.location.href
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      window.prompt('Link kopieren:', link)
    }
  }

  return (
    <Section id="film" dark>
      <Reveal>
        <SectionHeader
          eyebrow="Film"
          title="Der GermaNEW-Film"
          description={media.filmDescription}
          light
        />
      </Reveal>

      <Reveal>
        <div className="overflow-hidden rounded-sm border border-white/10 bg-black">
          <video
            className="aspect-video w-full bg-black"
            controls
            playsInline
            preload="metadata"
            poster={media.heroPoster}
            aria-label={media.filmTitle}
          >
            <source src={media.heroVideo} type="video/mp4" />
            Ihr Browser unterstützt dieses Video nicht.
          </video>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-white">
              {media.filmTitle}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
              Teilen Sie den Film und die Plattform — auf LinkedIn, in Teams oder
              per Link. Ideal für Diskussionen über Deutschlands Zukunft ab 2026.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => sharePage('linkedin')}
              className="rounded-sm border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold"
            >
              Auf LinkedIn teilen
            </button>
            <button
              type="button"
              onClick={() => sharePage('whatsapp')}
              className="rounded-sm border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold"
            >
              Per WhatsApp teilen
            </button>
            <button
              type="button"
              onClick={copyLink}
              className="rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#d4b045]"
            >
              {copied ? 'Link kopiert' : 'Link kopieren'}
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
