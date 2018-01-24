import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Products from '@/views/Products'
import researchAndDevelopment from '@/views/researchAndDevelopment'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/rd',
      name: 'R & D',
      component: researchAndDevelopment
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})
