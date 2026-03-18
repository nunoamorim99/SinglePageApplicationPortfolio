<script setup>
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'

const { t } = useI18n()
</script>

<template>
  <section id="education" class="py-24 lg:py-32">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-4">
          <h2 class="section-title">{{ t('education.title') }}</h2>
          <div class="accent-line mt-6" />
        </div>
        <div class="lg:col-span-8">
          <div class="space-y-0">
            <div
              v-for="(id, index) in profile.educationIds"
              :key="id"
              class="group border-b border-charcoal-100 py-8 first:pt-0 last:border-b-0 dark:border-charcoal-700"
            >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="font-serif text-2xl text-charcoal dark:text-cream-100">{{ t(`education.items.${id}.degree`) }}</h3>
                  <p class="mt-2 text-sm font-bold uppercase tracking-widest text-vermillion">{{ t(`education.items.${id}.institution`) }}</p>
                </div>
                <span class="flex-shrink-0 text-xs font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400 mt-2">{{ profile.educationPeriods[id] }}</span>
              </div>
              <p class="mt-4 text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300">{{ t(`education.items.${id}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
