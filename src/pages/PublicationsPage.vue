<template>
  <div>
    <!-- Publications Hero -->
    <section class="bg-gradient-to-br from-navy to-emerald/10 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Publications</h1>
        <p class="text-xl text-gray-300 max-w-2xl">
          Academic papers and technical publications
        </p>
      </div>
    </section>

    <!-- Publications List -->
    <section class="section-container">
      <div class="space-y-6">
        <div v-for="pub in publications.publications" :key="pub.id" class="card p-6">
          <div class="flex flex-col md:flex-row justify-between md:items-start gap-4">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-navy mb-2">{{ pub.title }}</h3>
              <p class="text-sm text-slate mb-3">
                <span class="font-semibold">{{ pub.type }}</span> •
                <span class="ml-2">{{ pub.year }}</span>
                <span v-if="pub.journal" class="ml-2">• {{ pub.journal }}</span>
                <span v-if="pub.conference" class="ml-2">• {{ pub.conference }}</span>
                <span v-if="pub.organization" class="ml-2">• {{ pub.organization }}</span>
              </p>
              <p class="text-slate mb-3">{{ pub.authors }}</p>
              <p class="text-slate mb-4">{{ pub.summary }}</p>
              <a
                :href="pub.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-emerald hover:text-emerald/80 font-medium transition-colors"
              >
                Read Publication →
              </a>
            </div>
            <div class="flex-shrink-0">
              <span class="inline-block bg-emerald/10 text-emerald px-4 py-2 rounded-lg text-sm font-medium">
                DOI: {{ pub.doi }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import publications from '../data/publications.json'
</script>
