<template>
  <div>
    <!-- Research Hero -->
    <section class="bg-gradient-to-br from-navy to-emerald/10 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Research & Publications</h1>
        <p class="text-xl text-gray-300 max-w-2xl">
          Academic contributions and research initiatives in technology and sustainable development
        </p>
      </div>
    </section>

    <!-- Publications Section -->
    <section class="section-container">
      <SectionHeader title="Featured Publications" subtitle="Latest research and academic contributions" />
      <div class="grid grid-cols-1 gap-6">
        <PublicationCard
          v-for="pub in publications.publications"
          :key="pub.id"
          :title="pub.title"
          :year="pub.year"
          :summary="`${pub.type} • ${pub.year}`"
          :link="pub.link"
        />
      </div>
    </section>

    <!-- Research Interests -->
    <section class="bg-slate-light py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-navy mb-12 text-center">Research Interests</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="research in researchData.research" :key="research.title" class="bg-white p-8 rounded-xl shadow-lg">
            <h3 class="text-2xl font-bold text-navy mb-3">{{ research.title }}</h3>
            <p class="text-slate mb-4">{{ research.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="topic in research.keyTopics"
                :key="topic"
                class="text-sm bg-emerald/10 text-emerald px-3 py-1 rounded-full"
              >
                {{ topic }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Grants & Funding -->
    <section class="section-container">
      <SectionHeader title="Grants & Funding" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="grant in researchData.grants" :key="grant.title" class="card p-6">
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-xl font-bold text-navy">{{ grant.title }}</h3>
            <span class="text-emerald font-bold">{{ grant.amount }}</span>
          </div>
          <p class="text-slate mb-2"><strong>Funder:</strong> {{ grant.funder }}</p>
          <p class="text-slate"><strong>Project:</strong> {{ grant.project }}</p>
          <p class="text-sm text-slate mt-3">{{ grant.year }}</p>
        </div>
      </div>
    </section>

    <!-- External Links -->
    <section class="bg-gradient-to-r from-emerald to-emerald/80 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
          Explore My Research
        </h2>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="https://researchgate.net"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 bg-white text-emerald rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
          >
            ResearchGate Profile
          </a>
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 bg-white text-emerald rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
          >
            Google Scholar
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '../components/common/SectionHeader.vue'
import PublicationCard from '../components/research/PublicationCard.vue'
import publications from '../data/publications.json'
import researchData from '../data/research.json'
</script>
