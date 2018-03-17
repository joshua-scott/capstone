<template>
  <div>
    <p>I am the product component!</p>
    <div>
      <p>My productNumber is: {{ productNumber }}</p>
      <p>My category is: {{ category }}</p>
      <p>My category is: {{ subcategory }}</p>
    </div>
    <div v-if="product" style="color: var(--red); font-weight: bold;">
      Here's the product details:
      {{ product }}
    </div>
    <div v-else style="color: var(--red); font-weight: bold;">
      <p>Product not found.</p>
      <p>Note: if you're seeing this and are sure the product is there, it's probably because the Prismic API hasn't been updated yet...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['productNumber', 'category', 'subcategory'],
  computed: {
    product () {
      const products = this.$store.state.products
      const language = this.$store.state.language
      return products.find(prod => prod.number === Number(this.productNumber) && prod.language === language)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
