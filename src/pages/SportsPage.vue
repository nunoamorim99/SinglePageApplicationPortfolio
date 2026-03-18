<script setup>
import { useI18n } from 'vue-i18n'
import { sports, achievements } from '@/data/sports'
import PhotoGallery from '@/components/shared/PhotoGallery.vue'

const { t } = useI18n()

const sportIcons = {
  running: `<path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />`,
  cycling: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />`,
}
</script>

<template>
  <div class="pt-28 pb-24">
    <div class="section-container">
      <router-link to="/personal" class="back-link">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        {{ t('personal.backToPersonal') }}
      </router-link>

      <div class="mb-16">
        <h1 class="section-title">{{ t('sports.title') }}</h1>
        <p class="section-subtitle">{{ t('sports.subtitle') }}</p>
        <div class="accent-line mt-6" />
      </div>

      <div class="grid gap-8 sm:grid-cols-2">
        <div v-for="sport in sports" :key="sport.id" class="card">
          <div class="flex items-center gap-4 mb-4">
            <svg class="h-6 w-6 text-vermillion flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" v-html="sportIcons[sport.icon] || sportIcons.running" />
            <h3 class="font-serif text-2xl text-charcoal dark:text-cream-100">{{ t(`sports.items.${sport.id}.name`) }}</h3>
          </div>
          <p class="text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300">{{ t(`sports.items.${sport.id}.description`) }}</p>
          <div class="mt-6">
            <PhotoGallery :images="sport.photos" :columns="2" />
          </div>
        </div>
      </div>

      <div class="mt-24">
        <h2 class="font-serif text-display-sm text-charcoal dark:text-cream-100 text-center">{{ t('sports.achievementsTitle') }}</h2>
        <div class="accent-line mt-6 mx-auto" />
        <div class="mx-auto mt-12 max-w-2xl">
          <div class="relative border-l-2 border-vermillion/30 pl-8">
            <div
              v-for="achievement in achievements"
              :key="achievement.id"
              class="relative mb-12 last:mb-0"
            >
              <div class="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 bg-vermillion" />
              <span class="text-xs font-bold uppercase tracking-[0.2em] text-vermillion">{{ achievement.year }}</span>
              <h3 class="mt-2 font-serif text-xl text-charcoal dark:text-cream-100">{{ t(`sports.achievements.${achievement.id}.title`) }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300">{{ t(`sports.achievements.${achievement.id}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
