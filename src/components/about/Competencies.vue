<template>
  <div class="card p-6">
    <div class="flex items-start gap-4">
      <div class="text-4xl">{{ icon }}</div>
      <div class="flex-1">
        <h3 class="text-lg font-bold text-navy mb-2">{{ title }}</h3>
        <p class="text-slate text-sm mb-3">{{ description }}</p>
        <a href="#" class="text-emerald hover:text-emerald/80 font-medium transition-colors text-sm">
          Learn More →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<Props>(), {})
</script>
