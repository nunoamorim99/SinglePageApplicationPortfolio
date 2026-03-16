<script setup>
import { ref } from 'vue'
import { visitedCities } from '@/data/travel'
import TravelMap from '@/components/personal/TravelMap.vue'
import PhotoGallery from '@/components/shared/PhotoGallery.vue'

const selectedCity = ref(null)

function onMarkerClick(city) {
  selectedCity.value = city
}

function closePanel() {
  selectedCity.value = null
}
</script>

<template>
  <div class="pt-24 pb-20">
    <div class="section-container">
      <!-- Back link -->
      <router-link
        to="/personal"
        class="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-primary-600"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Personal
      </router-link>

      <div class="text-center">
        <h1 class="section-title">Travel</h1>
        <p class="section-subtitle">Places I've been lucky enough to explore</p>
      </div>

      <!-- Map -->
      <div class="relative mt-12">
        <TravelMap :cities="visitedCities" @marker-click="onMarkerClick" />

        <!-- Side panel -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-x-4"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 translate-x-4"
        >
          <div
            v-if="selectedCity"
            class="absolute right-4 top-4 z-[1000] w-80 overflow-hidden rounded-2xl bg-white shadow-xl"
          >
            <div class="relative">
              <img
                :src="selectedCity.photos[0]"
                :alt="selectedCity.city"
                class="aspect-video w-full object-cover"
              />
              <button
                class="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 shadow transition-colors hover:bg-white"
                aria-label="Close panel"
                @click="closePanel"
              >
                <svg class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="p-4">
              <h3 class="font-display text-lg font-semibold text-gray-900">{{ selectedCity.city }}</h3>
              <p class="text-sm text-gray-400">{{ selectedCity.country }} · {{ selectedCity.year }}</p>
              <p class="mt-2 text-sm leading-relaxed text-gray-600">{{ selectedCity.description }}</p>
              <div v-if="selectedCity.photos.length > 1" class="mt-3 grid grid-cols-3 gap-1.5">
                <img
                  v-for="(photo, i) in selectedCity.photos.slice(1)"
                  :key="i"
                  :src="photo"
                  :alt="`${selectedCity.city} photo ${i + 2}`"
                  class="aspect-square rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- City list -->
      <div class="mt-16">
        <h2 class="font-display text-2xl font-bold text-gray-900">Visited Cities</h2>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <button
            v-for="city in visitedCities"
            :key="city.id"
            class="card group flex items-center gap-4 text-left"
            @click="onMarkerClick(city)"
          >
            <img
              :src="city.photos[0]"
              :alt="city.city"
              class="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
              loading="lazy"
            />
            <div>
              <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{{ city.city }}</h3>
              <p class="text-sm text-gray-400">{{ city.country }} · {{ city.year }}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
