<template>
    <b-card :title="product.name"
            :img-src="product.image"
            :img-alt="`Photograph of ${product.name}`"
            img-top
            class="product-card mb-2"
    >
      <b-button href="#" variant="primary">Find out more</b-button>
    </b-card>
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
