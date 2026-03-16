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
  <article class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
    <div class="flex flex-col lg:flex-row" :class="reversed ? 'lg:flex-row-reverse' : ''">
      <div class="relative lg:w-1/2">
        <div class="grid grid-cols-2 gap-1">
          <button
            v-for="(img, i) in project.images.slice(0, 4)"
            :key="i"
            class="group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            :class="project.images.length === 1 ? 'col-span-2' : (i === 0 && project.images.length === 3 ? 'col-span-2' : '')"
            @click="openGallery(i)"
          >
            <img
              :src="img"
              :alt="`${t(`projects.items.${project.id}.title`)} ${i + 1}`"
              class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
          </button>
        </div>
      </div>
      <div class="flex flex-1 flex-col justify-center p-8 lg:p-10">
        <div class="badge mb-4 self-start">{{ t(`projects.items.${project.id}.role`) }}</div>
        <h3 class="font-display text-2xl font-bold text-gray-900 dark:text-white">{{ t(`projects.items.${project.id}.title`) }}</h3>
        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">{{ t(`projects.items.${project.id}.description`) }}</p>
        <div class="mt-6">
          <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">{{ t('projects.toolsLabel') }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tool in project.tools"
              :key="tool"
              class="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-neutral-800 dark:text-gray-300"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
