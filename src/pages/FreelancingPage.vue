<template>
  <div>
    <!-- Freelancing Hero -->
    <section class="bg-gradient-to-br from-navy to-emerald/10 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Freelancing & Remote Work</h1>
        <p class="text-xl text-gray-300 max-w-2xl">
          Available for global projects and collaborations
        </p>
      </div>
    </section>

    <!-- Availability Section -->
    <section class="section-container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader title="Let's Work Together" />
          <div class="space-y-4 mt-8">
            <div class="flex gap-4">
              <div class="text-3xl">✓</div>
              <div>
                <h3 class="font-bold text-navy mb-1">Available Now</h3>
                <p class="text-slate">Open to freelance projects and consultancy work</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="text-3xl">⏰</div>
              <div>
                <h3 class="font-bold text-navy mb-1">Flexible Hours</h3>
                <p class="text-slate">Timezone: UTC-6 (Central Time)</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="text-3xl">💼</div>
              <div>
                <h3 class="font-bold text-navy mb-1">Contract Types</h3>
                <p class="text-slate">Hourly, Fixed, Retainer, Project-based</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="text-3xl">🌍</div>
              <div>
                <h3 class="font-bold text-navy mb-1">Global Scope</h3>
                <p class="text-slate">Working with clients worldwide</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills & Services -->
        <div class="card p-8">
          <h3 class="text-2xl font-bold text-navy mb-6">Top Skills</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-semibold text-navy">Full-Stack Development</span>
                <span class="text-emerald">⭐⭐⭐⭐⭐</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-emerald h-2 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-semibold text-navy">IoT & AI Systems</span>
                <span class="text-emerald">⭐⭐⭐⭐⭐</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-emerald h-2 rounded-full" style="width: 92%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-semibold text-navy">System Architecture</span>
                <span class="text-emerald">⭐⭐⭐⭐</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-emerald h-2 rounded-full" style="width: 88%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-semibold text-navy">Clean Energy Solutions</span>
                <span class="text-emerald">⭐⭐⭐⭐</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-emerald h-2 rounded-full" style="width: 90%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platforms -->
    <section class="bg-slate-light py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-navy mb-12 text-center">Find Me On</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="https://upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            class="card p-8 text-center hover:shadow-xl transition-all"
          >
            <div class="text-5xl mb-4">🚀</div>
            <h3 class="text-xl font-bold text-navy mb-2">Upwork</h3>
            <p class="text-slate mb-4">Professional freelancing platform</p>
            <span class="text-emerald font-semibold">View Profile →</span>
          </a>

          <a
            href="https://fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            class="card p-8 text-center hover:shadow-xl transition-all"
          >
            <div class="text-5xl mb-4">💎</div>
            <h3 class="text-xl font-bold text-navy mb-2">Fiverr</h3>
            <p class="text-slate mb-4">Gig-based services marketplace</p>
            <span class="text-emerald font-semibold">View Profile →</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            class="card p-8 text-center hover:shadow-xl transition-all"
          >
            <div class="text-5xl mb-4">🔗</div>
            <h3 class="text-xl font-bold text-navy mb-2">LinkedIn</h3>
            <p class="text-slate mb-4">Professional networking & updates</p>
            <span class="text-emerald font-semibold">View Profile →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-emerald to-emerald/80 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl text-emerald/20 mb-8">
          Send me a message to discuss your requirements
        </p>
        <RouterLink to="/contact" class="bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-light transition-colors text-lg inline-block">
          Get in Touch
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '../components/common/SectionHeader.vue'
import { RouterLink } from 'vue-router'
</script>
