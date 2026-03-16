<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-20">
    <div class="section-container">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="section-title">{{ t('about.title') }}</h2>
        <p class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {{ t('about.bio') }}
        </p>
      </div>
    </div>
  </section>
</template>
