<script setup>
import { onMounted, onUnmounted, computed } from 'vue'
import { useUiStore } from '@/stores/ui'

const ui = useUiStore()

const currentImage = computed(() =>
  ui.lightbox.images[ui.lightbox.index] || ''
)

const hasPrev = computed(() => ui.lightbox.index > 0)
const hasNext = computed(() => ui.lightbox.index < ui.lightbox.images.length - 1)

function prev() {
  if (hasPrev.value) ui.setLightboxIndex(ui.lightbox.index - 1)
}

function next() {
  if (hasNext.value) ui.setLightboxIndex(ui.lightbox.index + 1)
}

function onKeydown(e) {
  if (!ui.lightbox.open) return
  if (e.key === 'Escape') ui.closeLightbox()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="ui.lightbox.open"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        @click.self="ui.closeLightbox()"
      >
        <!-- Close button -->
        <button
          class="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          aria-label="Close lightbox"
          @click="ui.closeLightbox()"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Prev button -->
        <button
          v-if="hasPrev"
          class="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          aria-label="Previous image"
          @click="prev"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <!-- Image -->
        <img
          :src="currentImage"
          alt=""
          class="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          loading="lazy"
        />

        <!-- Next button -->
        <button
          v-if="hasNext"
          class="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          aria-label="Next image"
          @click="next"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <!-- Counter -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
          {{ ui.lightbox.index + 1 }} / {{ ui.lightbox.images.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
