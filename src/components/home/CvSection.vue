<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import GlassSurface from '@/components/GlassSurface/GlassSurface.vue'
</script>

<template>
  <section id="cv" class="bg-gradient-to-r from-primary-600 to-primary-700 py-16 dark:from-primary-800 dark:to-primary-900">
    <div class="section-container text-center">
      <h2 class="font-display text-3xl font-bold text-white sm:text-4xl">{{ t('cv.title') }}</h2>
      <p class="mt-3 text-lg text-primary-100">{{ t('cv.subtitle') }}</p>
      <GlassSurface
        width="auto"
        height="auto"
        :border-radius="40"
        :brightness="80"
        :opacity="0.9"
        :blur="14"
        :background-opacity="0.05"
        class="mt-6 inline-flex cursor-pointer transition-transform hover:scale-105"
      >
        <a
          href="/cv.pdf"
          download
          class="flex items-center gap-2 px-6 py-2 font-semibold text-white"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          {{ t('cv.button') }}
        </a>
      </GlassSurface>
    </div>
  </section>
</template>
