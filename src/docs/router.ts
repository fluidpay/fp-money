import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/docs/home.vue'
import VuePage from '@/docs/vue.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/vue', component: VuePage }
  ]
})
