import Home from '@/views/Home'
import Products from '@/views/Products'
import ResearchDevelopment from '@/views/ResearchDevelopment'
import About from '@/views/About'
import PageNotFound from '@/views/PageNotFound'

export default [
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
    name: 'Research and Development',
    path: '/rd',
    component: ResearchDevelopment
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
]
