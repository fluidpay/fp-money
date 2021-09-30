import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/docs/home.vue'
import ExamplesPage from '@/docs/examples.vue'
import FunctionsPage from '@/docs/functions.vue'
import VuePage from '@/docs/vue.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/examples', component: ExamplesPage },
    { path: '/functions', component: FunctionsPage },
    { path: '/vue', component: VuePage }
  ]
})

export default router
