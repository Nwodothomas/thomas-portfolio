<template>
  <div>
    <!-- Awards Hero -->
    <section class="bg-gradient-to-br from-navy to-emerald/10 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Awards & Recognition</h1>
        <p class="text-xl text-gray-300 max-w-2xl">
          Recognition for innovation, research, and contribution
        </p>
      </div>
    </section>

    <!-- Awards Grid -->
    <section class="section-container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="award in awards.awards" :key="award.id" class="card p-6 border-l-4 border-emerald">
          <div class="flex justify-between items-start mb-3">
            <div>
              <h3 class="text-xl font-bold text-navy">{{ award.title }}</h3>
              <p class="text-sm text-emerald font-semibold mt-1">{{ award.category }}</p>
            </div>
            <span class="text-3xl">🏆</span>
          </div>
          <p class="text-sm text-slate mb-3">{{ award.organization }}</p>
          <p class="text-slate mb-3">{{ award.description }}</p>
          <p class="text-xs text-slate font-semibold">{{ award.year }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import awards from '../data/awards.json'
</script>
