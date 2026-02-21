<template>
  <div>
    <!-- Services Hero -->
    <section class="bg-gradient-to-br from-navy to-emerald/10 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">My Services</h1>
        <p class="text-xl text-gray-300 max-w-2xl">
          Comprehensive solutions in software development, IoT, clean energy, and IT services
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-container">
      <div class="space-y-16">
        <!-- Software Development -->
        <div id="software">
          <SectionHeader title="Software Development & Consultancy" />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon="💻"
              title="Full-Stack Development"
              description="End-to-end web and mobile application development with scalable architecture"
              :features="['Full-stack development', 'Backend architecture', 'API development', 'Cloud & DevOps']"
            />
            <ServiceCard
              icon="🤖"
              title="AI/ML Model Development"
              description="Custom machine learning solutions for predictive analytics"
              :features="['Model development', 'Data analysis', 'Predictive analytics', 'Production deployment']"
            />
          </div>
        </div>

        <!-- IoT & AI -->
        <div id="iot">
          <SectionHeader title="IoT, AI & Automation Solutions" />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon="📡"
              title="IoT Sensor Networks"
              description="Design and implementation of IoT systems for monitoring and automation"
              :features="['Sensor network design', 'Real-time monitoring', 'Smart automation', 'Integration']"
            />
            <ServiceCard
              icon="🌾"
              title="Smart Agriculture Systems"
              description="IoT-driven solutions for modern, climate-smart agriculture"
              :features="['Smart irrigation', 'Soil monitoring', 'Crop optimization', 'Farmer training']"
            />
          </div>
        </div>

        <!-- IT Hardware -->
        <div id="hardware">
          <SectionHeader title="IT Hardware Sales & Training" />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon="💾"
              title="IT Hardware & Procurement"
              description="Supply and installation of quality IT equipment for organizations"
              :features="['Laptops & desktops', 'Networking devices', 'IoT hardware kits', 'Procurement']"
            />
            <ServiceCard
              icon="🎓"
              title="Technical Training Programs"
              description="Professional training for technicians and teams"
              :features="['IoT diagnostics', 'Software development', 'Hardware troubleshooting', 'Workshops']"
            />
          </div>
        </div>

        <!-- Clean Energy -->
        <div id="energy">
          <SectionHeader title="Clean Energy & Environment" />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon="☀️"
              title="Solar System Design & Installation"
              description="Professional solar energy solutions for homes and businesses"
              :features="['System design', 'Installation', 'Maintenance', 'ROI analysis']"
            />
            <ServiceCard
              icon="⚡"
              title="Energy Audits & Monitoring"
              description="Comprehensive energy assessment and smart monitoring systems"
              :features="['Energy audits', 'Smart monitoring', 'Cost optimization', 'Consulting']"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-emerald to-emerald/80 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl text-emerald/20 mb-8">
          Let's discuss your requirements and build something amazing together
        </p>
        <RouterLink to="/contact" class="bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-light transition-colors text-lg inline-block">
          Request a Consultation
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from '../components/common/SectionHeader.vue'
import ServiceCard from '../components/services/ServiceCard.vue'
import { RouterLink } from 'vue-router'
</script>
