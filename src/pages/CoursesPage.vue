<script setup>
import { courses } from '@/data/courses'
import CourseCard from '@/components/courses/CourseCard.vue'
</script>

<template>
  <div class="pt-24 pb-20">
    <div class="section-container">
      <div class="text-center">
        <h1 class="section-title">Courses & Certifications</h1>
        <p class="section-subtitle">Continuous learning to stay sharp and relevant</p>
      </div>
      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        <CourseCard v-for="course in courses" :key="course.id" :course="course" />
      </div>
    </div>
  </div>
</template>
