<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useUiStore } from "@/stores/ui";
import { setLocale } from "@/i18n";

const { t, locale } = useI18n();
const route = useRoute();
const ui = useUiStore();
const scrolled = ref(false);
const langOpen = ref(false);

const navLinks = [
  { key: "home", to: "/" },
  { key: "projects", to: "/projects" },
  { key: "courses", to: "/courses" },
  { key: "personal", to: "/personal" },
];

const locales = [
  { code: "en", flag: "gb", label: "EN" },
  { code: "pt", flag: "pt", label: "PT" },
];

function flagUrl(countryCode) {
  return `https://flagcdn.com/w40/${countryCode}.png`;
}

const currentFlag = computed(() => {
  const loc = locales.find((l) => l.code === locale.value);
  return flagUrl(loc ? loc.flag : "gb");
});

function isActive(to) {
  if (to === "/") return route.path === "/";
  return route.path.startsWith(to);
}

function switchLocale(code) {
  setLocale(code);
  langOpen.value = false;
}

function onScroll() {
  scrolled.value = window.scrollY > 20;
}

function onClickOutside(e) {
  if (!e.target.closest(".lang-switcher")) langOpen.value = false;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("click", onClickOutside);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  document.removeEventListener("click", onClickOutside);
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="
      scrolled
        ? 'bg-cream-50/95 backdrop-blur-md border-b border-charcoal-100 dark:bg-charcoal-900/95 dark:border-charcoal-700'
        : 'bg-transparent'
    "
  >
    <nav
      class="section-container flex h-20 items-center justify-between"
      :aria-label="t('nav.home')"
    >
      <!-- Logo -->
      <router-link
        to="/"
        class="font-serif text-2xl text-charcoal transition-colors hover:text-vermillion dark:text-cream-100 dark:hover:text-vermillion"
        @click="ui.closeMobileMenu()"
      >
        Nuno<span class="text-vermillion italic">.</span>
      </router-link>

      <div class="flex items-center gap-1">
        <!-- Desktop nav -->
        <ul class="hidden items-center gap-0 md:flex" role="menubar">
          <li v-for="link in navLinks" :key="link.key" role="none">
            <router-link
              :to="link.to"
              role="menuitem"
              class="relative px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300"
              :class="
                isActive(link.to)
                  ? 'text-vermillion'
                  : 'text-charcoal-500 hover:text-charcoal dark:text-charcoal-300 dark:hover:text-cream-100'
              "
            >
              {{ t(`nav.${link.key}`) }}
              <span
                v-if="isActive(link.to)"
                class="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 bg-vermillion"
              />
            </router-link>
          </li>
        </ul>

        <!-- Language switcher -->
        <div class="lang-switcher relative ml-2">
          <button
            class="flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-widest text-charcoal-400 transition-colors hover:text-charcoal dark:text-charcoal-300 dark:hover:text-cream-100"
            :aria-expanded="langOpen"
            aria-label="Select language"
            @click="langOpen = !langOpen"
          >
            <img
              :src="currentFlag"
              :alt="locale"
              class="h-3.5 w-5 rounded-sm object-cover"
            />
            {{ locale }}
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
              class="absolute right-0 top-full mt-2 min-w-[160px] overflow-hidden border border-charcoal-100 bg-cream-50 py-1 dark:border-charcoal-700 dark:bg-charcoal-800"
              role="listbox"
            >
              <li
                v-for="loc in locales"
                :key="loc.code"
                role="option"
                :aria-selected="locale === loc.code"
              >
                <button
                  class="flex w-full items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
                  :class="
                    locale === loc.code
                      ? 'bg-vermillion/10 text-vermillion'
                      : 'text-charcoal-500 hover:bg-charcoal-50 dark:text-charcoal-300 dark:hover:bg-charcoal-700'
                  "
                  @click="switchLocale(loc.code)"
                >
                  <img
                    :src="flagUrl(loc.flag)"
                    :alt="loc.code"
                    class="h-3.5 w-5 rounded-sm object-cover"
                  />
                  {{ t(`lang.${loc.code}`) }}
                </button>
              </li>
            </ul>
          </Transition>
        </div>

        <!-- Dark mode toggle -->
        <button
          class="flex h-10 w-10 items-center justify-center text-charcoal-400 transition-colors hover:text-vermillion dark:text-charcoal-300 dark:hover:text-vermillion"
          aria-label="Toggle dark mode"
          @click="ui.toggleDarkMode()"
        >
          <svg
            v-if="ui.isDark"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
          <svg
            v-else
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>

        <!-- Mobile hamburger -->
        <button
          class="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          :aria-expanded="ui.isMobileMenuOpen"
          aria-label="Toggle navigation menu"
          @click="ui.toggleMobileMenu()"
        >
          <div
            class="flex h-5 w-5 flex-col items-center justify-center gap-1.5"
          >
            <span
              class="h-[2px] w-5 bg-charcoal transition-all duration-300 dark:bg-cream-200"
              :class="ui.isMobileMenuOpen ? 'translate-y-[4px] rotate-45' : ''"
            />
            <span
              class="h-[2px] w-5 bg-charcoal transition-all duration-300 dark:bg-cream-200"
              :class="
                ui.isMobileMenuOpen ? '-translate-y-[4px] -rotate-45' : ''
              "
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
        class="absolute inset-x-0 top-20 border-b border-charcoal-100 bg-cream-50/98 px-6 pb-8 pt-4 backdrop-blur-md dark:border-charcoal-700 dark:bg-charcoal-900/98 md:hidden"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="link in navLinks" :key="link.key">
            <router-link
              :to="link.to"
              class="flex py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors border-b border-charcoal-50 dark:border-charcoal-800"
              :class="
                isActive(link.to)
                  ? 'text-vermillion'
                  : 'text-charcoal-500 dark:text-charcoal-300'
              "
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
