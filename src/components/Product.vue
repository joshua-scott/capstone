<template>
  <!-- <div>
    <b-card
      v-for="product in getProductList()"
      :key="`${product.name}-${product.language}`"
    >
        <h3>{{ product.name }}</h3>
        <div v-html="product.description"></div>
        <p>Product representative: {{ product.representative }}</p>
        <p><strong>Sale unit: </strong>{{ product.salesUnit }}</p>
        <b-img fluid :src="product.image" />
    </b-card>
    <hr>
  </div> -->
  <div>
    <b-card-group deck>
      <b-card border-variant="dark" v-for="product in getProductList()" :key="`${product.name}-${product.language}`"
        :title="`${ product.name }`"
        :img-src="`${ product.image}`"
        img-alt="Img"
        style="max-width: 20rem;"
        img-top>
        <hr>
        <p class="card-text" v-html="product.description">
        </p>
        <div slot="footer">
            <small class="text-muted">
              <p><strong>Product representative:</strong> {{ product.representative }}</p>
              <p><strong>Sale unit: </strong>{{ product.salesUnit }}</p>
            </small>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  methods: {
    // gets all produts matching  route-parameter sub-category ID
    getProductList () {
      return this.products.filter(products => products.subCategory === this.$route.params.subCategory)
    }
  },
  computed: {
    // loads all products from products array in store.js to this local products array
    products () {
      const products = this.$store.state.products
      const language = this.$store.state.language
      return products.filter(prod => prod.language === language)
    }
  }
}
</script>

<style>
.product-description {
  white-space:pre-line;
}
</style>
