<template>
  <div>
    <!-- Training Hero -->
    <section class="bg-gradient-to-br from-navy to-emerald/10 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Training Programs</h1>
        <p class="text-xl text-gray-300 max-w-2xl">
          Professional training and capacity building initiatives
        </p>
      </div>
    </section>

    <!-- Training Programs -->
    <section class="section-container">
      <div class="grid grid-cols-1 gap-8">
        <div v-for="training in trainingData.training" :key="training.id" class="card p-6">
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-2xl font-bold text-navy">{{ training.title }}</h3>
            <span class="text-emerald font-bold text-lg">{{ training.year }}</span>
          </div>
          <p class="text-slate mb-4">{{ training.description }}</p>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p class="text-sm text-slate">Trainees</p>
              <p class="text-2xl font-bold text-emerald">{{ training.traineesCount }}+</p>
            </div>
            <div>
              <p class="text-sm text-slate">Organizations</p>
              <p class="text-lg font-bold text-navy">{{ training.organizations.length }}</p>
            </div>
          </div>
          <div class="mb-4">
            <p class="text-sm text-slate mb-2">Partner Organizations:</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="org in training.organizations"
                :key="org"
                class="text-sm bg-slate-light text-slate px-3 py-1 rounded-full"
              >
                {{ org }}
              </span>
            </div>
          </div>
          <div>
            <p class="text-sm text-slate mb-2">Categories:</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="cat in training.categories"
                :key="cat"
                class="text-sm bg-emerald/10 text-emerald px-3 py-1 rounded-full"
              >
                {{ cat }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact -->
    <section class="bg-gradient-to-r from-emerald to-emerald/80 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 class="text-3xl font-bold mb-4">Training Impact</h2>
        <p class="text-lg opacity-90 mb-8">
          Empowering individuals and organizations through comprehensive technical training
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <p class="text-4xl font-bold">550+</p>
            <p class="text-sm mt-2 opacity-90">Total Trainees</p>
          </div>
          <div>
            <p class="text-4xl font-bold">20+</p>
            <p class="text-sm mt-2 opacity-90">Programs Delivered</p>
          </div>
          <div>
            <p class="text-4xl font-bold">95%</p>
            <p class="text-sm mt-2 opacity-90">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import trainingData from '../data/training.json'
</script>
