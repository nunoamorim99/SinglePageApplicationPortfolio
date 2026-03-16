<script setup>
import { useI18n } from 'vue-i18n'
import HobbyCard from '@/components/personal/HobbyCard.vue'

const { t } = useI18n()

const sections = [
  { id: 'travel', image: 'https://picsum.photos/seed/travel-card/800/500', to: '/personal/travel' },
  { id: 'sports', image: 'https://picsum.photos/seed/sports-card/800/500', to: '/personal/sports' },
  { id: 'photography', image: 'https://picsum.photos/seed/photo-card/800/500', to: '/personal/photography' },
  { id: 'hobbies', image: 'https://picsum.photos/seed/hobbies-card/800/500', to: '/personal/hobbies' },
]
</script>

<template>
  <div class="pt-24 pb-20">
    <div class="section-container">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="section-title">{{ t('personal.title') }}</h1>
        <p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {{ t('personal.intro') }}
        </p>
      </div>
      <div class="mt-16 grid gap-8 sm:grid-cols-2">
        <HobbyCard
          v-for="section in sections"
          :key="section.id"
          :title="t(`personal.sections.${section.id}.title`)"
          :description="t(`personal.sections.${section.id}.description`)"
          :image="section.image"
          :to="section.to"
        />
      </div>
    </div>
  </div>
</template>
