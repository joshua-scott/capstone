<template>
  <div>
    <!-- <product-simple v-for="product in products" /> -->
  </div>
</template>

<script>
import ProductSimple from '@/components/ProductSimple.vue'

export default {
  components: {
    ProductSimple
  },
  computed: {
    products () {
      const prods = this.$store.state.products
      const language = this.$store.state.language
      return prods.filter(product => {
        console.log({ product })
        return product.subCategorySlug === this.$route.params.subCategory &&
          product.language === language
      })
    }
  }
}
</script>

<style>

</style>
