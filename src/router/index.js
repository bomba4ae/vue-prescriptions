import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/DashboardRoute.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/dashboard', component: Dashboard}
  ],
})

export default router
