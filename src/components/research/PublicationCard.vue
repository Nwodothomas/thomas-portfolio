<template>
  <div class="card p-6">
    <div class="flex items-start justify-between mb-4">
      <h3 class="text-lg font-bold text-navy flex-1">{{ title }}</h3>
      <span class="text-sm text-slate ml-2">{{ year }}</span>
    </div>
    <p class="text-slate text-sm mb-4">{{ summary }}</p>
    <div class="flex flex-wrap gap-2">
      <a
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm text-emerald hover:text-emerald/80 font-medium transition-colors"
      >
        Read More →
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  year: number
  summary: string
  link: string
}

withDefaults(defineProps<Props>(), {})
</script>
