import D1View from '../views/D1View.vue'
import ErrorView from '../views/ErrorView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import ProductView from '@/views/product/ProductView.vue'
import HomeView from '@/views/homeView/HomeView.vue'
import BaseView from '@/views/BaseView.vue';
const rootRoutePage404: RouteRecordRaw[] = [
  {
    path: '/error',
    component: ErrorView,
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/error',
  },
]

const indexSubRoute404: RouteRecordRaw[] = [
  {
    path: 'error',
    component: ErrorView, props: { isStyle: false }
  },
  {
    path: '/:pathMatch(/.*)',
    redirect: '/error',
  },
]

export const mainRouter: RouteRecordRaw[] = [

  {
    path: '/',
    name: 'baseView',
    component: BaseView,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView,

      },
      {
        path: '/',
        redirect: 'home',
      },
      {
        path: '/home/:homeId(\\d+)',
        name: 'productSingle',
        component: ProductView
      },

      {
        path: 'D1',
        name: 'D1',
        component: D1View
      },

      ...indexSubRoute404
    ],
  },
  ...rootRoutePage404
]

const router = createRouter({
  history: createWebHistory(),
  routes: mainRouter
})

export default router
