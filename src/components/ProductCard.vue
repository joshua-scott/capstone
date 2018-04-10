<template>
    <b-card :title="product.name"
            :img-src="product.image"
            :img-alt="`Photograph of ${product.name}`"
            img-top
            class="product-card mb-2"
    >
      <div slot="footer" class="text-center"><b-button :to="`/product/${product.number}`" variant="primary">Find out more</b-button></div>
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
