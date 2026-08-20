import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/language-context'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BottomNav } from '@/components/layout/BottomNav'
import { WhatsAppFab } from '@/components/layout/WhatsAppFab'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import FleetPage from '@/pages/FleetPage'
import PackagesPage from '@/pages/PackagesPage'
import GalleryPage from '@/pages/GalleryPage'
import TestimonialsPage from '@/pages/TestimonialsPage'
import ContactPage from '@/pages/ContactPage'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-svh">
          <Header />
          <main className="flex-1 pt-16 pb-16 lg:pb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/fleet" element={<FleetPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <BottomNav />
          <WhatsAppFab />
        </div>
      </BrowserRouter>
    </LanguageProvider>
    </ThemeProvider>
  )
}
