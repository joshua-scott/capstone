<template>
  <div>
    <products-jumbotron></products-jumbotron>
    <b-card
      v-for="product in products"
      :key="product.name"
    >
      <p><strong>Product: </strong>{{ product.name }}</p>

      <p><strong>Description: </strong></p>
      <div v-html="product.description"></div>

      <p><strong>Representative: </strong>{{ product.representative }}</p>
      <p><strong>Sold by the: </strong>{{ product.salesUnit }}</p>
      <b-img fluid :src="product.image" />
    </b-card>
  </div>
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
.product-description {
  white-space:pre-line;
}
</style>
