<template>
  <div>
    <!-- Contact Hero -->
    <section class="bg-gradient-to-br from-navy to-emerald/10 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Get in Touch</h1>
        <p class="text-xl text-gray-300 max-w-2xl">
          I'm always interested in hearing about new projects and opportunities
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <h2 class="text-3xl font-bold text-navy mb-6">Send Me a Message</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-navy mb-2">Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-navy mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-navy mb-2">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald transition-colors"
                placeholder="Project subject"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-navy mb-2">Message</label>
              <textarea
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald transition-colors"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              class="w-full bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-light transition-colors text-lg"
            >
              Send Message
            </button>

            <p v-if="formStatus" :class="['text-sm', formStatus.type === 'success' ? 'text-emerald' : 'text-red-500']">
              {{ formStatus.message }}
            </p>
          </form>
        </div>

        <!-- Contact Info -->
        <div>
          <h2 class="text-3xl font-bold text-navy mb-6">Contact Information</h2>

          <div class="space-y-6">
            <!-- Email -->
            <div class="flex gap-4">
              <div class="text-3xl">📧</div>
              <div>
                <h3 class="font-bold text-navy mb-1">Email</h3>
                <p class="text-slate">thomas@example.com</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex gap-4">
              <div class="text-3xl">📞</div>
              <div>
                <h3 class="font-bold text-navy mb-1">Phone</h3>
                <p class="text-slate">+1 (XXX) XXX-XXXX</p>
              </div>
            </div>

            <!-- Location -->
            <div class="flex gap-4">
              <div class="text-3xl">📍</div>
              <div>
                <h3 class="font-bold text-navy mb-1">Location</h3>
                <p class="text-slate">Cibolo, TX, USA</p>
              </div>
            </div>

            <!-- Timezone -->
            <div class="flex gap-4">
              <div class="text-3xl">🕐</div>
              <div>
                <h3 class="font-bold text-navy mb-1">Timezone</h3>
                <p class="text-slate">UTC-6 (Central Time)</p>
              </div>
            </div>

            <!-- Social Links -->
            <div class="pt-6 border-t border-gray-200">
              <h3 class="font-bold text-navy mb-4">Connect on Social</h3>
              <div class="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-2xl hover:text-emerald transition-colors"
                >
                  🔗
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-2xl hover:text-emerald transition-colors"
                >
                  💻
                </a>
                <a
                  href="https://upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-2xl hover:text-emerald transition-colors"
                >
                  🚀
                </a>
              </div>
            </div>

            <!-- WhatsApp CTA -->
            <div class="pt-6 border-t border-gray-200">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block w-full text-center bg-emerald text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald/90 transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const formStatus = ref<{ type: string; message: string } | null>(null)

const handleSubmit = async () => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    formStatus.value = {
      type: 'success',
      message: 'Thank you! I will get back to you soon.',
    }
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    formStatus.value = {
      type: 'error',
      message: 'Something went wrong. Please try again later.',
    }
  }
  setTimeout(() => {
    formStatus.value = null
  }, 5000)
}
</script>
