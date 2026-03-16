<script setup>
import { profile } from '@/data/profile'
</script>

<template>
  <section id="about" class="py-20">
    <div class="section-container">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="section-title">About Me</h2>
        <p class="mt-6 text-lg leading-relaxed text-gray-600">
          {{ profile.bio }}
        </p>
      </div>
    </div>
  </section>
</template>
