<template>
  <div class="min-h-screen bg-white flex flex-col">
    <Navbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/navigation/Navbar.vue'
import Footer from './components/common/Footer.vue'
</script>

<style scoped>
/* Component level styles if needed */
</style>

