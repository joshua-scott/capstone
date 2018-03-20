<template>
  <b-container class="product-list-view">
    <b-card-group deck>
      <product-simple
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </b-card-group>
  </b-container>
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

<style lang="scss" scoped>
  .product-list-view {
    margin-top: 2rem;
  }
</style>

