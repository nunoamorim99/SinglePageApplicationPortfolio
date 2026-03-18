<script setup>
import { useI18n } from "vue-i18n";
import HobbyCard from "@/components/personal/HobbyCard.vue";

const { t } = useI18n();

const sections = [
  {
    id: "travel",
    image: "src/assets/travels/travels-0.png",
    to: "/personal/travel",
  },
  {
    id: "sports",
    image: "src/assets/sports/sports-0.png",
    to: "/personal/sports",
  },
  {
    id: "photography",
    image: "src/assets/photos/photo-0.png",
    to: "/personal/photography",
  },
  {
    id: "gamming",
    image: "src/assets/gamming/gamming-0.png",
    to: "/personal/gamming",
  },
  {
    id: "reading",
    image: "src/assets/books/book-0.png",
    to: "/personal/reading",
  },
  {
    id: "lego",
    image: "src/assets/lego/lego-0.png",
    to: "/personal/lego",
  },
  {
    id: "puzzle",
    image: "src/assets/puzzles/puzzles-0.png",
    to: "/personal/puzzle",
  },
];
</script>

<template>
  <div class="pt-28 pb-24">
    <div class="section-container">
      <div class="max-w-3xl mb-16">
        <h1 class="section-title">{{ t("personal.title") }}</h1>
        <p
          class="mt-4 text-lg leading-relaxed text-charcoal-400 dark:text-charcoal-300"
        >
          {{ t("personal.intro") }}
        </p>
        <div class="accent-line mt-6" />
      </div>
      <div class="grid gap-6 sm:grid-cols-2">
        <HobbyCard
          v-for="section in sections"
          :key="section.id"
          :title="t(`personal.sections.${section.id}.title`)"
          :description="t(`personal.sections.${section.id}.description`)"
          :image="section.image"
          :to="section.to"
        />
      </div>
    </div>
  </div>
</template>
