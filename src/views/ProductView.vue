<template>
  <div>
    <h2>This is ProductView. It contains a Product component inside it.</h2>
    <product
      v-bind="{ productNumber, category, subcategory }"
    ></product>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  props: ['productNumber', 'category', 'subcategory'],
  components: {
    Product
  }
}
</script>

<style lang="scss" scoped>

</style>
