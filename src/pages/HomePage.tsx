import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { BookCabDialog } from '@/components/BookCabDialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  Car,
  Plane,
  Map,
  Heart,
  Compass,
  Phone,
  Route,
  Clock,
  Shield,
  Sparkles,
  Tag,
  Globe,
  Timer,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  MapPin,
  User,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/* ───────── icon maps ───────── */
const quickActionIcons: Record<string, LucideIcon> = {
  car: Car,
  plane: Plane,
  map: Map,
  heart: Heart,
  compass: Compass,
  phone: Phone,
}

const whyUsIcons: Record<string, LucideIcon> = {
  clock: Clock,
  shield: Shield,
  sparkles: Sparkles,
  tag: Tag,
  globe: Globe,
  timer: Timer,
}

/* quick-action link targets */
const quickActionLinks = [
  null, // Book a Cab → WhatsApp
  '/services',
  '/packages',
  null, // Wedding → WhatsApp
  '/packages',
  '/contact',
]

/* hero images */
const heroImages = [
  '/hero-highway.webp',
  '/hero-airport.webp',
  '/hero-omkareshwar.webp',
  '/hero-wedding.webp',
]

/* ─────────────────────────────────────────────
   Section components (all in one file for co-location)
   ───────────────────────────────────────────── */

/* 1 ─ Hero Carousel */
function HeroCarousel() {
  const { t } = useLanguage()
  const slides = t.hero.slides
  const [current, setCurrent] = useState(0)
  const [bookingOpen, setBookingOpen] = useState(false)

  const next = useCallback(
    () => setCurrent(i => (i + 1) % slides.length),
    [slides.length],
  )
  const prev = useCallback(
    () => setCurrent(i => (i - 1 + slides.length) % slides.length),
    [slides.length],
  )

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="relative w-full h-[70vh] min-h-[420px] max-h-[700px] overflow-hidden">
      {/* slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={heroImages[i]}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

          {/* content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
              {slide.subtitle}
            </p>
            {i === 0 ? (
              <Button
                size="lg"
                className="gap-2 text-base font-semibold shadow-xl mt-6"
                onClick={() => setBookingOpen(true)}
              >
                {slide.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <a
                href={getWhatsAppUrl(
                  `Hi, I'm interested in: ${slide.title}. Please share details.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                <Button size="lg" className="gap-2 text-base font-semibold shadow-xl">
                  {slide.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
        </div>
      ))}

      {/* arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/40 transition"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'w-8 bg-accent' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>

      <BookCabDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  )
}

/* 1b ─ Inline Booking Form */
function InlineBookingForm() {
  const { t } = useLanguage()
  const b = t.hero.booking

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [pickup, setPickup] = useState('')
  const [drop, setDrop] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(): boolean {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = b.errors.nameRequired
    if (!pickup.trim()) e.pickup = b.errors.pickupRequired
    if (!drop.trim()) e.drop = b.errors.dropRequired
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return

    const lines = [
      `*New Cab Booking Request*`,
      ``,
      `*Name:* ${name.trim()}`,
    ]
    if (phone.trim()) lines.push(`*Phone:* ${phone.trim()}`)
    lines.push(`*Pickup:* ${pickup.trim()}`)
    lines.push(`*Drop:* ${drop.trim()}`)

    const url = getWhatsAppUrl(lines.join('\n'))
    window.open(url, '_blank', 'noopener')
    setName('')
    setPhone('')
    setPickup('')
    setDrop('')
    setErrors({})
  }

  return (
    <section className="relative -mt-16 z-10 pb-6 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-card shadow-2xl shadow-primary/8 border border-border/60 overflow-hidden">
            {/* Header strip */}
            <div className="bg-primary px-6 md:px-8 py-5 md:py-6 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Car className="h-5.5 w-5.5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-primary-foreground leading-tight">
                  {b.title}
                </h2>
                <p className="text-xs md:text-sm text-primary-foreground/75 leading-snug">
                  {b.subtitle}
                </p>
              </div>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="inline-name" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {b.nameLabel}
                  </Label>
                  <Input
                    id="inline-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={b.namePlaceholder}
                    aria-invalid={!!errors.name}
                    className="h-12 bg-muted/40 border-border/50 focus:bg-background transition-colors"
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="inline-phone" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5" />
                    {b.phoneLabel}
                  </Label>
                  <Input
                    id="inline-phone"
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={b.phonePlaceholder}
                    className="h-12 bg-muted/40 border-border/50 focus:bg-background transition-colors"
                  />
                </div>

                {/* Pickup */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="inline-pickup" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {b.pickupLabel}
                  </Label>
                  <Input
                    id="inline-pickup"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder={b.pickupPlaceholder}
                    aria-invalid={!!errors.pickup}
                    className="h-12 bg-muted/40 border-border/50 focus:bg-background transition-colors"
                  />
                  {errors.pickup && <p className="text-xs text-destructive">{errors.pickup}</p>}
                </div>

                {/* Drop */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="inline-drop" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {b.dropLabel}
                  </Label>
                  <Input
                    id="inline-drop"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    placeholder={b.dropPlaceholder}
                    aria-invalid={!!errors.drop}
                    className="h-12 bg-muted/40 border-border/50 focus:bg-background transition-colors"
                  />
                  {errors.drop && <p className="text-xs text-destructive">{errors.drop}</p>}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  className="gap-2 font-semibold w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow"
                >
                  <MessageCircle className="h-4 w-4" />
                  {b.submit}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* 2 ─ Quick Actions */
function QuickActions() {
  const { t } = useLanguage()
  const items = t.quickActions.items
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title={t.quickActions.title} />

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => {
            const Icon = quickActionIcons[item.icon] || Car
            const link = quickActionLinks[i]

            const inner = (
              <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 hover:shadow-md transition-all cursor-pointer group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs md:text-sm font-medium text-foreground text-center leading-tight">
                  {item.label}
                </span>
              </div>
            )

            if (i === 0) {
              return (
                <button key={i} onClick={() => setBookingOpen(true)} type="button">
                  {inner}
                </button>
              )
            }

            if (link) {
              return (
                <Link key={i} to={link}>
                  {inner}
                </Link>
              )
            }

            return (
              <a
                key={i}
                href={getWhatsAppUrl(
                  `Hi, I want to enquire about: ${item.label}. Please share details.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            )
          })}
        </div>
      </div>

      <BookCabDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  )
}

/* 3 ─ About Preview */
function AboutPreview() {
  const { t } = useLanguage()
  const { title, text, cta, stats } = t.aboutPreview

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading title={title} />

        <p className="text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
          {text}
        </p>

        {/* stats grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="flex flex-col items-center py-6">
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </span>
                <span className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/about">
            <Button variant="outline" className="gap-2">
              {cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* 4 ─ Services Preview */
const serviceImages = [
  '/dest-indore.webp',
  '/hero-highway.webp',
  '/hero-airport.webp',
  '/service-corporate.webp',
  '/hero-wedding.webp',
  '/service-religious.webp',
]

function ServicesPreview() {
  const { t } = useLanguage()
  const { title, subtitle, items, cta } = t.servicesPreview

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {items.map((svc, i) => (
            <Card
              key={i}
              className="group overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={serviceImages[i]}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <CardContent className="flex flex-col flex-1 p-5 gap-2.5">
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {svc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {svc.desc}
                </p>
                <a
                  href={getWhatsAppUrl(
                    `Hi, I want to enquire about ${svc.title}. Please share details.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1"
                >
                  <Button size="sm" variant="outline" className="w-full gap-1.5 group/btn">
                    Enquire
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services">
            <Button className="gap-2">
              {cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* 5 ─ Fleet Preview */
function FleetPreview() {
  const { t } = useLanguage()
  const { title, subtitle, cta, items } = t.fleetPreview

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionHeading title={title} subtitle={subtitle} />

        {/* horizontal scroll */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {items.map((v, i) => (
            <Card
              key={i}
              className="min-w-[280px] md:min-w-[300px] snap-start shrink-0 overflow-hidden border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="h-44 bg-muted relative overflow-hidden">
                <img
                  src={v.img}
                  alt={v.type}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-5 space-y-2">
                <h3 className="font-bold text-lg text-foreground">{v.type}</h3>
                <p className="text-sm text-muted-foreground">{v.cars}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-primary">{v.rate}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="h-3 w-3" /> {v.capacity}
                  </span>
                </div>
                <a
                  href={getWhatsAppUrl(
                    `Hi, I want to book a ${v.type} (${v.cars}). Please share availability and pricing.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pt-2"
                >
                  <Button size="sm" className="w-full gap-1">
                    Book Now <ArrowRight className="h-3 w-3" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/fleet">
            <Button variant="outline" className="gap-2">
              {cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* 6 ─ Popular Routes */
function PopularRoutes() {
  const { t } = useLanguage()
  const { title, subtitle, routes, bookCta } = t.popularRoutes

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title={title} subtitle={subtitle} />

        {/* Desktop table */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left py-3 px-4 font-semibold">Route</th>
                  <th className="text-center py-3 px-4 font-semibold">Sedan</th>
                  <th className="text-center py-3 px-4 font-semibold">Ertiga</th>
                  <th className="text-center py-3 px-4 font-semibold">Innova</th>
                  <th className="text-center py-3 px-4 font-semibold" />
                </tr>
              </thead>
              <tbody>
                {routes.map((r, i) => (
                  <tr
                    key={i}
                    className="border-t border-border hover:bg-muted/40 transition-colors"
                  >
                    <td className="py-3 px-4 font-medium">
                      <span className="flex items-center gap-2">
                        <Route className="h-4 w-4 text-primary shrink-0" />
                        {r.from} → {r.to}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4">{r.sedan}</td>
                    <td className="text-center py-3 px-4">{r.ertiga}</td>
                    <td className="text-center py-3 px-4">{r.innova}</td>
                    <td className="text-center py-3 px-4">
                      <a
                        href={getWhatsAppUrl(
                          `Hi, I want to book ${r.from} to ${r.to}. Please share details.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="gap-1">
                          {bookCta}
                          <ArrowRight className="h-3 w-3" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden grid grid-cols-1 gap-4 max-w-md mx-auto">
          {routes.map((r, i) => (
            <Card key={i} className="border border-border/50">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Route className="h-4 w-4 text-primary" />
                  {r.from} → {r.to}
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="bg-muted/50 rounded-lg p-2">
                    <div className="text-xs text-muted-foreground">Sedan</div>
                    <div className="font-semibold text-foreground">{r.sedan}</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-2">
                    <div className="text-xs text-muted-foreground">Ertiga</div>
                    <div className="font-semibold text-foreground">{r.ertiga}</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-2">
                    <div className="text-xs text-muted-foreground">Innova</div>
                    <div className="font-semibold text-foreground">{r.innova}</div>
                  </div>
                </div>
                <a
                  href={getWhatsAppUrl(
                    `Hi, I want to book ${r.from} to ${r.to}. Please share details.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="w-full gap-1">
                    {bookCta}
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 7 ─ Tour Packages Preview */
function TourPackagesPreview() {
  const { t } = useLanguage()
  const { title, subtitle, viewAll, bookCta, items } = t.packagesPreview

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
          {items.map((pkg, i) => (
            <Card
              key={i}
              className="group overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm">
                  <Clock className="h-3 w-3 text-primary" />
                  {pkg.badge}
                </span>
              </div>

              <CardContent className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-base font-bold text-foreground leading-snug">
                  {pkg.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                  {pkg.desc}
                </p>
                <a
                  href={getWhatsAppUrl(pkg.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button size="sm" className="w-full gap-1.5 font-semibold group/btn">
                    {bookCta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/packages">
            <Button variant="outline" className="gap-2 font-semibold">
              {viewAll}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* 8 ─ Why Choose Us */
function WhyChooseUs() {
  const { t } = useLanguage()
  const { title, items } = t.whyUs

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <SectionHeading title={title} light />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => {
            const Icon = whyUsIcons[item.icon] || Shield
            return (
              <div
                key={i}
                className="flex gap-4 items-start p-5 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* 8 ─ Testimonials */
function TestimonialsSection() {
  const { t } = useLanguage()
  const { title, subtitle, items, cta } = t.testimonials
  const [page, setPage] = useState(0)

  // Show 1 on mobile, 2 on md, 3 on lg  → we'll use a simple card grid that pages through
  const perPage = 3
  const totalPages = Math.ceil(items.length / perPage)
  const visible = items.slice(page * perPage, page * perPage + perPage)

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {visible.map((tm, i) => (
            <Card key={`${page}-${i}`} className="border border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                {/* stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: tm.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{tm.text}"
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">
                    {tm.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{tm.trip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* pagination dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage(p => (p - 1 + totalPages) % totalPages)}
              aria-label="Previous testimonials"
              className="rounded-full p-1.5 hover:bg-muted transition"
            >
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === page ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/30'
                }`}
              />
            ))}
            <button
              onClick={() => setPage(p => (p + 1) % totalPages)}
              aria-label="Next testimonials"
              className="rounded-full p-1.5 hover:bg-muted transition"
            >
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/testimonials">
            <Button variant="outline" className="gap-2">
              {cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a
            href={t.testimonials.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {t.testimonials.googleRating} on Google
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

/* 9 ─ FAQ */
function FaqSection() {
  const { t } = useLanguage()
  const { title, items } = t.faq

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title={title} />

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border/50 rounded-xl px-5 overflow-hidden data-[state=open]:shadow-sm transition-shadow"
            >
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

/* 10 ─ CTA Banner */
function CtaBanner() {
  const { t } = useLanguage()
  const { title: ctaTitle, subtitle: ctaSubtitle, phone, whatsapp } = t.cta

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">{ctaTitle}</h2>
        <p className="mt-3 text-base md:text-lg text-primary-foreground/70 max-w-lg mx-auto">
          {ctaSubtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+919039660447">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 min-w-[200px] font-semibold shadow-lg"
            >
              <Phone className="h-5 w-5" />
              {phone}
            </Button>
          </a>
          <a
            href={getWhatsAppUrl(
              'Hi, I want to book a ride with Shubham Tour & Travels. Please share details.',
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="gap-2 min-w-[200px] font-semibold bg-green-600 hover:bg-green-700 text-white shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {whatsapp}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Main HomePage
   ───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Seo
        title="Shubham Tour & Travels Indore | Best Cab, Taxi & Tour Services | 24/7"
        description="Shubham Tour & Travels Indore — trusted cab booking, airport transfers, outstation cabs to Ujjain, Omkareshwar, Bhopal, Maheshwar, Mandu. Wedding car hire, religious tours, corporate travel. Serving Vikas Nagar, Airport Road, Bhawarkuan, Vijay Nagar, Palasia, Rajwada, Sapna Sangeeta. 24/7 service. Call 9039660447."
        path="/"
      />
      <main>
        <HeroCarousel />
        <InlineBookingForm />
        <QuickActions />
        <AboutPreview />
        <ServicesPreview />
        <FleetPreview />
        <PopularRoutes />
        <TourPackagesPreview />
        <WhyChooseUs />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner />
      </main>
    </>
  )
}
