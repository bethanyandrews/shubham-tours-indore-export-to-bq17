import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, MapPin, MessageCircle, ArrowRight } from 'lucide-react'

/* ───────── Package Card ───────── */
function PackageCard({
  item,
  featured = false,
  bookCta,
}: {
  item: {
    title: string
    duration: string
    desc: string
    places: string[]
    img: string
    wa: string
    pricing?: string
  }
  featured?: boolean
  bookCta: string
}) {
  return (
    <Card
      className={`group overflow-hidden border-0 shadow-md transition-shadow duration-300 hover:shadow-lg ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <CardContent className="p-0 h-full flex flex-col">
        {featured ? (
          /* ── Featured (first) card: side-by-side on desktop ── */
          <div className="flex flex-col md:flex-row h-full">
            {/* Image side */}
            <div className="relative w-full md:w-1/2 min-h-[220px] md:min-h-[400px]">
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <Badge className="absolute top-3 left-3 gap-1 shadow-md">
                <Clock className="h-3 w-3" />
                {item.duration}
              </Badge>
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center w-full md:w-1/2 p-6 md:p-10 lg:p-14 gap-5">
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Places */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.places.map((place, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>{place}</span>
                  </li>
                ))}
              </ul>

              {item.pricing && (
                <p className="text-sm font-medium text-primary bg-primary/10 rounded-lg px-4 py-2.5">
                  {item.pricing}
                </p>
              )}

              <div className="pt-1">
                <a
                  href={getWhatsAppUrl(item.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="gap-2 text-sm md:text-base font-semibold shadow-md w-full sm:w-auto"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {bookCta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* ── Standard card: stacked layout ── */
          <>
            {/* Image */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <Badge className="absolute top-3 left-3 gap-1 shadow-md">
                <Clock className="h-3 w-3" />
                {item.duration}
              </Badge>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 md:p-6 gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>

              {/* Places */}
              <ul className="flex flex-col gap-1.5">
                {item.places.map((place, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" />
                    <span>{place}</span>
                  </li>
                ))}
              </ul>

              {item.pricing && (
                <p className="text-sm font-medium text-primary bg-primary/10 rounded-lg px-3 py-2">
                  {item.pricing}
                </p>
              )}

              {/* Spacer pushes CTA to bottom */}
              <div className="mt-auto pt-2">
                <a
                  href={getWhatsAppUrl(item.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2 w-full font-semibold shadow-sm">
                    <MessageCircle className="h-4 w-4" />
                    {bookCta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}

/* ───────── Packages Page ───────── */
export default function PackagesPage() {
  const { t } = useLanguage()

  return (
    <>
      <Seo
        title="Tour Packages"
        description="Affordable tour packages from Indore — Indore to Ujjain cab, Indore to Omkareshwar cab, Indore to Bhopal cab, Indore to Maheshwar cab, Mandu heritage tour, Jyotirlinga circuit, local sightseeing. Starting ₹2,499."
        path="/packages"
      />
      <main className="min-h-screen bg-background">
        {/* Hero Banner */}
        <section className="relative bg-primary py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.8),transparent_70%)] opacity-60" />
          <div className="relative container mx-auto px-4 text-center">
            <SectionHeading
              title={t.packages.heroTitle}
              subtitle={t.packages.heroSubtitle}
              light
            />
          </div>
        </section>

        {/* Package Cards Grid */}
        <section className="scroll-mt-20 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {t.packages.items.map((item, index) => (
                <PackageCard
                  key={index}
                  item={item}
                  featured={index === 0}
                  bookCta={t.packages.bookCta}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Looking for a custom itinerary?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm md:text-base">
              We can create a personalized tour package tailored to your interests, budget, and schedule. Just tell us where you want to go!
            </p>
            <a
              href={getWhatsAppUrl(
                'Hi, I want a custom tour package. Please help me plan my trip.'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-base font-semibold shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                Plan My Trip
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
