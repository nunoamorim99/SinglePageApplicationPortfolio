<script setup>
import { useI18n } from 'vue-i18n'
import { experience } from '@/data/experience'

const { t, te } = useI18n()
</script>

<template>
  <section id="experience" class="py-24 lg:py-32 bg-cream-200/50 dark:bg-charcoal-800/50">
    <div class="section-container">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
        <div>
          <h2 class="section-title">{{ t('experience.title') }}</h2>
          <p class="section-subtitle">{{ t('experience.subtitle') }}</p>
        </div>
        <div class="accent-line flex-shrink-0" />
      </div>

      <div class="space-y-0">
        <div v-for="company in experience" :key="company.id" class="border-b border-charcoal-100 dark:border-charcoal-700 last:border-b-0">
          <!-- Company header -->
          <div class="flex items-center gap-5 py-6">
            <img
              :src="company.logo"
              :alt="t(`experience.companies.${company.id}.name`)"
              class="h-14 w-14 flex-shrink-0 object-cover grayscale"
            />
            <div>
              <h3 class="font-serif text-2xl text-charcoal dark:text-cream-100">
                {{ t(`experience.companies.${company.id}.name`) }}
              </h3>
              <p class="text-xs font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400">
                {{ t(`experience.companies.${company.id}.location`) }}
              </p>
            </div>
          </div>

          <!-- Positions -->
          <div class="pb-8 pl-4 sm:pl-20">
            <div
              class="relative"
              :class="company.positions.length > 1 ? 'border-l-2 border-vermillion/30 pl-8' : ''"
            >
              <div
                v-for="(pos, i) in company.positions"
                :key="pos.id"
                class="relative"
                :class="i < company.positions.length - 1 ? 'mb-8 pb-8 border-b border-charcoal-50 dark:border-charcoal-700/50' : ''"
              >
                <div
                  v-if="company.positions.length > 1"
                  class="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 bg-vermillion"
                />

                <h4 class="font-serif text-lg text-charcoal dark:text-cream-100">
                  {{ t(`experience.positions.${pos.id}.title`) }}
                </h4>
                <div class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <span class="font-bold uppercase tracking-widest text-vermillion">
                    {{ t(`experience.positions.${pos.id}.type`) }}
                  </span>
                  <span class="text-charcoal-200 dark:text-charcoal-600">/</span>
                  <span class="font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400">{{ pos.period }}</span>
                </div>

                <p
                  v-if="te(`experience.positions.${pos.id}.description`)"
                  class="mt-3 text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300"
                >
                  {{ t(`experience.positions.${pos.id}.description`) }}
                </p>

                <div v-if="pos.skills && pos.skills.length" class="mt-4 flex flex-wrap gap-2">
                  <span v-for="skill in pos.skills" :key="skill" class="badge">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
