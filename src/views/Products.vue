<template>
  <div>
    <app-header></app-header>
    <navbar></navbar>
    <products-jumbotron></products-jumbotron>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import ProductsJumbotron from '@/components/ProductsJumbotron.vue'

export default {
  components: {
    appHeader: Header,
    Navbar,
    ProductsJumbotron
  }
}
</script>

<style>

</style>
