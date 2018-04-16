import Home from '@/views/Home'
import About from '@/views/About'
import SearchResult from '@/views/SearchResult'
import ResearchDevelopment from '@/views/ResearchDevelopment'
// import Categories from '@/views/Categories'
import ProductList from '@/views/ProductList'
import Product from '@/views/Product'
import PageNotFound from '@/views/PageNotFound'
import ProductLine from '@/views/ProductLine'

export default [
  {
    name: 'Home',
    nameFin: 'Koti',
    path: '/',
    component: Home
  },
  // {
  //   name: 'Products',
  //   nameFin: 'Tuotteet',
  //   path: '/products',
  //   component: Categories
  // },
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
    name: 'SearchResult',
    path: '/search',
    component: SearchResult
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
  },
  {
    name: 'ProductLine',
    path: '/ProductLine',
    component: ProductLine
  }
]
