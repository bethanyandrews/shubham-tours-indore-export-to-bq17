import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, MessageCircle, ArrowRight } from 'lucide-react'

/* ───────── Service Detail Section ───────── */
function ServiceSection({
  item,
  index,
}: {
  item: {
    title: string
    desc: string
    highlights: string[]
    img: string
    wa: string
  }
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <section className="scroll-mt-20 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-0 shadow-lg md:shadow-xl">
          <CardContent className="p-0">
            <div
              className={`flex flex-col ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-stretch`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 min-h-[240px] md:min-h-[400px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center w-full md:w-1/2 p-6 md:p-10 lg:p-14 gap-6">
                <div>
                  <Badge variant="secondary" className="mb-3 text-xs uppercase tracking-wider">
                    Service {String(index + 1).padStart(2, '0')}
                  </Badge>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>

                {/* Highlights */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp CTA */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(item.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="gap-2 text-sm md:text-base font-semibold shadow-md w-full sm:w-auto">
                      <MessageCircle className="h-4 w-4" />
                      Book This Service
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

/* ───────── Services Page ───────── */
export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <>
      <Seo
        title="Our Services"
        description="Cab services in Indore — local sightseeing, airport transfers to Devi Ahilyabai Holkar Airport, outstation cabs to Ujjain, Omkareshwar, Bhopal, Maheshwar, wedding car hire, corporate rentals, religious pilgrimage tours. 24/7 availability."
        path="/services"
      />
      <main className="min-h-screen bg-background">
        {/* Hero Banner */}
        <section className="relative bg-primary py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.8),transparent_70%)] opacity-60" />
          <div className="relative container mx-auto px-4 text-center">
            <SectionHeading
              title={t.services.heroTitle}
              subtitle={t.services.heroSubtitle}
              light
            />
          </div>
        </section>

        {/* Service Detail Sections */}
        {t.services.items.map((item, index) => (
          <ServiceSection key={index} item={item} index={index} />
        ))}

        {/* Bottom CTA */}
        <section className="scroll-mt-20 py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Can't find what you need?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm md:text-base">
              We offer custom travel solutions tailored to your specific requirements. Get in touch and let us plan the perfect trip for you.
            </p>
            <a
              href={getWhatsAppUrl('Hi, I have a custom travel requirement. Please help me plan my trip.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-base font-semibold shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                Chat With Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
