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
  <div class="pt-24 pb-20">
    <div class="section-container">
      <router-link
        to="/personal"
        class="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-primary-600"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        {{ t('personal.backToPersonal') }}
      </router-link>

      <div class="text-center">
        <h1 class="section-title">{{ t('sports.title') }}</h1>
        <p class="section-subtitle">{{ t('sports.subtitle') }}</p>
      </div>

      <div class="mt-16 grid gap-8 sm:grid-cols-2">
        <div v-for="sport in sports" :key="sport.id" class="card">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/30">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" v-html="sportIcons[sport.icon] || sportIcons.running" />
            </div>
            <h3 class="font-display text-xl font-semibold text-gray-900 dark:text-white">{{ t(`sports.items.${sport.id}.name`) }}</h3>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{{ t(`sports.items.${sport.id}.description`) }}</p>
          <div class="mt-4">
            <PhotoGallery :images="sport.photos" :columns="2" />
          </div>
        </div>
      </div>

      <div class="mt-20">
        <h2 class="text-center font-display text-2xl font-bold text-gray-900 dark:text-white">{{ t('sports.achievementsTitle') }}</h2>
        <div class="mx-auto mt-10 max-w-2xl">
          <div class="relative border-l-2 border-primary-100 pl-8 dark:border-primary-800">
            <div
              v-for="achievement in achievements"
              :key="achievement.id"
              class="relative mb-10 last:mb-0"
            >
              <div class="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-primary-500 bg-white dark:bg-neutral-950" />
              <span class="text-xs font-semibold uppercase tracking-wider text-primary-600">{{ achievement.year }}</span>
              <h3 class="mt-1 font-display text-lg font-semibold text-gray-900 dark:text-white">{{ t(`sports.achievements.${achievement.id}.title`) }}</h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ t(`sports.achievements.${achievement.id}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
