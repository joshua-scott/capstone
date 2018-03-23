import Home from '@/views/Home'
import ProductView from '@/views/ProductView'
import CategoryView from '@/views/CategoryView'
import ResearchDevelopment from '@/views/ResearchDevelopment'
import About from '@/views/About'
import SearchResult from '@/views/SearchResult'
import PageNotFound from '@/views/PageNotFound'

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
    component: ProductView
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
    name: 'SearchResult',
    path: '/search',
    component: SearchResult
  },
  {
    name: 'PageNotFound',
    path: '*',
    component: PageNotFound
  }
]
