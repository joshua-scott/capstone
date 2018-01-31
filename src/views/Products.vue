<template lang="pug">
  div
    appHeader
    navbar
    ProductsJumbotron
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
