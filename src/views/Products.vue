<template lang="pug">
  div
    products-jumbotron
    b-card(
      v-for="product in products"
    )
      p {{ product.name }}
      p {{ product.representative }}
      b-img(fluid :src="product.image")
</template>

<script>
import ProductsJumbotron from '@/components/ProductsJumbotron.vue'

export default {
  components: {
    ProductsJumbotron
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
