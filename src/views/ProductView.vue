<template>
  <div>
    <h2>This is ProductView. It contains a ProductDetailed component inside it.</h2>
    <product
      v-bind="{ productNumber, category, subcategory }"
    ></product>
  </div>
</template>

<script>
import ProductDetailed from '@/components/ProductDetailed.vue'

export default {
  props: ['productNumber', 'category', 'subcategory'],
  components: {
    ProductDetailed
  }
}
</script>

<style lang="scss" scoped>

</style>
