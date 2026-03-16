<script setup>
import { useI18n } from 'vue-i18n'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'

const { t } = useI18n()
</script>

<template>
  <div class="pt-24 pb-20">
    <div class="section-container">
      <div class="text-center">
        <h1 class="section-title">{{ t('projects.title') }}</h1>
        <p class="section-subtitle">{{ t('projects.subtitle') }}</p>
      </div>
      <div class="mt-16 space-y-12">
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
