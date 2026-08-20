import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Quote, MessageCircle, ExternalLink } from 'lucide-react'

/* ───────── Section components ───────── */

/* 1 ─ Hero Banner */
function HeroBanner() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full py-20 md:py-32 bg-primary overflow-hidden">
      {/* decorative overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
          {t.testimonials.title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto">
          {t.testimonials.subtitle}
        </p>
        <div className="mt-6 h-1 w-20 rounded-full bg-accent mx-auto" />
      </div>
    </section>
  )
}

/* 2 ─ Testimonial Cards Grid */
function TestimonialGrid() {
  const { t } = useLanguage()

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.testimonials.items.map(
            (
              item: { name: string; trip: string; rating: number; text: string },
              i: number,
            ) => (
              <Card
                key={i}
                className="group border border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Quote icon */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>

                  {/* Review text */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                    "{item.text}"
                  </p>

                  {/* Star rating */}
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`h-4 w-4 ${
                          s < item.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Customer info */}
                  <div>
                    <p className="font-bold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.trip}</p>
                  </div>
                </CardContent>
              </Card>
            ),
          )}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-10 text-center">
          <a
            href={t.testimonials.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg border border-border/50 transition-all hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.97 10.97 0 0 0 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09a6.6 6.6 0 0 1 0-4.18V7.07H2.18a10.97 10.97 0 0 0 0 9.86l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.94 10.94 0 0 0 12 1 10.97 10.97 0 0 0 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="font-bold text-foreground">{t.testimonials.googleRating}</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className={`h-3.5 w-3.5 ${s < 5 ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted'}`} />
                  ))}
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{t.testimonials.googleCta}</span>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* 3 ─ Share Experience CTA */
function ShareCta() {
  const { t } = useLanguage()

  const shareMessage =
    'Hi, I want to share my travel experience with Shubham Tour & Travels.'

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <Quote className="h-10 w-10 mx-auto mb-4 text-accent" />
        <h2 className="text-2xl md:text-4xl font-bold max-w-2xl mx-auto">
          Share Your Experience
        </h2>
        <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto text-sm md:text-base">
          Had a great journey with us? We'd love to hear about it!
        </p>

        <div className="mt-8">
          <a
            href={getWhatsAppUrl(shareMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="gap-2 min-w-[220px] font-semibold bg-green-600 hover:bg-green-700 text-white shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              {t.cta.whatsapp}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Main TestimonialsPage
   ───────────────────────────────────────────── */
export default function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Customer Reviews"
        description="Read verified reviews from happy customers of Shubham Tour & Travels Indore. Rated 4.5+ stars on Google. Trusted for outstation cabs, airport transfers, and wedding transport."
        path="/testimonials"
      />
      <main>
        <HeroBanner />
        <TestimonialGrid />
        <ShareCta />
      </main>
    </>
  )
}
