<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-24 lg:py-32">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-4">
          <h2 class="section-title">{{ t('about.title') }}</h2>
          <div class="accent-line mt-6" />
        </div>
        <div class="lg:col-span-8">
          <p class="text-xl leading-relaxed text-charcoal-500 dark:text-charcoal-300 font-serif italic">
            {{ t('about.bio') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
