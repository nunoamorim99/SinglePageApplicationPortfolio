<script setup>
import { useI18n } from "vue-i18n";
import DomeGallery from "@/components/DomeGallery/DomeGallery.vue";
import gamming1 from "@/assets/gamming/gamming-1.png";
import gamming2 from "@/assets/gamming/gamming-2.png";
import gamming3 from "@/assets/gamming/gamming-3.png";
import gamming4 from "@/assets/gamming/gamming-4.png";
import gamming5 from "@/assets/gamming/gamming-5.png";
import gamming6 from "@/assets/gamming/gamming-6.png";
import gamming7 from "@/assets/gamming/gamming-7.png";
import gamming8 from "@/assets/gamming/gamming-8.png";
import gamming9 from "@/assets/gamming/gamming-9.png";
import gamming10 from "@/assets/gamming/gamming-10.png";

const { t } = useI18n();

const photos = [
  gamming1,
  gamming2,
  gamming3,
  gamming4,
  gamming5,
  gamming6,
  gamming7,
  gamming8,
  gamming9,
  gamming10,
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
        <h1 class="section-title">{{ t("gamming.title") }}</h1>
        <p class="section-subtitle">{{ t("gamming.subtitle") }}</p>
        <div class="accent-line mt-6" />
      </div>

      <div class="h-[80vh]">
        <DomeGallery
          :images="photos"
          overlay-blur-color="#1a1a1a"
          :grayscale="true"
          :segments="35"
          image-border-radius="12px"
          opened-image-border-radius="12px"
          opened-image-width="500px"
          opened-image-height="400px"
        />
      </div>
    </div>
  </div>
</template>
