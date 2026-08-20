import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Button } from '@/components/ui/button'
import { X, ZoomIn } from 'lucide-react'

/* ───────── Gallery Data ───────── */
const galleryImages = [
  { src: '/fleet-sedan.webp', category: 'Fleet', alt: 'Sedan' },
  { src: '/fleet-suv.webp', category: 'Fleet', alt: 'SUV' },
  { src: '/fleet-innova.webp', category: 'Fleet', alt: 'Premium SUV' },
  { src: '/fleet-tempo.webp', category: 'Fleet', alt: 'Tempo Traveller' },
  { src: '/gallery-fleet.webp', category: 'Fleet', alt: 'Our Fleet' },
  { src: '/dest-indore.webp', category: 'Destinations', alt: 'Indore' },
  { src: '/dest-ujjain.webp', category: 'Destinations', alt: 'Ujjain' },
  { src: '/hero-omkareshwar.webp', category: 'Destinations', alt: 'Omkareshwar' },
  { src: '/dest-bhopal.webp', category: 'Destinations', alt: 'Bhopal' },
  { src: '/dest-mandu.webp', category: 'Destinations', alt: 'Mandu' },
  { src: '/dest-maheshwar.webp', category: 'Destinations', alt: 'Maheshwar' },
  { src: '/hero-highway.webp', category: 'On the Road', alt: 'Highway' },
  { src: '/hero-airport.webp', category: 'On the Road', alt: 'Airport Transfer' },
  { src: '/gallery-scenic.webp', category: 'On the Road', alt: 'Scenic Drive' },
  { src: '/service-family.webp', category: 'On the Road', alt: 'Family Trip' },
]

/** Map category tab index → internal category key used in galleryImages */
const categoryKeys = ['All', 'Fleet', 'Destinations', 'On the Road'] as const

/* ───────── Gallery Page ───────── */
export default function GalleryPage() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const filteredImages =
    activeIndex === 0
      ? galleryImages
      : galleryImages.filter((img) => img.category === categoryKeys[activeIndex])

  return (
    <>
      <Seo
        title="Gallery"
        description="Photo gallery of Shubham Tour & Travels Indore — our fleet, happy customers, scenic routes, and travel moments across Madhya Pradesh."
        path="/gallery"
      />
      <main className="min-h-screen bg-background">
        {/* ── Hero Banner ── */}
        <section className="relative bg-primary py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.8),transparent_70%)] opacity-60" />
          <div className="relative container mx-auto px-4 text-center">
            <SectionHeading
              title={t.gallery.heroTitle}
              subtitle={t.gallery.heroSubtitle}
              light
            />
          </div>
        </section>

        {/* ── Category Filter Tabs ── */}
        <section className="scroll-mt-20 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {t.gallery.categories.map((cat: string, index: number) => (
                <Button
                  key={index}
                  variant={activeIndex === index ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveIndex(index)}
                  className="text-sm font-medium"
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* ── Masonry Image Grid ── */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {filteredImages.map((img, i) => (
                <button
                  key={`${img.src}-${i}`}
                  type="button"
                  onClick={() => setLightbox(img)}
                  className="group relative block w-full break-inside-avoid overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-80"
                  />
                  {/* Hover overlay with ZoomIn icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 drop-shadow-lg" />
                  </div>
                  {/* Image label */}
                  <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-left text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {img.alt}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lightbox Modal ── */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox(null)
              }}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Full-size image */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
          </div>
        )}
      </main>
    </>
  )
}
