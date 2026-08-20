import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Shield,
  Clock,
  Wallet,
  Heart,
  Eye,
  CheckCircle,
  Target,
  Sparkles,
  MapPin,
  User,
  MessageCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/* ───────── icon map for core values ───────── */
const valueIcons: LucideIcon[] = [
  Shield,
  Clock,
  Wallet,
  Heart,
  Eye,
  Sparkles,
]

/* ─────────────────────────────────────────────
   Section components
   ───────────────────────────────────────────── */

/* 1 ─ Hero Banner */
function HeroBanner() {
  const { t } = useLanguage()
  const { heroTitle, heroSubtitle } = t.about

  return (
    <section className="relative w-full py-20 md:py-32 bg-primary overflow-hidden">
      {/* decorative overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
          {heroTitle}
        </h1>
        <p className="mt-4 text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto">
          {heroSubtitle}
        </p>
        <div className="mt-6 h-1 w-20 rounded-full bg-accent mx-auto" />
      </div>
    </section>
  )
}

/* 2 ─ Our Story */
function OurStory() {
  const { t } = useLanguage()
  const { storyTitle, storyP1, storyP2, storyP3 } = t.about

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title={storyTitle} />

        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
          <p>{storyP1}</p>
          <p>{storyP2}</p>
          <p>{storyP3}</p>
        </div>
      </div>
    </section>
  )
}

/* 3 ─ Mission & Vision */
function MissionVision() {
  const { t } = useLanguage()
  const { missionTitle, missionText, visionTitle, visionText } = t.about

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {missionTitle}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {missionText}
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {visionTitle}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {visionText}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

/* 4 ─ Founder */
function FounderSection() {
  const { t } = useLanguage()
  const { founderTitle, founderName, founderRole, founderText } = t.about

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title={founderTitle} />

        <Card className="border-none shadow-sm">
          <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* placeholder avatar */}
            <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-primary/20">
              <User className="h-12 w-12 md:h-16 md:w-16 text-primary/50" />
            </div>

            <div className="text-center md:text-left space-y-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {founderName}
                </h3>
                <p className="text-sm text-primary font-medium">{founderRole}</p>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {founderText}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

/* 5 ─ Core Values */
function CoreValues() {
  const { t } = useLanguage()
  const { valuesTitle, values } = t.about

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionHeading title={valuesTitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map(
            (value: { title: string; desc: string }, i: number) => {
              const Icon = valueIcons[i % valueIcons.length]
              return (
                <Card
                  key={i}
                  className="group border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              )
            },
          )}
        </div>
      </div>
    </section>
  )
}

/* 6 ─ Journey Timeline */
function JourneyTimeline() {
  const { t } = useLanguage()
  const { timelineTitle, timeline } = t.about

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title={timelineTitle} />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-10">
            {timeline.map(
              (
                item: { year: string; title: string; desc: string },
                i: number,
              ) => {
                const isEven = i % 2 === 0
                return (
                  <div
                    key={i}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10 mt-1" />

                    {/* spacer for mobile */}
                    <div className="w-10 shrink-0 md:hidden" />

                    {/* content card */}
                    <div
                      className={`flex-1 md:w-[calc(50%-2rem)] ${
                        isEven
                          ? 'md:pr-10 md:text-right'
                          : 'md:pl-10 md:text-left'
                      }`}
                    >
                      <Card className="border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-5">
                          <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-2">
                            {item.year}
                          </span>
                          <h3 className="font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* opposite spacer for desktop */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                )
              },
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* 7 ─ Service Coverage */
function ServiceCoverage() {
  const { t } = useLanguage()
  const { coverageTitle, coverageText, coverageCities } = t.about

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading title={coverageTitle} />

        <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm md:text-base mb-8">
          {coverageText}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {coverageCities.map((city: string, i: number) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" />
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 8 ─ CTA Section */
function CtaSection() {
  const { t } = useLanguage()
  const { ctaTitle } = t.about

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <CheckCircle className="h-10 w-10 mx-auto mb-4 text-accent" />
        <h2 className="text-2xl md:text-4xl font-bold max-w-2xl mx-auto">
          {ctaTitle}
        </h2>

        <div className="mt-8">
          <a
            href={getWhatsAppUrl(t.whatsappDefault)}
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
   Main AboutPage
   ───────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Shubham Tour & Travels — Indore's trusted cab and tour operator since 2022. Founded by Lakhan Pachrangi, serving Airport Road, Vikas Nagar and all of Indore with safe, affordable travel."
        path="/about"
      />
      <main>
        <HeroBanner />
        <OurStory />
        <MissionVision />
        <FounderSection />
        <CoreValues />
        <JourneyTimeline />
        <ServiceCoverage />
        <CtaSection />
      </main>
    </>
  )
}
