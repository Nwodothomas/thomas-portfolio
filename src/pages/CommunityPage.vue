<template>
  <div>
    <!-- Community Hero -->
    <section class="bg-gradient-to-br from-navy to-emerald/10 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Service & Community</h1>
        <p class="text-xl text-gray-300 max-w-2xl">
          Contributing to community development and social impact
        </p>
      </div>
    </section>

    <!-- Community Activities -->
    <section class="section-container">
      <SectionHeader title="Community Engagement" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="activity in community.community" :key="activity.id" class="card p-6">
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-xl font-bold text-navy">{{ activity.title }}</h3>
            <span class="text-emerald text-sm font-semibold">{{ activity.year }}</span>
          </div>
          <p class="text-slate mb-3">{{ activity.description }}</p>
          <p class="text-sm text-slate"><strong>Organization:</strong> {{ activity.organization }}</p>
        </div>
      </div>
    </section>

    <!-- Impact Metrics -->
    <section class="bg-slate-light py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-navy mb-12 text-center">Community Impact</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="impact in community.impacts" :key="impact.metric" class="bg-white p-6 rounded-xl shadow-lg text-center">
            <p class="text-4xl font-bold text-emerald">{{ impact.metric }}</p>
            <p class="text-slate mt-2 text-sm">{{ impact.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-emerald to-emerald/80 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Join My Community
        </h2>
        <p class="text-xl text-emerald/20 mb-8">
          Let's work together to create positive impact
        </p>
        <RouterLink to="/contact" class="bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-light transition-colors text-lg inline-block">
          Get Involved
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '../components/common/SectionHeader.vue'
import { RouterLink } from 'vue-router'
import community from '../data/community.json'
</script>
