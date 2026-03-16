<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUiStore } from '@/stores/ui'

const route = useRoute()
const ui = useUiStore()
const scrolled = ref(false)

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Courses', to: '/courses' },
  { name: 'Personal', to: '/personal' },
]

function isActive(to) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'"
  >
    <nav class="section-container flex h-16 items-center justify-between" aria-label="Main navigation">
      <router-link
        to="/"
        class="font-display text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-primary-600"
        @click="ui.closeMobileMenu()"
      >
        NA<span class="text-primary-600">.</span>
      </router-link>

      <!-- Desktop nav -->
      <ul class="hidden items-center gap-1 md:flex" role="menubar">
        <li v-for="link in navLinks" :key="link.to" role="none">
          <router-link
            :to="link.to"
            role="menuitem"
            class="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            :class="isActive(link.to)
              ? 'text-primary-600'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'"
          >
            {{ link.name }}
            <span
              v-if="isActive(link.to)"
              class="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary-600"
            />
          </router-link>
        </li>
      </ul>

      <!-- Mobile hamburger -->
      <button
        class="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-gray-100 md:hidden"
        :aria-expanded="ui.isMobileMenuOpen"
        aria-label="Toggle navigation menu"
        @click="ui.toggleMobileMenu()"
      >
        <div class="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
          <span
            class="h-0.5 w-5 rounded-full bg-gray-900 transition-all duration-300"
            :class="ui.isMobileMenuOpen ? 'translate-y-[4px] rotate-45' : ''"
          />
          <span
            class="h-0.5 w-5 rounded-full bg-gray-900 transition-all duration-300"
            :class="ui.isMobileMenuOpen ? '-translate-y-[4px] -rotate-45' : ''"
          />
        </div>
      </button>
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
        class="absolute inset-x-0 top-16 border-b border-gray-100 bg-white/95 px-4 pb-6 pt-2 shadow-lg backdrop-blur-md md:hidden"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="link in navLinks" :key="link.to">
            <router-link
              :to="link.to"
              class="flex rounded-lg px-4 py-3 text-base font-medium transition-colors"
              :class="isActive(link.to) ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'"
              @click="ui.closeMobileMenu()"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
