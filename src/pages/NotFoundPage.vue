<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy/95 to-emerald/10 px-4">
    <div class="text-center max-w-lg">
      <p class="text-9xl font-bold text-emerald mb-4">404</p>
      <h1 class="text-4xl font-bold text-white mb-4 font-heading">Page Not Found</h1>
      <p class="text-gray-300 text-lg mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <RouterLink
          to="/"
          class="bg-emerald text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-dark transition-colors"
        >
          Go Home
        </RouterLink>
        <RouterLink
          to="/contact"
          class="border-2 border-emerald text-emerald px-6 py-3 rounded-lg font-medium hover:bg-emerald hover:text-white transition-colors"
        >
          Contact Me
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
