<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useUiStore } from '@/stores/ui'
import { setLocale } from '@/i18n'

const { t, locale } = useI18n()
const route = useRoute()
const ui = useUiStore()
const scrolled = ref(false)
const langOpen = ref(false)

const navLinks = [
  { key: 'home', to: '/' },
  { key: 'projects', to: '/projects' },
  { key: 'courses', to: '/courses' },
  { key: 'personal', to: '/personal' },
]

const locales = [
  { code: 'en', flag: 'gb' },
  { code: 'pt', flag: 'pt' },
  { code: 'es', flag: 'es' },
  { code: 'de', flag: 'de' },
  { code: 'it', flag: 'it' },
  { code: 'fr', flag: 'fr' },
]

function flagUrl(countryCode) {
  return `https://flagcdn.com/w40/${countryCode}.png`
}

const currentFlag = computed(() => {
  const loc = locales.find(l => l.code === locale.value)
  return flagUrl(loc ? loc.flag : 'gb')
})

function isActive(to) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

function switchLocale(code) {
  setLocale(code)
  langOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function onClickOutside(e) {
  if (!e.target.closest('.lang-switcher')) langOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/90 shadow-sm backdrop-blur-md dark:bg-neutral-950/90' : 'bg-transparent'"
  >
    <nav class="section-container flex h-16 items-center justify-between" :aria-label="t('nav.home')">
      <router-link
        to="/"
        class="font-display text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-primary-600 dark:text-white"
        @click="ui.closeMobileMenu()"
      >
        NA<span class="text-primary-600">.</span>
      </router-link>

      <div class="flex items-center gap-2">
        <!-- Desktop nav -->
        <ul class="hidden items-center gap-1 md:flex" role="menubar">
          <li v-for="link in navLinks" :key="link.key" role="none">
            <router-link
              :to="link.to"
              role="menuitem"
              class="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors"
              :class="isActive(link.to)
                ? 'text-primary-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-neutral-800 dark:hover:text-white'"
            >
              {{ t(`nav.${link.key}`) }}
              <span
                v-if="isActive(link.to)"
                class="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary-600"
              />
            </router-link>
          </li>
        </ul>

        <!-- Language switcher -->
        <div class="lang-switcher relative">
          <button
            class="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold uppercase text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-200"
            :aria-expanded="langOpen"
            aria-label="Select language"
            @click="langOpen = !langOpen"
          >
            <img :src="currentFlag" :alt="locale" class="h-4 w-5 rounded-sm object-cover" />
            {{ locale }}
            <svg class="h-3.5 w-3.5 transition-transform" :class="langOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0"
          >
            <ul
              v-if="langOpen"
              class="absolute right-0 top-full mt-1 min-w-[140px] overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
              role="listbox"
            >
              <li v-for="loc in locales" :key="loc.code" role="option" :aria-selected="locale === loc.code">
                <button
                  class="flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors"
                  :class="locale === loc.code ? 'bg-primary-50 font-medium text-primary-600 dark:bg-primary-900/30 dark:text-primary-400' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-neutral-800'"
                  @click="switchLocale(loc.code)"
                >
                  <img :src="flagUrl(loc.flag)" :alt="loc.code" class="h-4 w-5 rounded-sm object-cover" />
                  {{ t(`lang.${loc.code}`) }}
                </button>
              </li>
            </ul>
          </Transition>
        </div>

        <!-- Dark mode toggle -->
        <button
          class="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-200"
          aria-label="Toggle dark mode"
          @click="ui.toggleDarkMode()"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg v-if="ui.isDark" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          <!-- Moon icon (shown in light mode) -->
          <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>

        <!-- Mobile hamburger -->
        <button
          class="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 md:hidden"
          :aria-expanded="ui.isMobileMenuOpen"
          aria-label="Toggle navigation menu"
          @click="ui.toggleMobileMenu()"
        >
          <div class="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
            <span
              class="h-0.5 w-5 rounded-full bg-gray-900 transition-all duration-300 dark:bg-gray-100"
              :class="ui.isMobileMenuOpen ? 'translate-y-[4px] rotate-45' : ''"
            />
            <span
              class="h-0.5 w-5 rounded-full bg-gray-900 transition-all duration-300 dark:bg-gray-100"
              :class="ui.isMobileMenuOpen ? '-translate-y-[4px] -rotate-45' : ''"
            />
          </div>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="ui.isMobileMenuOpen"
        class="absolute inset-x-0 top-16 border-b border-gray-100 bg-white/95 px-4 pb-6 pt-2 shadow-lg backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/95 md:hidden"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="link in navLinks" :key="link.key">
            <router-link
              :to="link.to"
              class="flex rounded-lg px-4 py-3 text-base font-medium transition-colors"
              :class="isActive(link.to) ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/30' : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-neutral-800'"
              @click="ui.closeMobileMenu()"
            >
              {{ t(`nav.${link.key}`) }}
            </router-link>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
