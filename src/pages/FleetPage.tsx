import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  Luggage,
  Snowflake,
  Check,
  MessageCircle,
  Info,
} from 'lucide-react'

/* ─────────────────────────────────────────────
   1 ─ Hero Banner
   ───────────────────────────────────────────── */
function FleetHero() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* decorative circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5" />

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
          {t.fleet.heroTitle}
        </h1>
        <p className="mt-4 text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto">
          {t.fleet.heroSubtitle}
        </p>
        <div className="mt-6 h-1 w-16 rounded-full bg-accent mx-auto" />
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   2 ─ Minimum Billing Notice
   ───────────────────────────────────────────── */
function MinBillingNotice() {
  const { t } = useLanguage()

  return (
    <section className="scroll-mt-20 bg-background">
      <div className="container mx-auto px-4 -mt-5 relative z-20">
        <div className="max-w-3xl mx-auto rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-700 p-4 flex items-center gap-3 shadow-sm">
          <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
            <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <p className="text-sm md:text-base font-medium text-amber-800 dark:text-amber-200">
            {t.fleet.minBilling}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   3 ─ Fleet Categories – Detailed Vehicle Cards
   ───────────────────────────────────────────── */
function FleetCategories() {
  const { t } = useLanguage()
  const categories = t.fleet.categories

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t.fleet.heroTitle}
          subtitle={t.fleet.heroSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <Card
              key={i}
              className="group overflow-hidden border border-border/50 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Vehicle image with overlay pricing badge */}
              <div className="relative h-52 md:h-60 bg-muted overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.type}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* pricing badge */}
                <Badge className="absolute top-4 right-4 text-base md:text-lg font-bold px-3 py-1.5 bg-accent text-accent-foreground shadow-lg border-0">
                  {cat.rate}
                  <span className="text-xs font-normal ml-0.5">{cat.rateUnit}</span>
                </Badge>

                {/* type & tagline on image */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                    {cat.type}
                  </h3>
                  <p className="text-sm text-white/80 drop-shadow-sm">
                    {cat.tagline}
                  </p>
                </div>
              </div>

              <CardContent className="p-5 md:p-6 space-y-5">
                {/* Cars list */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Available Models
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.cars.map((car, j) => (
                      <Badge key={j} variant="secondary" className="font-medium">
                        {car}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Specs: capacity, luggage, AC */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/50">
                    <Users className="h-5 w-5 text-primary mb-1" />
                    <span className="text-xs text-muted-foreground leading-tight">
                      {cat.capacity}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/50">
                    <Luggage className="h-5 w-5 text-primary mb-1" />
                    <span className="text-xs text-muted-foreground leading-tight">
                      {cat.luggage}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/50">
                    <Snowflake className="h-5 w-5 text-primary mb-1" />
                    <span className="text-xs text-muted-foreground leading-tight">
                      {cat.ac}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {cat.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0" />
                      <span className="text-foreground">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Book CTA */}
                <a
                  href={getWhatsAppUrl(
                    `Hi, I want to book a ${cat.type}. Please share availability and rates.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full gap-2 text-base font-semibold" size="lg">
                    <MessageCircle className="h-4 w-4" />
                    Book This Vehicle
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

/* ─────────────────────────────────────────────
   4 ─ Special Route Packages
   ───────────────────────────────────────────── */
function SpecialRoutes() {
  const { t } = useLanguage()
  const { routes, bookCta } = t.popularRoutes

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t.fleet.specialTitle}
          subtitle={t.fleet.specialSubtitle}
        />

        {/* Desktop table */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="rounded-xl border border-border overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left py-3.5 px-5 font-semibold">Route</th>
                  <th className="text-center py-3.5 px-5 font-semibold">Sedan</th>
                  <th className="text-center py-3.5 px-5 font-semibold">Ertiga</th>
                  <th className="text-center py-3.5 px-5 font-semibold">Innova</th>
                  <th className="py-3.5 px-5" />
                </tr>
              </thead>
              <tbody>
                {routes.map((r, i) => (
                  <tr
                    key={i}
                    className="border-t border-border hover:bg-muted/40 transition-colors"
                  >
                    <td className="py-3.5 px-5 font-medium text-foreground">
                      {r.from} → {r.to}
                    </td>
                    <td className="text-center py-3.5 px-5 font-semibold text-foreground">
                      {r.sedan}
                    </td>
                    <td className="text-center py-3.5 px-5 font-semibold text-foreground">
                      {r.ertiga}
                    </td>
                    <td className="text-center py-3.5 px-5 font-semibold text-foreground">
                      {r.innova}
                    </td>
                    <td className="text-center py-3.5 px-5">
                      <a
                        href={getWhatsAppUrl(
                          `Hi, I want to book ${r.from} to ${r.to}. Please share details.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="gap-1">
                          <MessageCircle className="h-3.5 w-3.5" />
                          {bookCta}
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
            <Card key={i} className="border border-border/50 shadow-sm">
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-foreground text-base">
                  {r.from} → {r.to}
                </h3>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="bg-muted/60 rounded-lg p-2.5">
                    <div className="text-[11px] text-muted-foreground mb-0.5">Sedan</div>
                    <div className="font-bold text-foreground">{r.sedan}</div>
                  </div>
                  <div className="bg-muted/60 rounded-lg p-2.5">
                    <div className="text-[11px] text-muted-foreground mb-0.5">Ertiga</div>
                    <div className="font-bold text-foreground">{r.ertiga}</div>
                  </div>
                  <div className="bg-muted/60 rounded-lg p-2.5">
                    <div className="text-[11px] text-muted-foreground mb-0.5">Innova</div>
                    <div className="font-bold text-foreground">{r.innova}</div>
                  </div>
                </div>
                <a
                  href={getWhatsAppUrl(
                    `Hi, I want to book ${r.from} to ${r.to}. Please share details.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="w-full gap-1.5">
                    <MessageCircle className="h-3.5 w-3.5" />
                    {bookCta}
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

/* ─────────────────────────────────────────────
   5 ─ Vehicle Comparison Table
   ───────────────────────────────────────────── */
function VehicleComparison() {
  const { t } = useLanguage()
  const categories = t.fleet.categories

  const rows = [
    { label: 'Rate', key: 'rate' as const, format: (c: typeof categories[number]) => `${c.rate}${c.rateUnit}` },
    { label: 'Passengers', key: 'capacity' as const, format: (c: typeof categories[number]) => c.capacity },
    { label: 'Luggage', key: 'luggage' as const, format: (c: typeof categories[number]) => c.luggage },
    { label: 'AC', key: 'ac' as const, format: (c: typeof categories[number]) => c.ac },
    { label: 'Models', key: 'cars' as const, format: (c: typeof categories[number]) => c.cars.join(', ') },
  ]

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title={t.fleet.comparison} />

        {/* Desktop table */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="rounded-xl border border-border overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left py-3.5 px-5 font-semibold">Feature</th>
                  {categories.map((cat, i) => (
                    <th key={i} className="text-center py-3.5 px-5 font-semibold">
                      {cat.type}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-border hover:bg-muted/40 transition-colors"
                  >
                    <td className="py-3.5 px-5 font-medium text-foreground">
                      {row.label}
                    </td>
                    {categories.map((cat, j) => (
                      <td
                        key={j}
                        className={`text-center py-3.5 px-5 text-foreground ${
                          row.label === 'Rate' ? 'font-bold text-primary' : ''
                        }`}
                      >
                        {row.format(cat)}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Features row */}
                <tr className="border-t border-border hover:bg-muted/40 transition-colors">
                  <td className="py-3.5 px-5 font-medium text-foreground">Features</td>
                  {categories.map((cat, j) => (
                    <td key={j} className="py-3.5 px-5">
                      <div className="flex flex-col items-center gap-1">
                        {cat.features.map((f, k) => (
                          <span
                            key={k}
                            className="text-xs text-muted-foreground flex items-center gap-1"
                          >
                            <Check className="h-3 w-3 text-green-600 dark:text-green-400 shrink-0" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                {/* Book row */}
                <tr className="border-t border-border bg-muted/20">
                  <td className="py-4 px-5" />
                  {categories.map((cat, j) => (
                    <td key={j} className="py-4 px-5 text-center">
                      <a
                        href={getWhatsAppUrl(
                          `Hi, I want to book a ${cat.type}. Please share availability and rates.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="gap-1.5">
                          <MessageCircle className="h-3.5 w-3.5" />
                          Book
                        </Button>
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tablet & mobile – horizontal scroll cards */}
        <div className="lg:hidden max-w-3xl mx-auto overflow-x-auto pb-4 -mx-4 px-4">
          <div className="inline-flex gap-4" style={{ minWidth: 'max-content' }}>
            {categories.map((cat, i) => (
              <Card
                key={i}
                className="w-64 shrink-0 border border-border/50 shadow-sm"
              >
                <CardContent className="p-5 space-y-3">
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-foreground">{cat.type}</h3>
                    <span className="text-2xl font-bold text-primary">
                      {cat.rate}
                      <span className="text-sm font-normal text-muted-foreground">
                        {cat.rateUnit}
                      </span>
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-foreground">{cat.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Luggage className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-foreground">{cat.luggage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Snowflake className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-foreground">{cat.ac}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-3 space-y-1.5">
                    {cat.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs">
                        <Check className="h-3 w-3 text-green-600 dark:text-green-400 shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-3 text-center">
                    <p className="text-[11px] text-muted-foreground mb-2">
                      {cat.cars.join(' · ')}
                    </p>
                    <a
                      href={getWhatsAppUrl(
                        `Hi, I want to book a ${cat.type}. Please share availability and rates.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="w-full gap-1.5">
                        <MessageCircle className="h-3.5 w-3.5" />
                        Book
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Page Composition
   ───────────────────────────────────────────── */
export default function FleetPage() {
  return (
    <>
      <Seo
        title="Our Fleet"
        description="Choose from Sedan (Dzire, Aura, Amaze), SUV (Ertiga), Premium SUV (Innova Crysta), and Tempo Travellers (16-22 seater) for cab booking in Indore. Well-maintained, AC vehicles with professional drivers."
        path="/fleet"
      />
      <main>
        <FleetHero />
        <MinBillingNotice />
        <FleetCategories />
        <SpecialRoutes />
        <VehicleComparison />
      </main>
    </>
  )
}
