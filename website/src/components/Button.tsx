import { scrollToSection } from '../hooks/useScrollSpy'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  className?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-black hover:bg-[#d4b045] border border-gold',
  secondary:
    'bg-transparent text-white border border-white/70 hover:bg-white/10',
  ghost:
    'bg-transparent text-ink border border-ink/20 hover:border-gold hover:text-gold',
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 motion-reduce:transition-none ${variants[variant]} ${className}`

  if (href?.startsWith('#')) {
    return (
      <a
        href={href}
        className={classes}
        onClick={(event) => {
          event.preventDefault()
          scrollToSection(href.slice(1))
          onClick?.()
        }}
      >
        {children}
      </a>
    )
  }

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
