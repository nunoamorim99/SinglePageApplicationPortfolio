<script setup>
import { profile } from '@/data/profile'
</script>

<template>
  <section id="cv" class="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
    <div class="section-container text-center">
      <h2 class="font-display text-3xl font-bold text-white sm:text-4xl">Want the full picture?</h2>
      <p class="mt-3 text-lg text-primary-100">Download my CV for a complete overview of my experience and qualifications.</p>
      <a
        href="/cv.pdf"
        download
        class="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
      >
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        Download CV (PDF)
      </a>
    </div>
  </section>
</template>
