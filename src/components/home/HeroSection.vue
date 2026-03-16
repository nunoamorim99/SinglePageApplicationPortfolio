<script setup>
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'

const { t } = useI18n()
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 pt-24 pb-16 sm:pt-32 sm:pb-24 dark:from-neutral-950 dark:via-neutral-950 dark:to-primary-950/20">
    <div class="section-container">
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
            <router-link to="/projects" class="btn-primary">
              {{ t('hero.viewProjects') }}
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </router-link>
            <a href="/cv.pdf" download class="btn-secondary">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {{ t('hero.downloadCv') }}
            </a>
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
    <div class="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl dark:bg-primary-900/20" aria-hidden="true" />
    <div class="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary-50/60 blur-3xl dark:bg-primary-900/10" aria-hidden="true" />
  </section>
</template>
