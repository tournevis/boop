import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/home',
    component: Home
  }
]
const router = new VueRouter({
  history: true,
  hashbang: false,
  routes
})

export default router
