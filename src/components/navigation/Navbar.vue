<template>
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-emerald to-navy rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">TN</span>
          </div>
          <span class="font-bold text-navy text-lg hidden sm:inline font-heading">Thomas</span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <RouterLink
            v-for="item in mainNavItems"
            :key="item.to"
            :to="item.to"
            class="px-3 py-2 text-sm font-medium rounded-md transition-colors"
            :class="isActive(item.to)
              ? 'text-emerald bg-emerald/10'
              : 'text-navy hover:text-emerald hover:bg-emerald/5'"
          >
            {{ item.label }}
          </RouterLink>

          <!-- More dropdown -->
          <div class="relative group">
            <button
              class="px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1"
              :class="isMoreActive
                ? 'text-emerald bg-emerald/10'
                : 'text-navy hover:text-emerald hover:bg-emerald/5'"
            >
              More
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute right-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              <RouterLink
                v-for="item in moreNavItems"
                :key="item.to"
                :to="item.to"
                class="block px-4 py-2.5 text-sm transition-colors"
                :class="isActive(item.to)
                  ? 'text-emerald bg-emerald/10'
                  : 'text-navy hover:bg-emerald/10 hover:text-emerald'"
              >
                {{ item.label }}
              </RouterLink>
            </div>
          </div>

          <RouterLink
            to="/contact"
            class="ml-2 bg-emerald text-white px-5 py-2 rounded-lg hover:bg-emerald-dark transition-colors font-medium text-sm"
          >
            Contact
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 text-navy hover:text-emerald transition-colors"
          @click="isOpen = !isOpen"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div v-if="isOpen" class="lg:hidden pb-4 space-y-1 border-t border-gray-100 pt-3">
          <RouterLink
            v-for="item in allNavItems"
            :key="item.to"
            :to="item.to"
            class="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive(item.to)
              ? 'text-emerald bg-emerald/10'
              : 'text-navy hover:text-emerald hover:bg-emerald/5'"
            @click="isOpen = false"
          >
            {{ item.label }}
          </RouterLink>
          <RouterLink
            to="/contact"
            class="block px-4 py-2.5 bg-emerald text-white rounded-lg hover:bg-emerald-dark transition-colors font-medium text-sm text-center mt-2"
            @click="isOpen = false"
          >
            Contact
          </RouterLink>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)

const mainNavItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Research', to: '/research' },
]

const moreNavItems = [
  { label: 'Publications', to: '/publications' },
  { label: 'Training', to: '/training' },
  { label: 'Awards', to: '/awards' },
  { label: 'Community', to: '/community' },
  { label: 'Freelancing', to: '/freelancing' },
]

const allNavItems = [...mainNavItems, ...moreNavItems]

function isActive(path: string): boolean {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const isMoreActive = computed(() =>
  moreNavItems.some((item) => isActive(item.to))
)
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
