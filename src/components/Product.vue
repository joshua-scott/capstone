<template>
  <div>
    <p>I am a product!</p>
    <p>My productName is: {{ productName }}</p>
    <p>My category is: {{ category }}</p>
    <p>My category is: {{ subcategory }}</p>
    <div>
      {{ product || 'Not found' }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['productName', 'category', 'subcategory'],
  computed: {
    product () {
      const products = this.$store.state.products
      const language = this.$store.state.language
      return products.find(prod => prod.name === this.productName && prod.language === language)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
