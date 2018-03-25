<template>
  <b-col xs="12" sm="6" md="3">
    <b-card :title="product.name"
            :img-src="product.image"
            :img-alt="`Photograph of ${product.name}`"
            img-top
            class="product-card mb-2"
            border-variant="primary"
    >
      <b-button :to="`/product/${product.number}`" variant="primary">Find out more</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style lang="scss" scoped>
  .product-card {
    margin-left: auto;
    margin-right: auto;
    min-width: 10rem;
    max-width: 20rem;
  }
</style>
