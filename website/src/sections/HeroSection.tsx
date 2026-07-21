import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { media } from '../data/media'
import { Button } from '../components/Button'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = async () => {
      try {
        await video.play()
      } catch {
        /* autoplay blocked — poster remains visible */
      }
    }

    play()
  }, [])

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-black">
      {!videoError ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.heroPoster}
          onError={() => setVideoError(true)}
        >
          <source src={media.heroVideo} type="video/mp4" />
        </video>
      ) : (
        /* VIDEO_FALLBACK: shown when hero.mp4 is missing or fails to load */
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${media.heroPoster})` }}
        >
          <div className="absolute inset-0 flex items-end justify-start p-8">
            <p className="max-w-md rounded-sm bg-black/70 px-4 py-3 text-xs text-white/80">
              VIDEO_FALLBACK — Hero-Video nicht verfügbar. Poster wird angezeigt.
            </p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {site.subtitle}
          </p>
          <h1 className="font-display text-[clamp(3rem,10vw,6rem)] font-semibold leading-[0.95] tracking-tight text-white">
            {site.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-xl font-display text-xl italic text-gold/90 md:text-2xl">
            {site.claim}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#strategie" variant="primary">
              Strategie ansehen
            </Button>
            <Button href="#missionen" variant="secondary">
              Missionen entdecken
            </Button>
            <Button href="#film" variant="secondary">
              Film ansehen
            </Button>
          </div>

          <p className="mt-10 max-w-xl text-xs leading-relaxed text-white/50">
            {site.attribution} ·{' '}
            <a
              href={site.millionpainterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline-offset-2 hover:text-gold hover:underline"
            >
              millionpainter.de
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
