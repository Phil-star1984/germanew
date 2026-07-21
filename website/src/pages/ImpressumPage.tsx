import { Link } from 'react-router-dom'
import { impressum } from '../data/impressum'
import { site } from '../data/site'

export function ImpressumPage() {
  const { provider } = impressum

  return (
    <div className="min-h-screen bg-surface">
      <div className="tricolor-bar" />
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-6 md:px-8">
          <Link to="/" className="group">
            <span className="font-display text-xl font-semibold text-ink group-hover:text-gold">
              {site.name}
            </span>
            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
              Impressum
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-ink/70 transition-colors hover:text-gold"
          >
            ← Zurück zur Plattform
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Impressum & Datenschutz
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Angaben gemäß § 5 TMG für die GermaNEW-Plattform — ein Projekt von{' '}
          <a
            href={site.millionpainterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline-offset-2 hover:text-gold hover:underline"
          >
            Millionpainter
          </a>
          .
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Angaben gemäß § 5 TMG
            </h2>
            <address className="mt-4 not-italic text-sm leading-relaxed text-ink/80">
              {provider.name}
              <br />
              {provider.brand}
              <br />
              {provider.street}
              <br />
              {provider.city}
            </address>
            <p className="mt-3 text-sm text-ink/80">USt.-IdNr.: {provider.vatId}</p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Kontakt
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li>
                Telefon:{' '}
                <a href={`tel:${provider.phone.replace(/\s/g, '')}`} className="hover:text-gold">
                  {provider.phone}
                </a>{' '}
                ({provider.phoneHours})
              </li>
              <li>
                E-Mail:{' '}
                <a href={`mailto:${provider.email}`} className="hover:text-gold">
                  {provider.email}
                </a>
              </li>
              <li>
                Web:{' '}
                <a
                  href={site.millionpainterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  millionpainter.de
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Haftung für Inhalte
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              {impressum.liabilityContent}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Haftung für Links
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              {impressum.liabilityLinks}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">Urheberrecht</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              {impressum.copyright}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Datenschutzerklärung
            </h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink/75">
              {impressum.privacy}
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-ink/10 bg-black py-8 text-center text-xs text-white/50">
        <p>© {new Date().getFullYear()} GermaNEW / Phil Splash · Millionpainter</p>
      </footer>
    </div>
  )
}
