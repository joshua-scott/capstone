<template>
  <div>
    <!-- <products-jumbotron></products-jumbotron> -->
    <!-- <b-card
      v-for="product in products"
      :key="`${product.name}-${product.language}`"
    >
        <h3>{{ product.name }}</h3>
        <div v-html="product.description"></div>
        <p>Product representative: {{ product.representative }}</p>
        <p><strong>Sale unit: </strong>{{ product.salesUnit }}</p>
        <b-img fluid :src="product.image" />
    </b-card>
    <hr> -->
    <Categories></Categories>
  </div>
</template>

<script>
import ProductsJumbotron from '@/components/ProductsJumbotron.vue'
import Categories from '@/components/Categories.vue'

export default {
  components: {
    ProductsJumbotron,
    Categories
  },
  computed: {
    // products () {
    //   const products = this.$store.state.products
    //   const language = this.$store.state.language
    //   return products.filter(prod => prod.language === language)
    // }
  }
}
</script>

<style>
.product-description {
  white-space:pre-line;
}
</style>
