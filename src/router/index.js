import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/features",
    name: "Features",
    component: function() {
      return import("../views/Features.vue");
    },
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: function() {
      return import("../views/Pricing.vue");
    },
  },
  {
    path: "/stories",
    name: "Stories",
    component: function() {
      return import("../views/Stories.vue");
    },
  },
  
  
  
  ,
  
  
  
  ,
  
  
  
  ,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
