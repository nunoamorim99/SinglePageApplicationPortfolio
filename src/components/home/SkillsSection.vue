<script setup>
import { useI18n } from 'vue-i18n'
import { topSkills, otherSkillIds, languages } from '@/data/skills'

const { t } = useI18n()
</script>

<template>
  <section id="skills" class="py-24 lg:py-32">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-4">
          <h2 class="section-title">{{ t('skills.title') }}</h2>
          <p class="section-subtitle">{{ t('skills.subtitle') }}</p>
          <div class="accent-line mt-6" />
        </div>

        <div class="lg:col-span-8 space-y-16">
          <!-- Top 5 Skills -->
          <div>
            <h3 class="font-serif text-xl text-charcoal dark:text-cream-100 mb-8">{{ t('skills.topTitle') }}</h3>
            <div class="space-y-6">
              <div v-for="skill in topSkills" :key="skill.id" class="group">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-bold uppercase tracking-widest text-charcoal-500 dark:text-charcoal-300">{{ t(`skills.top.${skill.id}`) }}</span>
                  <span class="text-xs text-charcoal-300 dark:text-charcoal-400">{{ skill.rating }}/5</span>
                </div>
                <div class="h-1 bg-charcoal-100 dark:bg-charcoal-700">
                  <div
                    class="h-full bg-vermillion transition-all duration-700"
                    :style="{ width: (skill.rating / 5 * 100) + '%' }"
                    role="progressbar"
                    :aria-valuenow="skill.rating"
                    aria-valuemin="0"
                    aria-valuemax="5"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Other Skills -->
          <div>
            <h3 class="font-serif text-xl text-charcoal dark:text-cream-100 mb-6">{{ t('skills.otherTitle') }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="id in otherSkillIds" :key="id" class="badge">
                {{ t(`skills.other.${id}`) }}
              </span>
            </div>
          </div>

          <!-- Languages -->
          <div>
            <h3 class="font-serif text-xl text-charcoal dark:text-cream-100 mb-8">{{ t('skills.langTitle') }}</h3>
            <div class="space-y-6">
              <div v-for="lang in languages" :key="lang.id">
                <div class="flex items-baseline justify-between mb-2">
                  <span class="text-sm font-bold uppercase tracking-widest text-charcoal-500 dark:text-charcoal-300">{{ t(`skills.languages.${lang.id}.name`) }}</span>
                  <span class="text-xs text-charcoal-300 dark:text-charcoal-400">{{ t(`skills.languages.${lang.id}.level`) }}</span>
                </div>
                <div class="h-1 bg-charcoal-100 dark:bg-charcoal-700">
                  <div
                    class="h-full bg-sage transition-all duration-700"
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
    </div>
  </section>
</template>
