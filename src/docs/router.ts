import Vue from 'vue'
import Router from 'vue-router'
import BasicPage from '@/docs/basic.vue'
import VuePage from '@/docs/vue.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: BasicPage },
    { path: '/vue', component: VuePage }
  ]
})
