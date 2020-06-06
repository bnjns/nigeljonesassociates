import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Consultants from '@/views/Consultants.vue'
import Contact from '@/views/Contact.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/consultants',
    name: 'consultants',
    component: Consultants
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '*',
    component: NotFound
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
