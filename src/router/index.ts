import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'),
    meta: { title: 'Home' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/AboutPage.vue'),
    meta: { title: 'About' },
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/pages/ServicesPage.vue'),
    meta: { title: 'Services' },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/pages/ProjectsPage.vue'),
    meta: { title: 'Projects' },
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('@/pages/ResearchPage.vue'),
    meta: { title: 'Research & Innovation' },
  },
  {
    path: '/publications',
    name: 'Publications',
    component: () => import('@/pages/PublicationsPage.vue'),
    meta: { title: 'Publications' },
  },
  {
    path: '/training',
    name: 'Training',
    component: () => import('@/pages/TrainingPage.vue'),
    meta: { title: 'Training & Workshops' },
  },
  {
    path: '/awards',
    name: 'Awards',
    component: () => import('@/pages/AwardsPage.vue'),
    meta: { title: 'Awards & Recognition' },
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('@/pages/CommunityPage.vue'),
    meta: { title: 'Service & Community' },
  },
  {
    path: '/freelancing',
    name: 'Freelancing',
    component: () => import('@/pages/FreelancingPage.vue'),
    meta: { title: 'Freelancing & Remote Work' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/ContactPage.vue'),
    meta: { title: 'Contact' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: { title: 'Page Not Found' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const base = 'Thomas Nwodo'
  const title = to.meta.title as string | undefined
  document.title = title ? `${title} | ${base}` : base
})

export default router
