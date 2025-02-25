import { createRouter, createWebHistory } from 'vue-router'
import UserView from '@/views/UserView.vue'
import Support from '@/views/Support.vue'/*pendiente*/
import Settings from '@/views/Settings.vue'/*pendiente*/
import ResetPassword from '@/views/ResetPassword.vue'
import LogIn from '@/views/LogInView.vue'
import SignUp from '@/views/SignUpView.vue'
import About from '@/views/AboutView.vue' /*pendiente*/

import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Log In',
      component: AuthLayout,
      children: [
        {path: '',
          component: LogIn
        },
        {path: 'reset-password',
          component: ResetPassword
        },
        {
          path: 'about',
          name: 'about',
          component: About,
        },
        {
          path: 'sign-up',
          name: 'Sign Up',
          component: SignUp,
        },

      ]
    },
    {
      path: '/main',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: 'user',
          name: 'user',
          component: UserView,
        },
        {
          path: 'support',
          name: 'support',
          component: Support,
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings,
        },
      ]
    },
  ],
})

export default router
