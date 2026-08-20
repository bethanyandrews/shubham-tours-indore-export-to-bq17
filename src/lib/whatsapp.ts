const PHONE = '919039660447'

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message: string) {
  window.open(getWhatsAppUrl(message), '_blank', 'noopener')
}
