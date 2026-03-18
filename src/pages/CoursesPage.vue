<script setup>
import { useI18n } from 'vue-i18n'
import { courses } from '@/data/courses'
import CourseCard from '@/components/courses/CourseCard.vue'

const { t } = useI18n()
</script>

<template>
  <div class="pt-28 pb-24">
    <div class="section-container">
      <div class="mb-16">
        <h1 class="section-title">{{ t('courses.title') }}</h1>
        <p class="section-subtitle">{{ t('courses.subtitle') }}</p>
        <div class="accent-line mt-6" />
      </div>
      <div class="grid gap-8 sm:grid-cols-2">
        <CourseCard v-for="course in courses" :key="course.id" :course="course" />
      </div>
    </div>
  </div>
</template>
