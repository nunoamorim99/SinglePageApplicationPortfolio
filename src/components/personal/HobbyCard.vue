<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  to: { type: String, required: true },
})

const { t } = useI18n()
</script>

<template>
  <router-link :to="to" class="card group flex flex-col overflow-hidden p-0">
    <div class="relative overflow-hidden">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div v-else class="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20">
        <svg class="h-12 w-12 text-primary-300" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
      </div>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="font-display text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors dark:text-white">{{ title }}</h3>
      <p v-if="description" class="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{{ description }}</p>
      <div class="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-primary-600">
        {{ t('personal.explore') }}
        <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  </router-link>
</template>
