<script setup>
import { useI18n } from 'vue-i18n'
import { experience } from '@/data/experience'

const { t, te } = useI18n()
</script>

<template>
  <section id="experience" class="bg-gray-50/50 py-20 dark:bg-neutral-900/50">
    <div class="section-container">
      <div class="text-center">
        <h2 class="section-title">{{ t('experience.title') }}</h2>
        <p class="section-subtitle">{{ t('experience.subtitle') }}</p>
      </div>

      <div class="mx-auto mt-12 max-w-3xl space-y-6">
        <div v-for="company in experience" :key="company.id" class="card overflow-hidden p-0">
          <!-- Company header -->
          <div class="flex items-center gap-4 border-b border-gray-100 px-6 py-4 dark:border-neutral-800">
            <img
              :src="company.logo"
              :alt="t(`experience.companies.${company.id}.name`)"
              class="h-11 w-11 flex-shrink-0 rounded-xl object-cover"
            />
            <div>
              <h3 class="font-display text-lg font-semibold text-gray-900 dark:text-white">
                {{ t(`experience.companies.${company.id}.name`) }}
              </h3>
              <p class="text-sm text-gray-400">
                {{ t(`experience.companies.${company.id}.location`) }}
              </p>
            </div>
          </div>

          <!-- Positions -->
          <div class="px-6 py-5">
            <div
              class="relative"
              :class="company.positions.length > 1 ? 'border-l-2 border-primary-100 pl-7 dark:border-primary-800' : ''"
            >
              <div
                v-for="(pos, i) in company.positions"
                :key="pos.id"
                class="relative"
                :class="i < company.positions.length - 1 ? 'mb-7 pb-7 border-b border-gray-50 dark:border-neutral-800/50' : ''"
              >
                <!-- Timeline dot -->
                <div
                  v-if="company.positions.length > 1"
                  class="absolute -left-[calc(1.75rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-primary-500 bg-white dark:bg-neutral-900"
                />

                <h4 class="font-display text-base font-semibold text-gray-900 dark:text-white">
                  {{ t(`experience.positions.${pos.id}.title`) }}
                </h4>
                <div class="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  <span class="font-medium text-primary-600 dark:text-primary-400">
                    {{ t(`experience.positions.${pos.id}.type`) }}
                  </span>
                  <span class="text-gray-300 dark:text-neutral-600">·</span>
                  <span class="text-gray-400">{{ pos.period }}</span>
                </div>

                <p
                  v-if="te(`experience.positions.${pos.id}.description`)"
                  class="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400"
                >
                  {{ t(`experience.positions.${pos.id}.description`) }}
                </p>

                <div v-if="pos.skills && pos.skills.length" class="mt-3 flex flex-wrap gap-1.5">
                  <span v-for="skill in pos.skills" :key="skill" class="badge text-[11px]">
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
