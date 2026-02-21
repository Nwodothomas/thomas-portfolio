<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy/95 to-emerald/10 relative overflow-hidden">
      <!-- Background Animation -->
      <div class="absolute inset-0">
        <div class="absolute top-20 right-20 w-72 h-72 bg-emerald/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-emerald/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse [animation-delay:1s]" />
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald/5 rounded-full filter blur-3xl animate-pulse [animation-delay:2s]" />
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-6 animate-fade-in">
            <div>
              <p class="text-emerald font-semibold mb-2 tracking-wider uppercase text-sm">Welcome to My Portfolio</p>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight font-heading">
                Thomas Nwodo
              </h1>
              <p class="text-xl md:text-2xl text-gray-300 font-light">
                Research Technologist | Software Consultant | IoT Engineer
              </p>
            </div>

            <p class="text-lg text-gray-300 leading-relaxed max-w-md">
              Leveraging cutting-edge technology to solve real-world problems in agriculture, clean energy,
              and sustainable development.
            </p>

            <div class="flex flex-wrap gap-4 pt-4">
              <a
                href="/thomas-cv.pdf"
                download
                class="bg-emerald text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-dark transition-colors text-lg inline-flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download CV
              </a>
              <RouterLink
                to="/contact"
                class="border-2 border-emerald text-emerald px-8 py-4 rounded-lg font-medium hover:bg-emerald hover:text-white transition-colors text-lg"
              >
                Hire Me
              </RouterLink>
              <RouterLink
                to="/projects"
                class="bg-navy-light text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-light/80 transition-colors text-lg"
              >
                View Projects
              </RouterLink>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-3 gap-4 pt-8">
              <div class="border-l-4 border-emerald pl-4">
                <p class="text-3xl font-bold text-white">500+</p>
                <p class="text-sm text-gray-300">Farmers Served</p>
              </div>
              <div class="border-l-4 border-emerald pl-4">
                <p class="text-3xl font-bold text-white">550+</p>
                <p class="text-sm text-gray-300">Technicians Trained</p>
              </div>
              <div class="border-l-4 border-emerald pl-4">
                <p class="text-3xl font-bold text-white">15+</p>
                <p class="text-sm text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>

          <!-- Right Content -->
          <div class="hidden md:flex items-center justify-center">
            <div class="w-80 h-80 bg-gradient-to-br from-emerald/20 to-emerald/5 rounded-2xl flex items-center justify-center border border-emerald/20">
              <p class="text-9xl">🚀</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <RouterLink
            v-for="link in quickLinks"
            :key="link.to"
            :to="link.to"
            class="p-6 rounded-xl bg-gradient-to-br from-emerald/10 to-emerald/5 border border-emerald/20 hover:border-emerald hover:shadow-lg transition-all duration-300 group"
          >
            <div class="text-4xl mb-3">{{ link.icon }}</div>
            <h3 class="font-bold text-navy mb-2 group-hover:text-emerald transition-colors">{{ link.title }}</h3>
            <p class="text-sm text-slate">{{ link.description }}</p>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const quickLinks = [
  { to: '/about', icon: '📋', title: 'About Me', description: 'Learn about my background and expertise' },
  { to: '/services', icon: '💼', title: 'Services', description: 'Explore my service offerings' },
  { to: '/projects', icon: '🎯', title: 'Projects', description: 'See my work and impact' },
  { to: '/contact', icon: '✉️', title: 'Get in Touch', description: 'Reach out for collaboration' },
]
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}
</style>
