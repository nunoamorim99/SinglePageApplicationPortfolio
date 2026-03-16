<script setup>
import HobbyCard from '@/components/personal/HobbyCard.vue'

const sections = [
  {
    title: 'Travel',
    description: 'Exploring new places, cultures, and cuisines around the world.',
    image: 'https://picsum.photos/seed/travel-card/800/500',
    to: '/personal/travel',
  },
  {
    title: 'Sports',
    description: 'Staying active through running, cycling, and outdoor adventures.',
    image: 'https://picsum.photos/seed/sports-card/800/500',
    to: '/personal/sports',
  },
  {
    title: 'Photography',
    description: 'Capturing moments and perspectives through the lens.',
    image: 'https://picsum.photos/seed/photo-card/800/500',
    to: '/personal/photography',
  },
  {
    title: 'Other Hobbies',
    description: 'Reading, cooking, gaming, and other things that keep life interesting.',
    image: 'https://picsum.photos/seed/hobbies-card/800/500',
    to: '/personal/hobbies',
  },
]
</script>

<template>
  <div class="pt-24 pb-20">
    <div class="section-container">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="section-title">Beyond Work</h1>
        <p class="mt-4 text-lg leading-relaxed text-gray-600">
          There's more to life than product roadmaps and sprint planning. Here's a glimpse into the things
          that inspire me, keep me energized, and make me who I am outside of work.
        </p>
      </div>
      <div class="mt-16 grid gap-8 sm:grid-cols-2">
        <HobbyCard
          v-for="section in sections"
          :key="section.title"
          :title="section.title"
          :description="section.description"
          :image="section.image"
          :to="section.to"
        />
      </div>
    </div>
  </div>
</template>
