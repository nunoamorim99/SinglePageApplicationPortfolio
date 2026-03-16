<script setup>
import { topSkills, otherSkills, languages } from '@/data/skills'
</script>

<template>
  <section id="skills" class="bg-gray-50/50 py-20">
    <div class="section-container">
      <div class="text-center">
        <h2 class="section-title">Skills & Languages</h2>
        <p class="section-subtitle">Core competencies and communication abilities</p>
      </div>

      <div class="mx-auto mt-12 max-w-4xl">
        <!-- Top 5 Skills -->
        <div>
          <h3 class="font-display text-xl font-semibold text-gray-900">Top Skills</h3>
          <div class="mt-6 space-y-5">
            <div v-for="skill in topSkills" :key="skill.name" class="flex items-center gap-4">
              <span class="w-48 text-sm font-medium text-gray-700 sm:w-56">{{ skill.name }}</span>
              <div class="flex gap-1.5" :aria-label="`${skill.name}: ${skill.rating} out of 5`">
                <span
                  v-for="n in 5"
                  :key="n"
                  class="h-3 w-3 rounded-full transition-colors"
                  :class="n <= skill.rating ? 'bg-primary-500' : 'bg-gray-200'"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Other Skills -->
        <div class="mt-12">
          <h3 class="font-display text-xl font-semibold text-gray-900">Other Skills</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="skill in otherSkills" :key="skill" class="badge">
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Languages -->
        <div class="mt-12">
          <h3 class="font-display text-xl font-semibold text-gray-900">Languages</h3>
          <div class="mt-6 space-y-4">
            <div v-for="lang in languages" :key="lang.name">
              <div class="mb-1.5 flex items-baseline justify-between">
                <span class="text-sm font-medium text-gray-700">{{ lang.name }}</span>
                <span class="text-xs text-gray-400">{{ lang.level }}</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  class="h-full rounded-full bg-primary-500 transition-all duration-700"
                  :style="{ width: lang.percentage + '%' }"
                  :aria-label="`${lang.name}: ${lang.level}`"
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
