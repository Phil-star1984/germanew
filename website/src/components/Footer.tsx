import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { scrollToSection } from '../hooks/useScrollSpy'

export function Footer() {
  return (
    <footer id="kontakt" className="bg-black text-white">
      <div className="tricolor-bar" />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">{site.name}</p>
            <p className="mt-2 text-sm text-white/60">{site.subtitle}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {site.claim}
            </p>
            <p className="mt-4 text-sm text-white/60">
              Ein Projekt von{' '}
              <a
                href={site.millionpainterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Millionpainter
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Kontakt
            </p>
            <p className="mt-4 text-sm text-white/70">Phil Splash / Millionpainter</p>
            <a
              href={`tel:${site.contactPhone.replace(/\s/g, '')}`}
              className="mt-2 block text-sm text-white/70 hover:text-gold"
            >
              {site.contactPhone}
            </a>
            <a
              href={`mailto:${site.contactEmail}?subject=GermaNEW%20Anfrage`}
              className="mt-2 inline-block text-sm font-medium text-gold hover:underline"
            >
              {site.contactEmail}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Schnellzugriff
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {[
                ['Vision', 'vision'],
                ['Film', 'film'],
                ['Missionen', 'missionen'],
                ['Angebote', 'angebote'],
              ].map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="text-left text-sm text-white/70 transition-colors hover:text-gold"
                >
                  {label}
                </button>
              ))}
              <Link
                to="/impressum"
                className="text-left text-sm text-white/70 transition-colors hover:text-gold"
              >
                Impressum
              </Link>
              <a
                href={site.millionpainterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-sm text-white/70 transition-colors hover:text-gold"
              >
                millionpainter.de
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/50">
          <p>{site.attribution}</p>
          <p className="mt-2">
            Kein offizielles Regierungsprojekt. Keine Parteiplattform. Zukunftsentwürfe
            sind diskutierbar und weiterentwickelbar.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <Link to="/impressum" className="text-white/60 hover:text-gold">
              Impressum & Datenschutz
            </Link>
            <span>·</span>
            <a
              href={site.millionpainterKontaktUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold"
            >
              Kontakt Millionpainter
            </a>
          </p>
          <p className="mt-4">© {new Date().getFullYear()} GermaNEW / Phil Splash</p>
        </div>
      </div>
    </footer>
  )
}
