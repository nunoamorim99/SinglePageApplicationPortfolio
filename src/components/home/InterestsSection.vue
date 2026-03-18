<script setup>
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'

const { t } = useI18n()

const iconMap = {
  strategy: `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />`,
  transform: `<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />`,
  agile: `<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />`,
  data: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />`,
}
</script>

<template>
  <section id="interests" class="py-24 lg:py-32 bg-charcoal text-cream-100 dark:bg-charcoal-800">
    <div class="section-container">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
        <div>
          <h2 class="font-serif text-display-md text-cream-100">{{ t('interests.title') }}</h2>
          <p class="mt-3 text-charcoal-300 max-w-xl">{{ t('interests.subtitle') }}</p>
        </div>
        <div class="accent-line flex-shrink-0" />
      </div>

      <div class="grid gap-px sm:grid-cols-2 lg:grid-cols-4 border border-charcoal-600">
        <div
          v-for="(id, index) in profile.interestIds"
          :key="id"
          class="group p-8 border-charcoal-600 transition-colors duration-300 hover:bg-vermillion/10"
          :class="index < profile.interestIds.length - 1 ? 'border-b lg:border-b-0 lg:border-r' : ''"
        >
          <svg class="h-8 w-8 text-vermillion mb-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" v-html="iconMap[id]" />
          <h3 class="font-serif text-xl text-cream-100">{{ t(`interests.items.${id}.title`) }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-charcoal-300">{{ t(`interests.items.${id}.description`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
