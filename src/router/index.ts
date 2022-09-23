import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('../views/HomeView.vue')
    },
    {
      path:'/service',
      name:'service',
      component: () =>import ('../views/service.vue')
    }

  ]
})

export default router
