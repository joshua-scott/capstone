import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Products from '@/views/Products'
import researchAndDevelopment from '@/views/researchAndDevelopment'
import About from '@/views/About'
import PageNotFound from '@/views/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Products',
      path: '/products',
      component: Products
    },
    {
      name: 'R & D',
      path: '/rd',
      component: researchAndDevelopment
    },
    {
      name: 'About',
      path: '/about',
      component: About
    },
    {
      name: 'PageNotFound',
      path: '/*',
      component: PageNotFound
    }
  ],
  mode: 'history'
})
