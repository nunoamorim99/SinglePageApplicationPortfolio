import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import pt from './locales/pt.js'
import es from './locales/es.js'
import de from './locales/de.js'
import it from './locales/it.js'
import fr from './locales/fr.js'

const savedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') : null

const browserLocale = typeof navigator !== 'undefined'
  ? (navigator.language || '').split('-')[0]
  : 'en'

function resolveLocale(code) {
  const supported = ['en', 'pt', 'es', 'de', 'it', 'fr']
  return supported.includes(code) ? code : 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: resolveLocale(savedLocale || browserLocale),
  fallbackLocale: 'en',
  messages: { en, pt, es, de, it, fr },
})

export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}

export default i18n
