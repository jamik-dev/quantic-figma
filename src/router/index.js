import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from "../layouts/DefaultLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: DefaultLayout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('../views/Home.vue')
        }
      ]
    },
  ]
})

export default router
