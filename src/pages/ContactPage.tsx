import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { Seo } from '@/components/Seo'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from 'lucide-react'

/* ───────── Section components ───────── */

/* 1 ─ Hero Banner */
function HeroBanner() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full py-20 md:py-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
          {t.contact.heroTitle}
        </h1>
        <p className="mt-4 text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto">
          {t.contact.heroSubtitle}
        </p>
        <div className="mt-6 h-1 w-20 rounded-full bg-accent mx-auto" />
      </div>
    </section>
  )
}

/* 2 ─ Contact Form + Direct Contact (two-column) */
function ContactSection() {
  const { t } = useLanguage()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const parts = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Date: ${date}`,
      `Message: ${message}`,
    ]
    const waMessage = parts.join('\n')

    window.open(getWhatsAppUrl(waMessage), '_blank', 'noopener')
  }

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── Left: Contact Form ── */}
          <Card className="border-none shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                {t.contact.formTitle}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.name}</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contact.name}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.contact.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.contact.phone}
                    required
                  />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label htmlFor="service">{t.contact.service}</Label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>
                      {t.contact.service}
                    </option>
                    {t.contact.serviceOptions.map((opt: string) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date">{t.contact.date}</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.message}</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.message}
                    rows={4}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 font-semibold bg-green-600 hover:bg-green-700 text-white shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  {t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* ── Right: Direct Contact Cards + Hours ── */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              {t.contact.directTitle}
            </h2>

            {/* Call */}
            <Card className="border border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t.contact.callUs}
                  </h3>
                  <a
                    href="tel:+919039660447"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 90396 60447
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t.contact.emailUs}
                  </h3>
                  <a
                    href="mailto:shubhamtourandtravels@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    shubhamtourandtravels@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="border border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-green-600/10 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t.contact.whatsappUs}
                  </h3>
                  <a
                    href={getWhatsAppUrl(t.whatsappDefault)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                  >
                    +91 90396 60447
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="border border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t.contact.visitUs}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.contact.address}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border border-border/50 bg-muted/40">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t.contact.hoursTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.contact.hoursText}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

/* 3 ─ Quick Service Enquiry */
function QuickEnquiry() {
  const { t } = useLanguage()

  const serviceMessages: Record<string, string> = {
    'Local Sightseeing':
      'Hi, I am interested in Local Sightseeing in Indore. Please share details and availability.',
    'Outstation Travel':
      'Hi, I want to book an Outstation Trip. Please share rates and details.',
    'Airport Transfer':
      'Hi, I need an Airport Transfer. Please share pricing and availability.',
    'Corporate Service':
      'Hi, I am interested in Corporate Travel Services. Please share packages and details.',
    'Wedding Transport':
      'Hi, I need Wedding/Event Transport services. Please share options and pricing.',
    'Religious Tour':
      'Hi, I am interested in Religious Tour packages. Please share itineraries and pricing.',
  }

  const quickServices = t.contact.serviceOptions.filter(
    (opt: string) => opt !== 'Other',
  )

  return (
    <section className="scroll-mt-20 py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading
          title={t.contact.quickEnquiry}
          subtitle={t.contact.quickEnquiryText}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {quickServices.map((svc: string) => (
            <a
              key={svc}
              href={getWhatsAppUrl(
                serviceMessages[svc] ||
                  `Hi, I am interested in ${svc}. Please share details.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full h-auto py-4 px-3 gap-2 text-sm font-medium hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                {svc}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 4 ─ Embedded Google Map */
function MapSection() {
  return (
    <section className="scroll-mt-20">
      <div className="w-full h-[350px] md:h-[450px]">
        <iframe
          title="Shubham Tour & Travels Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3!2d75.8!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEyLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Main ContactPage
   ───────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Shubham Tour & Travels at 449 Vikas Nagar, Airport Road, Indore 452005. Call 9039660447 for cab booking, outstation travel, airport transfers. Near Bhawarkuan, Vijay Nagar, Palasia. 24/7 service."
        path="/contact"
      />
      <main>
        <HeroBanner />
        <ContactSection />
        <QuickEnquiry />
        <MapSection />
      </main>
    </>
  )
}
