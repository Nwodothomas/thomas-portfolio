<template>
  <div>
    <!-- About Hero -->
    <section class="bg-gradient-to-br from-navy to-emerald/10 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">About Me</h1>
        <p class="text-xl text-gray-300 max-w-2xl">
          Research Technologist, Software Consultant, and Innovator
        </p>
      </div>
    </section>

    <!-- Bio Section -->
    <section class="section-container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="w-80 h-80 bg-gradient-to-br from-emerald/20 to-emerald/5 rounded-2xl flex items-center justify-center">
            <p class="text-9xl">👨‍💼</p>
          </div>
        </div>
        <div>
          <h2 class="text-4xl font-bold text-navy mb-6">My Journey</h2>
          <p class="text-lg text-slate leading-relaxed mb-4">
            With over 15 years of experience in technology, research, and innovation, I've dedicated my career
            to solving real-world problems through software, IoT, and clean energy solutions.
          </p>
          <p class="text-lg text-slate leading-relaxed mb-4">
            My work has impacted over 500 farmers, trained 550+ technicians, and contributed to advancing
            sustainable development across Africa and beyond.
          </p>
          <p class="text-lg text-slate leading-relaxed">
            I'm passionate about bridging the gap between advanced technology and practical applications
            in emerging economies.
          </p>
        </div>
      </div>
    </section>

    <!-- Impact Metrics -->
    <section class="bg-slate-light py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-navy mb-12 text-center">Impact & Achievements</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-lg text-center">
            <p class="text-4xl font-bold text-emerald">500+</p>
            <p class="text-slate mt-2">Farmers Served</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg text-center">
            <p class="text-4xl font-bold text-emerald">550+</p>
            <p class="text-slate mt-2">Technicians Trained</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg text-center">
            <p class="text-4xl font-bold text-emerald">50+</p>
            <p class="text-slate mt-2">Publications</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg text-center">
            <p class="text-4xl font-bold text-emerald">15+</p>
            <p class="text-slate mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Competencies -->
    <section class="section-container">
      <SectionHeader title="Core Competencies" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Competencies
          icon="🏗️"
          title="Systems Architecture"
          description="Designing scalable, maintainable systems for enterprise applications"
        />
        <Competencies
          icon="🤖"
          title="IoT & AI Engineering"
          description="Building intelligent IoT solutions and machine learning models"
        />
        <Competencies
          icon="💻"
          title="Software Development"
          description="Full-stack development with modern frameworks and best practices"
        />
        <Competencies
          icon="☀️"
          title="Clean Energy Systems"
          description="Solar design, energy audits, and smart monitoring solutions"
        />
        <Competencies
          icon="📊"
          title="Research & Innovation"
          description="Academic research, data analysis, and technical writing"
        />
        <Competencies
          icon="🎓"
          title="Training & Mentoring"
          description="Educating technicians and fostering the next generation of innovators"
        />
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-emerald to-emerald/80 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's Collaborate
        </h2>
        <p class="text-xl text-emerald/20 mb-8">
          Interested in working together? Let's discuss your project
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
import Competencies from '../components/about/Competencies.vue'
import { RouterLink } from 'vue-router'
</script>
