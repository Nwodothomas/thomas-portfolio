<template>
  <div class="card overflow-hidden hover:shadow-2xl">
    <div
      class="h-48 bg-gradient-to-br from-emerald/20 to-navy/20 flex items-center justify-center"
    >
      <span class="text-6xl">{{ icon }}</span>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-navy mb-2">{{ title }}</h3>
      <p class="text-slate text-sm mb-4">{{ description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="text-xs bg-emerald/10 text-emerald px-3 py-1 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
      <p class="text-sm font-semibold text-emerald mb-3">{{ outcomes }}</p>
      <div class="text-xs text-slate">{{ year }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
  technologies: string[]
  outcomes: string
  year: number
}

withDefaults(defineProps<Props>(), {})
</script>
