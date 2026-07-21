import { useEffect, useState } from 'react'
import { navItems, site } from '../data/site'
import { scrollToSection, useScrollSpy } from '../hooks/useScrollSpy'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(navItems.map((item) => item.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNav = (id: string) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 motion-reduce:transition-none ${
          scrolled
            ? 'border-b border-white/10 bg-black/85 backdrop-blur-md'
            : 'bg-gradient-to-b from-black/60 to-transparent'
        }`}
      >
        <div className="tricolor-bar" />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="text-left"
          >
            <span className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
              {site.name}
            </span>
            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
              {site.subtitle}
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`rounded-sm px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                  activeId === item.id
                    ? 'text-gold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 text-white lg:hidden"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Navigation</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${
                  menuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-opacity ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${
                  menuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-24 lg:hidden">
          <nav className="flex flex-col gap-1 px-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`border-b border-white/10 py-4 text-left text-sm font-medium uppercase tracking-wider ${
                  activeId === item.id ? 'text-gold' : 'text-white/80'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav('kontakt')}
              className="mt-4 rounded-sm bg-gold px-4 py-3 text-sm font-semibold text-black"
            >
              Kontakt
            </button>
          </nav>
        </div>
      )}
    </>
  )
}
