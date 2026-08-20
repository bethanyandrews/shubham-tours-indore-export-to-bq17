import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '@/lib/language-context'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

export function Header() {
  const { t, toggleLanguage, lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/fleet', label: t.nav.fleet },
    { to: '/packages', label: t.nav.packages },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/testimonials', label: t.nav.testimonials },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img src="/logo.webp" alt="Shubham Tour & Travels" className="h-9 w-9 rounded-lg object-contain" />
          <div>
            <p className="text-sm font-bold leading-tight text-foreground">Shubham</p>
            <p className="text-[10px] font-medium text-muted-foreground leading-tight">Tour & Travels</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === l.to
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />

          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 text-xs font-semibold rounded-full border border-border bg-muted hover:bg-accent transition-colors"
          >
            {lang === 'en' ? 'हिंदी' : 'EN'}
          </button>

          <a
            href="tel:+919039660447"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Call Now</span>
          </a>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4 gap-1">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === l.to
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+919039660447"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              <Button className="w-full gap-2">
                <Phone className="h-4 w-4" />
                9039660447
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
