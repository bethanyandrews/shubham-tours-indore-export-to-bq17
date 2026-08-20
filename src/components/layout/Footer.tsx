import { Link } from 'react-router-dom'
import { useLanguage } from '@/lib/language-context'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

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
    <footer className="bg-foreground text-background pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.webp" alt="Logo" className="h-10 w-10 rounded-lg bg-white/10 p-0.5" />
              <div>
                <p className="font-bold text-lg">Shubham Tour & Travels</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">{t.footer.quickLinks}</h3>
            <div className="grid grid-cols-2 gap-2">
              {links.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity py-1"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">{t.footer.contactInfo}</h3>
            <div className="space-y-3">
              <a href="tel:+919039660447" className="flex items-start gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>9039660447 / 9039237889</span>
              </a>
              <a href="mailto:pachrangilakhan89@gmail.com" className="flex items-start gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>pachrangilakhan89@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm opacity-70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-start gap-3 text-sm opacity-70">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t.footer.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs opacity-50">{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <a href="https://maps.app.goo.gl/1tJ4BKvknvSifZA46" target="_blank" rel="noopener noreferrer" className="text-xs opacity-50 hover:opacity-100 transition-opacity">
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
