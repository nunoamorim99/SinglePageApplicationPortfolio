<script setup>
import { useI18n } from 'vue-i18n'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'

const { t } = useI18n()
</script>

<template>
  <div class="pt-28 pb-24">
    <div class="section-container">
      <div class="mb-16">
        <h1 class="section-title">{{ t('projects.title') }}</h1>
        <p class="section-subtitle">{{ t('projects.subtitle') }}</p>
        <div class="accent-line mt-6" />
      </div>
      <div class="space-y-16">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :reversed="index % 2 !== 0"
        />
      </div>
    </div>
  </div>
</template>
