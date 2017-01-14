import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Setup from './components/SetupBoop.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/setup',
    component: Setup
  }
]
const router = new VueRouter({
  history: true,
  hashbang: false,
  routes
})

export default router
