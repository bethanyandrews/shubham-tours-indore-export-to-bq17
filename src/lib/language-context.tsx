import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { en } from '@/lib/translations/en'
import { hi } from '@/lib/translations/hi'

type Language = 'en' | 'hi'
type Translations = typeof en

interface LanguageContextType {
  lang: Language
  t: Translations
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Translations> = { en, hi }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(
    () => (localStorage.getItem('stt-lang') as Language) || 'en'
  )

  const toggleLanguage = useCallback(() => {
    setLang(prev => {
      const next = prev === 'en' ? 'hi' : 'en'
      localStorage.setItem('stt-lang', next)
      return next
    })
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
