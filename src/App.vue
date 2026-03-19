<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import Lightbox from '@/components/shared/Lightbox.vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
let lenis

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})

onUnmounted(() => {
  lenis?.destroy()
})
</script>

<template>
  <div class="flex min-h-screen flex-col relative">
    <!-- Grain texture overlay -->
    <div class="grain-overlay" aria-hidden="true" />

    <Navbar />
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
    </main>
    <Footer />
    <Lightbox />
  </div>
</template>
