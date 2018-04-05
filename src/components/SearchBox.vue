<template>
  <div>
    <b-input-group>
      <b-form-input
        @keyup.enter.native="search()"
        v-model="searchInput"
        type="text"
        :placeholder="placeholder[lang]">
      </b-form-input>
      <b-input-group-append>
        <b-btn variant="outline-dark" @click="search()">
          <font-awesome-icon icon="search"></font-awesome-icon>
        </b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
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
