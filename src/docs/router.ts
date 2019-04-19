import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/docs/home.vue'
import ExamplesPage from '@/docs/examples.vue'
import FunctionsPage from '@/docs/functions.vue'
import VuePage from '@/docs/vue.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/examples', component: ExamplesPage },
    { path: '/functions', component: FunctionsPage },
    { path: '/vue', component: VuePage }
  ]
})
