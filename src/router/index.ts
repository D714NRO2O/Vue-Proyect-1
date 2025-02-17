import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import Support from '../views/Support.vue'
import Settings from '../views/Settings.vue'
import ResetPassword from '../views/ResetPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
    },
    {
      path: '/support',
      name: 'support',
      component: Support,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    { path: '/reset-password', name: 'reset-password', component: ResetPassword },
  ],
})

export default router
