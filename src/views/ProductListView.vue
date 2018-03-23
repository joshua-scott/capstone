<template>
  <b-container class="product-list">
    <b-card-group deck>
      <product-card
        v-for="(product, index) in products"
          :key="index"
          :product="product"
      />
    </b-card-group>
  </b-container>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  props: ['subCategoryName'],
  components: {
    ProductCard
  },
  computed: {
    products () {
      const prods = this.$store.state.products
      const language = this.$store.state.language
      return prods.filter(product => {
        return product.subCategorySlug === this.subCategoryName &&
          product.language === language
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-list {
    margin-top: 2rem;
  }
</style>
