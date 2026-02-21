<template>
  <div class="card p-8 hover:scale-105 cursor-pointer">
    <div class="text-5xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-bold text-navy mb-3">{{ title }}</h3>
    <p class="text-slate mb-4 text-sm leading-relaxed">
      {{ description }}
    </p>
    <div v-if="features" class="mb-4">
      <ul class="space-y-2">
        <li v-for="feature in features" :key="feature" class="text-sm text-slate flex gap-2">
          <span class="text-emerald">✓</span>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
    <Button variant="outline" size="sm" class="w-full">
      Learn More →
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from '../common/Button.vue'

interface Props {
  icon: string
  title: string
  description: string
  features?: string[]
}

withDefaults(defineProps<Props>(), {})
</script>
