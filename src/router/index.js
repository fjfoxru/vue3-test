import { createRouter, createWebHistory } from 'vue-router'

import PostsView from '@/views/PostsView.vue'
import PostDetailView from '@/views/PostDetailView.vue'

import ModalsView from '@/views/ModalsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/use',
      name: 'homeUse',
      component: () => import('@/views/HomeViewUse.vue')
    },
    {
      path: '/store',
      name: 'homeStore',
      component: () => import('@/views/HomeViewStore.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path: '/posts/:id',
      name: 'postDetail',
      component: PostDetailView
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },
  ]
})

export default router
