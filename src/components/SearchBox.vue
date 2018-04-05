<template>
  <b-input-group class="search">
    <b-form-input
      @keyup.enter.native="search()"
      v-model="searchInput"
      type="text"
      :placeholder="placeholder[lang]"
    ></b-form-input>
    <b-input-group-append>
      <b-btn @click="search()">
        <font-awesome-icon icon="search"></font-awesome-icon>
      </b-btn>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      searchInput: '',
      placeholder: {
        fi: 'Etsi kaikki tuotteet...',
        'en-gb': 'Search all products...'
      }
    }
  },
  computed: {
    lang () {
      return this.$store.state.language
    }
  },
  methods: {
    // search all products that match the given criterias
    search () {
      if (this.searchInput) {
        this.$router.push({
          name: 'SearchResult', query: { searchInput: this.searchInput }
        })
      }
      // else {
      //   // go back to the homepage
      //   this.$router.push('/')
      // }
      if (event) event.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    max-width: 600px;
    margin: 2em auto;
  }
</style>
