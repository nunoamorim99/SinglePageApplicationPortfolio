<script setup>
import { useI18n } from 'vue-i18n'
import PhotoGallery from '@/components/shared/PhotoGallery.vue'

const { t } = useI18n()

const photos = [
  'https://picsum.photos/seed/puzzle-1/800/600',
  'https://picsum.photos/seed/puzzle-2/800/600',
  'https://picsum.photos/seed/puzzle-3/800/600',
  'https://picsum.photos/seed/puzzle-4/800/600',
  'https://picsum.photos/seed/puzzle-5/800/600',
  'https://picsum.photos/seed/puzzle-6/800/600',
]
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
        <h1 class="section-title">{{ t('puzzle.title') }}</h1>
        <p class="section-subtitle">{{ t('puzzle.subtitle') }}</p>
        <div class="accent-line mt-6" />
      </div>

      <PhotoGallery :images="photos" :columns="3" />
    </div>
  </div>
</template>
