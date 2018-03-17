<template>
  <div>
    <h2>This is ProductView. It contains a Product component inside it.</h2>
    <product
      v-bind="{ productName, category, subcategory }"
    ></product>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  props: ['productName', 'category', 'subcategory'],
  components: {
    Product
  }
}
</script>

<style lang="scss" scoped>

</style>
