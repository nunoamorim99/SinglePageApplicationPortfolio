<script setup>
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'
import { useUiStore } from '@/stores/ui'
import { computed } from 'vue'
import Ballpit from '@/components/Ballpit/Ballpit.vue'

const { t } = useI18n()
const ui = useUiStore()

const ballpitColors = computed(() =>
  ui.isDark
    ? [0xff4d00, 0xe04400, 0x8b9e7c]
    : [0xff4d00, 0xff7733, 0x8b9e7c]
)
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-cream-50 dark:bg-charcoal-900">
    <!-- Ballpit animated background -->
    <div class="absolute inset-0 z-0" aria-hidden="true">
      <Ballpit
        :count="60"
        :colors="ballpitColors"
        :ambient-color="ui.isDark ? 0x0d0d0d : 0xfdfcfa"
        :ambient-intensity="0.5"
        :light-intensity="100"
        :min-size="0.5"
        :max-size="1.4"
        :gravity="0.2"
        :friction="0.99"
        :wall-bounce="0.9"
        :max-velocity="0.08"
        :follow-cursor="false"
        :material-params="{ metalness: 0.2, roughness: 0.7, clearcoat: 0.8, clearcoatRoughness: 0.2 }"
        class="h-full w-full opacity-25 dark:opacity-20"
      />
    </div>

    <div class="section-container relative z-10 py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Text content: asymmetric, editorial -->
        <div class="lg:col-span-7 xl:col-span-8">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-vermillion animate-fade-in mb-6">
            {{ t('hero.role') }}
          </p>
          <h1 class="font-serif text-display-xl text-charcoal animate-reveal-up dark:text-cream-100">
            {{ profile.name }}
          </h1>
          <div class="accent-line mt-8 animate-reveal-up" style="animation-delay: 0.1s" />
          <p class="mt-8 max-w-lg text-lg leading-relaxed text-charcoal-400 animate-reveal-up dark:text-charcoal-300" style="animation-delay: 0.15s">
            {{ t('hero.shortBio') }}
          </p>
          <div class="mt-10 flex flex-wrap items-center gap-4 animate-reveal-up" style="animation-delay: 0.25s">
            <router-link to="/projects" class="btn-primary">
              {{ t('hero.viewProjects') }}
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </router-link>
            <a href="/cv.pdf" download class="btn-secondary">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {{ t('hero.downloadCv') }}
            </a>
          </div>
        </div>

        <!-- Photo: offset, editorial framing -->
        <div class="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end animate-fade-in" style="animation-delay: 0.3s">
          <div class="relative">
            <div class="absolute -inset-4 bg-vermillion/10 -rotate-3 dark:bg-vermillion/5" aria-hidden="true" />
            <img
              :src="profile.photo"
              :alt="`Photo of ${profile.name}`"
              class="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading="eager"
            />
            <div class="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-vermillion" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
