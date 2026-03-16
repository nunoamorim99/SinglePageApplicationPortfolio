<script setup>
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'
</script>

<template>
  <div class="pt-24 pb-20">
    <div class="section-container">
      <div class="text-center">
        <h1 class="section-title">Projects</h1>
        <p class="section-subtitle">A selection of products I've helped build and ship</p>
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
