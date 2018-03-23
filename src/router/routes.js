import Home from '@/views/Home'
import ProductView from '@/views/ProductView'
import CategoryView from '@/views/CategoryView'
import ResearchDevelopment from '@/views/ResearchDevelopment'
import About from '@/views/About'
import PageNotFound from '@/views/PageNotFound'
import ProductListView from '@/views/ProductListView'

export default [
  {
    name: 'Home',
    nameFin: 'Koti',
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
    nameFin: 'Tuotteet',
    path: '/products',
    component: CategoryView
  },
  {
    name: 'ProductList',
    path: '/products/:subCategoryName',
    component: ProductListView,
    props: true
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
    name: 'PageNotFound',
    path: '*',
    component: PageNotFound
  }
]
