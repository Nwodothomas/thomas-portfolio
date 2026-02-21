<template>
  <section class="section-container">
    <div class="mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-navy mb-4">
        {{ title }}
      </h2>
      <div class="w-20 h-1 bg-gradient-to-r from-emerald to-emerald/40 rounded-full" />
      <p v-if="subtitle" class="text-xl text-slate mt-4">
        {{ subtitle }}
      </p>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {})
</script>
