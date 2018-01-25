import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes.js'

Vue.use(Router)

export default new Router({
  routes: routes,
  // routes: [
  //   {
  //     name: 'Home',
  //     path: '/',
  //     component: Home
  //   },
  //   {
  //     name: 'Products',
  //     path: '/products',
  //     component: Products
  //   },
  //   {
  //     name: 'Research and Development',
  //     path: '/rd',
  //     component: ResearchDevelopment
  //   },
  //   {
  //     name: 'About',
  //     path: '/about',
  //     component: About
  //   },
  //   {
  //     name: 'PageNotFound',
  //     path: '/*',
  //     component: PageNotFound
  //   }
  // ],
  mode: 'history',
  // linkActiveClass: 'active', // active class for non-exact links.
  linkExactActiveClass: 'active' // active class for *exact* links.
})
