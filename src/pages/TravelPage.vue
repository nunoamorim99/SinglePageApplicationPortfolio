<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { visitedCities } from '@/data/travel'
import TravelMap from '@/components/personal/TravelMap.vue'

const { t } = useI18n()

const selectedCityData = ref(null)

const translatedCities = computed(() =>
  visitedCities.map(city => ({
    ...city,
    city: t(`travel.cities.${city.id}.city`),
    country: t(`travel.cities.${city.id}.country`),
    description: t(`travel.cities.${city.id}.description`),
  }))
)

const selectedCity = computed(() => {
  if (!selectedCityData.value) return null
  const raw = selectedCityData.value
  return {
    ...raw,
    city: t(`travel.cities.${raw.id}.city`),
    country: t(`travel.cities.${raw.id}.country`),
    description: t(`travel.cities.${raw.id}.description`),
  }
})

function onMarkerClick(city) {
  selectedCityData.value = visitedCities.find(c => c.id === city.id) || city
}

function closePanel() {
  selectedCityData.value = null
}
</script>

<template>
  <div class="pt-24 pb-20">
    <div class="section-container">
      <router-link
        to="/personal"
        class="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-primary-600"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        {{ t('personal.backToPersonal') }}
      </router-link>

      <div class="text-center">
        <h1 class="section-title">{{ t('travel.title') }}</h1>
        <p class="section-subtitle">{{ t('travel.subtitle') }}</p>
      </div>

      <div class="relative mt-12">
        <TravelMap :cities="translatedCities" @marker-click="onMarkerClick" />

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
            class="absolute right-4 top-4 z-[1000] w-80 overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-neutral-900"
          >
            <div class="relative">
              <img :src="selectedCity.photos[0]" :alt="selectedCity.city" class="aspect-video w-full object-cover" />
              <button
                class="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 shadow transition-colors hover:bg-white"
                aria-label="Close"
                @click="closePanel"
              >
                <svg class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="p-4">
              <h3 class="font-display text-lg font-semibold text-gray-900 dark:text-white">{{ selectedCity.city }}</h3>
              <p class="text-sm text-gray-400">{{ selectedCity.country }} · {{ selectedCity.year }}</p>
              <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{{ selectedCity.description }}</p>
              <div v-if="selectedCity.photos.length > 1" class="mt-3 grid grid-cols-3 gap-1.5">
                <img
                  v-for="(photo, i) in selectedCity.photos.slice(1)"
                  :key="i"
                  :src="photo"
                  :alt="`${selectedCity.city} ${i + 2}`"
                  class="aspect-square rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <div class="mt-16">
        <h2 class="font-display text-2xl font-bold text-gray-900 dark:text-white">{{ t('travel.visitedCities') }}</h2>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <button
            v-for="city in translatedCities"
            :key="city.id"
            class="card group flex items-center gap-4 text-left"
            @click="onMarkerClick(city)"
          >
            <img :src="city.photos[0]" :alt="city.city" class="h-16 w-16 flex-shrink-0 rounded-xl object-cover" loading="lazy" />
            <div>
              <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors dark:text-white">{{ city.city }}</h3>
              <p class="text-sm text-gray-400">{{ city.country }} · {{ city.year }}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
