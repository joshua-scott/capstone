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
  props: ['subCategoryName'],
  components: {
    ProductSimple
  },
  computed: {
    products () {
      const prods = this.$store.state.products
      const language = this.$store.state.language
      return prods.filter(product => {
        console.log(product.subCategorySlug, this.subCategoryName)
        return product.subCategorySlug === this.subCategoryName &&
          product.language === language
      })
    },

    subCategoryId () {
      return ''
    },

    translatedSubcategory () {
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-list-view {
    margin-top: 2rem;
  }
</style>
