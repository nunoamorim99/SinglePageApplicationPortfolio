<script setup>
import { useRoute } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import Lightbox from '@/components/shared/Lightbox.vue'

const route = useRoute()
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
