import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isMobileMenuOpen = ref(false)
  const lightbox = ref({ open: false, images: [], index: 0 })

  // Dark mode: check localStorage first, then browser preference
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = ref(saved ? saved === 'dark' : prefersDark)

  // Watch isDark and sync to DOM + localStorage
  watch(isDark, (dark) => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, { immediate: true })

  function toggleDarkMode() {
    isDark.value = !isDark.value
  }

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false
  }

  function openLightbox(images, index = 0) {
    lightbox.value = { open: true, images, index }
  }

  function closeLightbox() {
    lightbox.value = { open: false, images: [], index: 0 }
  }

  function setLightboxIndex(index) {
    lightbox.value.index = index
  }

  return {
    isMobileMenuOpen,
    lightbox,
    isDark,
    toggleDarkMode,
    toggleMobileMenu,
    closeMobileMenu,
    openLightbox,
    closeLightbox,
    setLightboxIndex,
  }
})
