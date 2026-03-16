<script setup>
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'

const { t } = useI18n()
</script>

<template>
  <section id="education" class="py-20">
    <div class="section-container">
      <div class="text-center">
        <h2 class="section-title">{{ t('education.title') }}</h2>
      </div>
      <div class="mx-auto mt-12 max-w-2xl">
        <div
          v-for="id in profile.educationIds"
          :key="id"
          class="card flex items-start gap-5"
        >
          <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/30">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </div>
          <div>
            <h3 class="font-display text-lg font-semibold text-gray-900 dark:text-white">{{ t(`education.items.${id}.degree`) }}</h3>
            <p class="mt-1 font-medium text-primary-600 dark:text-primary-400">{{ t(`education.items.${id}.institution`) }}</p>
            <p class="mt-1 text-sm text-gray-400">{{ profile.educationPeriods[id] }}</p>
            <p class="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{{ t(`education.items.${id}.description`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
