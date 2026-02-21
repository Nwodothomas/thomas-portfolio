<template>
  <div>
    <!-- Projects Hero -->
    <section class="bg-gradient-to-br from-navy to-emerald/10 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">My Projects</h1>
        <p class="text-xl text-gray-300 max-w-2xl">
          Real-world solutions with measurable impact across IoT, AI, Software, and Clean Energy
        </p>
      </div>
    </section>

    <!-- Filter Buttons -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all duration-300',
              selectedCategory === category
                ? 'bg-emerald text-white'
                : 'bg-slate-light text-navy hover:bg-emerald/10'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section-container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :icon="getCategoryIcon(project.category)"
          :title="project.title"
          :description="project.description"
          :technologies="project.technologies"
          :outcomes="project.outcomes"
          :year="project.year"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '../components/projects/ProjectCard.vue'
import projects from '../data/projects.json'

const categories = ref(['All', 'IoT', 'AI/ML', 'Software', 'Energy', 'Research'])
const selectedCategory = ref('All')

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects.projects
  }
  return projects.projects.filter((p) => p.category === selectedCategory.value)
})

const getCategoryIcon = (category: string): string => {
  const icons: { [key: string]: string } = {
    IoT: '📡',
    'AI/ML': '🤖',
    Software: '💻',
    Energy: '☀️',
    Research: '📚',
  }
  return icons[category] || '🎯'
}
</script>
