<script setup>
import { useUiStore } from '@/stores/ui'

const props = defineProps({
  images: { type: Array, required: true },
  columns: { type: Number, default: 3 },
})

const ui = useUiStore()

function openImage(index) {
  const srcs = props.images.map(img => typeof img === 'string' ? img : img.src)
  ui.openLightbox(srcs, index)
}
</script>

<template>
  <div
    class="grid gap-4"
    :class="{
      'grid-cols-1 sm:grid-cols-2': columns === 2,
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': columns === 3,
      'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4': columns === 4,
    }"
  >
    <button
      v-for="(image, index) in images"
      :key="index"
      class="group relative overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      :aria-label="`View image ${index + 1} of ${images.length}`"
      @click="openImage(index)"
    >
      <img
        :src="typeof image === 'string' ? image : image.src"
        :alt="typeof image === 'string' ? `Photo ${index + 1}` : (image.alt || `Photo ${index + 1}`)"
        class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
      <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span class="rounded-full bg-white/90 p-2.5 shadow-lg">
          <svg class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
          </svg>
        </span>
      </div>
    </button>
  </div>
</template>
