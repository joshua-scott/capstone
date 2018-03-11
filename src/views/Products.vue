<template>
  <div>
    <products-jumbotron></products-jumbotron>
    <b-card
      v-for="product in products"
      :key="product.name"
    >
      <p>{{ product.name }}</p>
      <p>{{ product.descriptionHeading }}</p>
      <p>{{ product.descriptionText }}</p>
      <p>{{ product.representative }}</p>
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

</style>
