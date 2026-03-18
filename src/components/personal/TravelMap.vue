<script setup>
import { onMounted, ref, shallowRef } from 'vue'

const props = defineProps({
  cities: { type: Array, required: true },
})

const emit = defineEmits(['markerClick'])

const mapContainer = ref(null)
const map = shallowRef(null)

onMounted(async () => {
  const L = await import('leaflet')
  await import('leaflet/dist/leaflet.css')

  map.value = L.map(mapContainer.value, {
    scrollWheelZoom: false,
  }).setView([45, 10], 4)

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 18,
  }).addTo(map.value)

  const icon = L.divIcon({
    className: 'custom-marker',
    html: `<div style="width:12px;height:12px;background:#ff4d00;border:2px solid #1a1a1a;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  })

  props.cities.forEach((city) => {
    const marker = L.marker(city.coordinates, { icon })
      .addTo(map.value)
      .bindTooltip(city.city, {
        permanent: false,
        direction: 'top',
        offset: [0, -10],
      })
    marker.on('click', () => emit('markerClick', city))
  })
})
</script>

<template>
  <div
    ref="mapContainer"
    class="h-[400px] w-full border border-charcoal-100 dark:border-charcoal-700 sm:h-[500px]"
    role="img"
    aria-label="Interactive map showing visited cities"
  />
</template>
