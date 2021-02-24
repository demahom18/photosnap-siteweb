import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stories from '../views/Stories.vue'
import Features from '../views/Features.vue'
import Pricing from '../views/Pricing.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/features',
    name: 'Features',
    component: Features
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Stories
  }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { left: 0, top: 0 }
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
})

export default router
