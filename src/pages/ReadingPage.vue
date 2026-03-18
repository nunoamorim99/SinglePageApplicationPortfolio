<script setup>
import { useI18n } from "vue-i18n";
import CircularGallery from "@/components/CircularGallery/CircularGallery.vue";

const { t } = useI18n();

const books = [
  {
    image: "https://picsum.photos/seed/book-1/800/600",
    text: "Hábitos Atómicos",
  },
  { image: "https://picsum.photos/seed/book-2/800/600", text: "A criada" },
  { image: "https://picsum.photos/seed/book-3/800/600", text: "" },
  { image: "https://picsum.photos/seed/book-4/800/600", text: "Book 4" },
  { image: "https://picsum.photos/seed/book-5/800/600", text: "Book 5" },
  { image: "https://picsum.photos/seed/book-6/800/600", text: "Book 6" },
];
</script>

<template>
  <div class="pt-28 pb-24">
    <div class="section-container">
      <router-link to="/personal" class="back-link">
        <svg
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        {{ t("personal.backToPersonal") }}
      </router-link>

      <div class="mb-16">
        <h1 class="section-title">{{ t("reading.title") }}</h1>
        <p class="section-subtitle">{{ t("reading.subtitle") }}</p>
        <div class="accent-line mt-6" />
      </div>

      <div class="h-[80vh]">
        <CircularGallery
          :items="books"
          :bend="1"
          :grayscale="true"
          :border-radius="0.05"
          text-color="#ffffff"
          font="bold 24px serif"
        />
      </div>
    </div>
  </div>
</template>
