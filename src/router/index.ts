import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bace',
      component: ()=>import('../views/HomeView.vue')
    },
    {
      path:'/service',
      name:'service',
      component: () =>import ('../views/service.vue')
    },
    {
      path:'/home',
      name:'Home',
      component:()=> import('../views/Home.vue')
    },
    {
      path:'/panel',
      name:'Panel',
      component:()=> import('../views/panel.vue')
    }

  ]
})

export default router
