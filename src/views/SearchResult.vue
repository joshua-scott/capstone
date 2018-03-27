<template>
  <div>
    <div v-for="result in getResults()" :key="`${ result.name }`">
      <b-row>
        <b-col sm="*">
          <b-img thumbnail fluid width="75" height="75" :src="result.image"></b-img>
        </b-col>
        <b-col align-self="center">
          <router-link :to="{name: 'Product', params: { productName: result.name }}"
                  class="nav-link">
            {{ result.name }}
          </router-link>
        </b-col>
      </b-row>
      <p> {{ result.representative }}</p>
      <p v-html="result.description"></p>
      <p> {{ result.subCategory.Slug }}</p>
      <hr>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {

    }
  },
  methods: {
    // gets the corresponding results to searchInput
    getResults () {
      const language = this.$store.state.language
      let products = this.$store.state.products.filter(product => product.language === language)
      products = products.filter(product =>
        (product.name && product.name.toLowerCase().includes(this.searchInput)) ||
        (product.representative && product.representative.toLowerCase().includes(this.searchInput)) ||
        (product.description && product.description.toLowerCase().includes(this.searchInput)) ||
        (product.subCategorySlug && product.subCategorySlug.toLowerCase().includes(this.searchInput))
      )
      // console.log(products)
      return products
    }
  },
  computed: {
    // gets the search input from the search box as a route query
    searchInput () {
      return this.$route.query.searchInput.toLowerCase()
    }
  }
}
</script>

<style>

</style>
