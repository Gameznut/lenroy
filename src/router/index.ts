import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/student/signup',
      name: 'student-signup',
      component: () => import('../views/student/SignupView.vue')
    },
    {
      path: '/student/login',
      name: 'student-login',
      component: () => import('../views/student/LoginView.vue')
    },
    {
      path: '/lecturer/signup',
      name: 'lecturer-signup',
      component: () => import('../views/lecturer/SignupView.vue')
    },
    {
      path: '/lecturer/login',
      name: 'lecturer-login',
      component: () => import('../views/lecturer/LoginView.vue')
    }
  ]
})

export default router
