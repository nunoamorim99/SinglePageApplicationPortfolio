<script setup>
import { useI18n } from 'vue-i18n'
import { topSkills, otherSkillIds, languages } from '@/data/skills'

const { t } = useI18n()
</script>

<template>
  <section id="skills" class="bg-gray-50/50 py-20 dark:bg-neutral-900/50">
    <div class="section-container">
      <div class="text-center">
        <h2 class="section-title">{{ t('skills.title') }}</h2>
        <p class="section-subtitle">{{ t('skills.subtitle') }}</p>
      </div>

      <div class="mx-auto mt-12 max-w-4xl">
        <!-- Top 5 Skills -->
        <div>
          <h3 class="font-display text-xl font-semibold text-gray-900 dark:text-white">{{ t('skills.topTitle') }}</h3>
          <div class="mt-6 space-y-5">
            <div v-for="skill in topSkills" :key="skill.id" class="flex items-center gap-4">
              <span class="w-48 text-sm font-medium text-gray-700 sm:w-56 dark:text-gray-300">{{ t(`skills.top.${skill.id}`) }}</span>
              <div class="flex gap-1.5" :aria-label="`${t(`skills.top.${skill.id}`)}: ${skill.rating} / 5`">
                <span
                  v-for="n in 5"
                  :key="n"
                  class="h-3 w-3 rounded-full transition-colors"
                  :class="n <= skill.rating ? 'bg-primary-500' : 'bg-gray-200 dark:bg-neutral-700'"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Other Skills -->
        <div class="mt-12">
          <h3 class="font-display text-xl font-semibold text-gray-900 dark:text-white">{{ t('skills.otherTitle') }}</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="id in otherSkillIds" :key="id" class="badge">
              {{ t(`skills.other.${id}`) }}
            </span>
          </div>
        </div>

        <!-- Languages -->
        <div class="mt-12">
          <h3 class="font-display text-xl font-semibold text-gray-900 dark:text-white">{{ t('skills.langTitle') }}</h3>
          <div class="mt-6 space-y-4">
            <div v-for="lang in languages" :key="lang.id">
              <div class="mb-1.5 flex items-baseline justify-between">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t(`skills.languages.${lang.id}.name`) }}</span>
                <span class="text-xs text-gray-400">{{ t(`skills.languages.${lang.id}.level`) }}</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700">
                <div
                  class="h-full rounded-full bg-primary-500 transition-all duration-700"
                  :style="{ width: lang.percentage + '%' }"
                  role="progressbar"
                  :aria-valuenow="lang.percentage"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
