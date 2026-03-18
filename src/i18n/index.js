import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import pt from './locales/pt.js'

const savedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') : null

const browserLocale = typeof navigator !== 'undefined'
  ? (navigator.language || '').split('-')[0]
  : 'en'

function resolveLocale(code) {
  const supported = ['en', 'pt']
  return supported.includes(code) ? code : 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: resolveLocale(savedLocale || browserLocale),
  fallbackLocale: 'en',
  messages: { en, pt },
})

export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}

export default i18n
