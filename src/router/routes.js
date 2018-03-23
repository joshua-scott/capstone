import Home from '@/views/Home'
import About from '@/views/About'
import ResearchDevelopment from '@/views/ResearchDevelopment'
import Categories from '@/views/Categories'
import ProductList from '@/views/ProductList'
import Product from '@/views/Product'
import PageNotFound from '@/views/PageNotFound'

export default [
  {
    name: 'Home',
    nameFin: 'Koti',
    path: '/',
    component: Home
  },
  {
    name: 'R & D',
    nameFin: 'R & D',
    path: '/rd',
    component: ResearchDevelopment
  },
  {
    name: 'About',
    nameFin: 'Meistä',
    path: '/about',
    component: About
  },
  {
    name: 'Products',
    nameFin: 'Tuotteet',
    path: '/products',
    component: Categories
  },
  {
    name: 'ProductList',
    path: '/products/:subCategoryName',
    component: ProductList,
    props: true
  },
  {
    name: 'Product',
    path: '/product/:productNumber',
    component: Product,
    props: true
  },
  {
    name: 'PageNotFound',
    path: '*',
    component: PageNotFound
  }
]
