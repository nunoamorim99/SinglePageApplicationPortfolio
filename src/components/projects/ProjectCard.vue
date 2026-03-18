<script setup>
import { useI18n } from 'vue-i18n'
import { useUiStore } from '@/stores/ui'

const { t } = useI18n()

const props = defineProps({
  project: { type: Object, required: true },
  reversed: { type: Boolean, default: false },
})

const ui = useUiStore()

function openGallery(index) {
  ui.openLightbox(props.project.images, index)
}
</script>

<template>
  <article class="border border-charcoal-100 bg-white overflow-hidden transition-all duration-300 hover:border-charcoal-300 dark:border-charcoal-700 dark:bg-charcoal-800 dark:hover:border-charcoal-500">
    <div class="flex flex-col lg:flex-row" :class="reversed ? 'lg:flex-row-reverse' : ''">
      <div class="relative lg:w-1/2">
        <div class="grid grid-cols-2 gap-px bg-charcoal-100 dark:bg-charcoal-700">
          <button
            v-for="(img, i) in project.images.slice(0, 4)"
            :key="i"
            class="group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-vermillion"
            :class="project.images.length === 1 ? 'col-span-2' : (i === 0 && project.images.length === 3 ? 'col-span-2' : '')"
            @click="openGallery(i)"
          >
            <img
              :src="img"
              :alt="`${t(`projects.items.${project.id}.title`)} ${i + 1}`"
              class="aspect-video w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-vermillion/0 transition-colors group-hover:bg-vermillion/10" />
          </button>
        </div>
      </div>
      <div class="flex flex-1 flex-col justify-center p-8 lg:p-12">
        <div class="badge mb-5 self-start">{{ t(`projects.items.${project.id}.role`) }}</div>
        <h3 class="font-serif text-display-sm text-charcoal dark:text-cream-100">{{ t(`projects.items.${project.id}.title`) }}</h3>
        <p class="mt-4 leading-relaxed text-charcoal-400 dark:text-charcoal-300">{{ t(`projects.items.${project.id}.description`) }}</p>
        <div class="mt-8">
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-400">{{ t('projects.toolsLabel') }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tool in project.tools"
              :key="tool"
              class="badge"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
