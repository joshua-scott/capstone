<template>
  <div>
    <b-input-group>
      <b-form-input v-on:input="search()" v-model="searchInput" type="text" placeholder="Search...">
      </b-form-input>
      <b-input-group-append>
        <!-- <font-awesome-icon icon="search"></font-awesome-icon> -->
        <b-btn disabled variant="outline-dark" >
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
      searchInput: ''
    }
  },
  methods: {
    search () {
      if (this.searchInput) {
        this.$router.push({
          name: 'SearchResult', query: { searchInput: this.searchInput }
        })
      } else {
        this.$router.push('/')
      }
      if (event) event.preventDefault()
    }
  }
}
</script>
