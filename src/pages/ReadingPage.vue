<script setup>
import { useI18n } from "vue-i18n";
import CircularGallery from "@/components/CircularGallery/CircularGallery.vue";
import book1 from "@/assets/books/book-1.png";
import book2 from "@/assets/books/book-2.png";
import book3 from "@/assets/books/book-3.png";
import book4 from "@/assets/books/book-4.png";
import book5 from "@/assets/books/book-5.png";
import book6 from "@/assets/books/book-6.png";

const { t } = useI18n();

const books = [
  {
    image: book5,
    text: "Hábitos Atómicos",
  },
  {
    image: book1,
    text: "A criada",
  },
  {
    image: book2,
    text: "O segredo da criada",
  },
  {
    image: book3,
    text: "A criada está a ver",
  },
  {
    image: book4,
    text: "O casamento da criada",
  },
  {
    image: book6,
    text: "Introdução ao desenvolvimento \n moderno para a web",
  },
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
