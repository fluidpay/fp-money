import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './home.vue'
import ExamplesPage from './examples.vue'
import FunctionsPage from './functions.vue'
import VuePage from './vue.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/examples', component: ExamplesPage },
    { path: '/functions', component: FunctionsPage },
    { path: '/vue', component: VuePage }
  ]
})

export default router