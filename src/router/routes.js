import Home from '@/views/Home'
import ProductView from '@/views/ProductView'
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
  // View a specific product
  {
    name: 'Product',
    path: '/products/:category/:subcategory/:productName',
    component: ProductView,
    props: true
  },
  // View a specific category of products
  // View all Categories of products
  {
    name: 'Products',
    path: '/products',
    component: Products
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
    component: PageNotFound,
    hideInLists: true
  }
]
