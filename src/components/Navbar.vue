<template>
  <b-container role="navigation">
    <b-nav
      justified
      :tabs="width > 425"
      :vertical="width <= 425"
    >
      <b-nav-item
        v-for="( route, index ) in displayedRoutes"
        :key="index"
        :to="route.path"
        exact
      >
        {{ route.name }}
      </b-nav-item>
    </b-nav>
  </b-container>
</template>

<script>
import routes from '@/router/routes.js'

export default {
  data () {
    return {
      routes,
      width: window.innerWidth,
      categories: [ 'Services', 'The team', 'Publications', 'References', 'Partners', 'Contact', 'News' ]
    }
  },
  computed: {
    displayedRoutes () {
      return routes.filter(route => !route.hideInLists)
    }
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
  .active.nav-link {
    font-weight: 700;
    color: #495057;
  }
</style>
