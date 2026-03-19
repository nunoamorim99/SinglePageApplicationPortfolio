<script setup>
import { useI18n } from "vue-i18n";
import HobbyCard from "@/components/personal/HobbyCard.vue";

import travelsImg from "@/assets/travels/travels-0.png";
import sportsImg from "@/assets/sports/sports-0.png";
import photosImg from "@/assets/photos/photo-0.png";
import gammingImg from "@/assets/gamming/gamming-0.png";
import booksImg from "@/assets/books/book-0.png";
import legoImg from "@/assets/lego/lego-0.png";
import puzzlesImg from "@/assets/puzzles/puzzles-0.png";

const { t } = useI18n();

const sections = [
  {
    id: "travel",
    image: travelsImg,
    to: "/personal/travel",
  },
  {
    id: "sports",
    image: sportsImg,
    to: "/personal/sports",
  },
  {
    id: "photography",
    image: photosImg,
    to: "/personal/photography",
  },
  {
    id: "gamming",
    image: gammingImg,
    to: "/personal/gamming",
  },
  {
    id: "reading",
    image: booksImg,
    to: "/personal/reading",
  },
  {
    id: "lego",
    image: legoImg,
    to: "/personal/lego",
  },
  {
    id: "puzzle",
    image: puzzlesImg,
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
