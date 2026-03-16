<script setup>
import { useI18n } from 'vue-i18n'
import { hobbies } from '@/data/hobbies'

const { t } = useI18n()
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
        <h1 class="section-title">{{ t('hobbies.title') }}</h1>
        <p class="section-subtitle">{{ t('hobbies.subtitle') }}</p>
      </div>

      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="hobby in hobbies" :key="hobby.id" class="card group overflow-hidden p-0">
          <div class="relative overflow-hidden">
            <img
              :src="hobby.image"
              :alt="t(`hobbies.items.${hobby.id}.title`)"
              class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <h3 class="font-display text-xl font-semibold text-gray-900 dark:text-white">{{ t(`hobbies.items.${hobby.id}.title`) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{{ t(`hobbies.items.${hobby.id}.description`) }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
