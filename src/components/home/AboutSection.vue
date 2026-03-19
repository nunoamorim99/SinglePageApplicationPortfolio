<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { t, locale } = useI18n();
const sectionRef = ref(null);
const titleRef = ref(null);
const lineRef = ref(null);
const textRef = ref(null);
let ctx;

const bioWords = computed(() => t("about.bio").split(/\s+/));

function setupAnimations() {
  ctx?.revert();

  nextTick(() => {
    ctx = gsap.context(() => {
      // Title slides in from below
      gsap.from(titleRef.value, {
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Accent line scales from left
      gsap.from(lineRef.value, {
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      // Word-by-word opacity reveal on scroll
      const words = textRef.value?.querySelectorAll(".scroll-word");
      if (words?.length) {
        gsap.set(words, { opacity: 0.12 });
        gsap.to(words, {
          scrollTrigger: {
            trigger: textRef.value,
            start: "top 70%",
            end: "bottom 40%",
            scrub: true,
          },
          opacity: 1,
          stagger: 0.05,
          ease: "none",
        });
      }
    }, sectionRef.value);
  });
}

onMounted(setupAnimations);
watch(locale, setupAnimations);
onUnmounted(() => ctx?.revert());
</script>

<template>
  <section ref="sectionRef" id="about" class="py-32 lg:py-40 overflow-hidden">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div class="lg:col-span-4">
          <h2 ref="titleRef" class="section-title">{{ t("about.title") }}</h2>
          <div ref="lineRef" class="accent-line mt-6" />
        </div>
        <div class="lg:col-span-8 min-w-0">
          <p
            ref="textRef"
            class="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed lg:leading-[1.8] text-charcoal-500 dark:text-charcoal-300 font-serif italic break-words overflow-wrap-anywhere"
          >
            <span
              v-for="(word, i) in bioWords"
              :key="`${locale}-${i}`"
              class="scroll-word"
              >{{ word }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.overflow-wrap-anywhere {
  overflow-wrap: anywhere;
  word-break: break-word;
}
</style>
