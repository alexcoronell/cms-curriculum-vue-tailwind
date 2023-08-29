import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/public/HomeView.vue') },
    { path: '/experiences', name: 'experiences', component: () => import('../views/public/ExperiencesView.vue') },
    { path: '/studies', name: 'studies', component: () => import('../views/public/StudiesView.vue') },
    { path: '/training', name: 'training', component: () => import('../views/public/TrainingView.vue') },
    { path: '/briefcase', name: 'briefcase', component: () => import('../views/public/BriefcaseView.vue') },
    { path: '/contact', name: 'contact', component: () => import('../views/public/ContactView.vue') },
    { path: '/login', name: 'login', component: () => import('../views/public/LoginView.vue') },
  ]
})

export default router
