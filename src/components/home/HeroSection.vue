<script setup>
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'
import { useUiStore } from '@/stores/ui'
import { computed } from 'vue'
import Ballpit from '@/components/Ballpit/Ballpit.vue'
import GlassSurface from '@/components/GlassSurface/GlassSurface.vue'

const { t } = useI18n()
const ui = useUiStore()

const ballpitColors = computed(() =>
  ui.isDark
    ? [0x3b82f6, 0x6366f1, 0x8b5cf6]
    : [0x3b82f6, 0x60a5fa, 0x93c5fd]
)
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 pt-24 pb-16 sm:pt-32 sm:pb-24 dark:from-neutral-950 dark:via-neutral-950 dark:to-primary-950/20">
    <!-- Ballpit animated background -->
    <div class="absolute inset-0 z-0" aria-hidden="true">
      <Ballpit
        :count="80"
        :colors="ballpitColors"
        :ambient-color="ui.isDark ? 0x111827 : 0xffffff"
        :ambient-intensity="0.5"
        :light-intensity="100"
        :min-size="0.4"
        :max-size="1.2"
        :gravity="0.3"
        :friction="0.99"
        :wall-bounce="0.9"
        :max-velocity="0.1"
        :follow-cursor="false"
        :material-params="{ metalness: 0.3, roughness: 0.6, clearcoat: 1, clearcoatRoughness: 0.1 }"
        class="h-full w-full opacity-40 dark:opacity-30"
      />
    </div>

    <div class="section-container relative z-10">
      <div class="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
        <div class="flex-1 text-center lg:text-left">
          <p class="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-600 animate-fade-in">
            {{ t('hero.role') }}
          </p>
          <h1 class="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-slide-up dark:text-white">
            {{ profile.name }}
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 animate-slide-up dark:text-gray-400" style="animation-delay: 0.1s">
            {{ t('hero.shortBio') }}
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start animate-slide-up" style="animation-delay: 0.2s">
            <GlassSurface
              width="auto"
              height="auto"
              :border-radius="40"
              :brightness="80"
              :opacity="0.9"
              :blur="14"
              :background-opacity="0.05"
              class="inline-flex cursor-pointer transition-transform hover:scale-105"
            >
              <router-link to="/projects" class="flex items-center gap-2 px-4 py-2 font-semibold text-primary-700 dark:text-primary-300">
                {{ t('hero.viewProjects') }}
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </router-link>
            </GlassSurface>
            <GlassSurface
              width="auto"
              height="auto"
              :border-radius="40"
              :brightness="80"
              :opacity="0.9"
              :blur="14"
              :background-opacity="0.05"
              class="inline-flex cursor-pointer transition-transform hover:scale-105"
            >
              <a href="/cv.pdf" download class="flex items-center gap-2 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                {{ t('hero.downloadCv') }}
              </a>
            </GlassSurface>
          </div>
        </div>
        <div class="flex-shrink-0 animate-fade-in">
          <div class="relative">
            <div class="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 blur-2xl" />
            <img
              :src="profile.photo"
              :alt="`Photo of ${profile.name}`"
              class="relative h-56 w-56 rounded-full border-4 border-white object-cover shadow-xl sm:h-72 sm:w-72 lg:h-80 lg:w-80 dark:border-neutral-800"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
