import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { MessageCircle } from 'lucide-react'

export function WhatsAppFab() {
  const { t } = useLanguage()

  return (
    <a
      href={getWhatsAppUrl(t.whatsappDefault)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 lg:bottom-6 right-4 z-40 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 fill-white" />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  )
}
