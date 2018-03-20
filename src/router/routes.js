import Home from '@/views/Home'
import ProductView from '@/views/ProductView'
import CategoryView from '@/views/CategoryView'
import ResearchDevelopment from '@/views/ResearchDevelopment'
import About from '@/views/About'
import PageNotFound from '@/views/PageNotFound'
import Product from '@/components/Product'

export default [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  // View a specific product
  {
    name: 'Product',
    path: '/products/:category/:subcategory/:productNumber',
    component: ProductView,
    props: true
  },
  // View a specific category of products
  // View all Categories of products
  {
    name: 'Products',
    path: '/products',
    component: CategoryView
  },
  {
    name: 'ProductList',
    path: '/products/:subCategory',
    component: Product
  },
  {
    name: 'R & D',
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
    path: '*',
    component: PageNotFound
  }
]
