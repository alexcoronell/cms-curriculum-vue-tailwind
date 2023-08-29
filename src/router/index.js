import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: () => import('../views/LayoutView.vue'), children: [
        { path: '/', name: 'home', component: () => import('../views/public/HomeView.vue') },
        { path: '/experiences', name: 'experiences', component: () => import('../views/public/ExperiencesView.vue') },
        { path: '/studies', name: 'studies', component: () => import('../views/public/StudiesView.vue') },
        { path: '/training', name: 'training', component: () => import('../views/public/TrainingView.vue') },
        { path: '/briefcase', name: 'briefcase', component: () => import('../views/public/BriefcaseView.vue') },
        { path: '/contact', name: 'contact', component: () => import('../views/public/ContactView.vue') },
        { path: '/login', name: 'login', component: () => import('../views/public/LoginView.vue') },
        {
          path: '/admin', name: 'admin', component: () => import('../views/admin/AdminLayout.vue'), children: [
            { path: '', name: 'menu', component: () => import('../views/admin/AdminMenuView.vue') },
            { path: 'briefcase', name: 'briefcase', component: () => import('../views/admin/AdminBriefcaseView.vue') },
            { path: 'contact', name: 'contact', component: () => import('../views/admin/AdminContactView.vue') },
            { path: 'experiences', name: 'experiences', component: () => import('../views/admin/AdminExperiencesView.vue') },
            { path: 'personal-data', name: 'personal-data', component: () => import('../views/admin/AdminPersonalDataView.vue') },
            { path: 'studies', name: 'studies', component: () => import('../views/admin/AdminStudiesView.vue') },
            { path: 'training', name: 'training', component: () => import('../views/admin/AdminTrainingView.vue') },
          ]
        }
      ]
    }
  ]
})

export default router
