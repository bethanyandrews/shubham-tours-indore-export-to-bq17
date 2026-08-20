import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '@/lib/language-context'
import { Home, Briefcase, Car, MapIcon, PhoneCall } from 'lucide-react'

export function BottomNav() {
  const { t } = useLanguage()
  const location = useLocation()

  const items = [
    { to: '/', label: t.nav.home, icon: Home },
    { to: '/services', label: t.nav.services, icon: Briefcase },
    { to: '/fleet', label: t.nav.fleet, icon: Car },
    { to: '/packages', label: t.nav.packages, icon: MapIcon },
    { to: '/contact', label: t.nav.contact, icon: PhoneCall },
  ]

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around h-16 px-1 max-w-md mx-auto">
        {items.map(item => {
          const active = location.pathname === item.to
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 min-w-[56px] rounded-lg transition-colors ${
                active ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <item.icon className={`h-5 w-5 ${active ? 'stroke-[2.5]' : ''}`} />
              <span className="text-[10px] font-medium leading-tight">{item.label}</span>
            </Link>
          )
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  )
}
