<template>
  <div>
    <b-container>
      <b-row class="my-3" align-h="center">
        <b-button-toolbar aria-label="Toolbar with button groups and input groups">
          <b-button-group size="md" class="mx-1">
            <b-btn :variant="variantColor" @click="goBack()">Back</b-btn>
          </b-button-group>
          <b-input-group size="md" class="w-75 mx-1">
            <search-box></search-box>
          </b-input-group>
        </b-button-toolbar>
      </b-row>

      <div v-for="result in getResults()" :key="`${ result.name }`">
        <!-- <b-row v-b-tooltip="{title: result.description, html: true}"> -->
        <b-row>
          <b-col sm="*" class="px-2">
            <b-img thumbnail fluid width="200vw" height="200vh" :src="result.image || 'http://www.pngmart.com/files/2/Black-Panther-Logo-Transparent-Background.png'"></b-img>
          </b-col>
          <b-col align-self="center">
            <h3>{{ result.name }}</h3>
            <p> {{ result.representative }}</p>
            <b-btn :variant="variantColor" :to="{name: 'Product', params: { productNumber: result.number }}">More details</b-btn>
          </b-col>
        </b-row>
        <hr>
      </div>
        <b-alert variant="warning" :show="isEmpty">
          There is no matching product!!!
        </b-alert>
    </b-container>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'

export default {
  components: {
    SearchBox
  },
  data () {
    return {
      variantColor: 'dark'
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
      // console.log(this.isEmpty)

      return products
    },

    // goes back to the products view
    goBack () {
      this.$router.push({name: 'Products'})
    }
  },
  computed: {
    // gets the search input from the search box as a route query
    searchInput () {
      return this.$route.query.searchInput.toLowerCase()
    },

    // checks if result is empty
    isEmpty () {
      return this.getResults().length === 0
    }
  }
}
</script>

<style>

</style>
