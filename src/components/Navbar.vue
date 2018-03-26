<template lang="pug">
  b-container(role="navigation")
    b-nav(
      justified
      :tabs="width > 425"
      :vertical="width <= 425")
      b-nav-item(
        v-for="( route, index ) in displayedRoutes"
          :key="index"
          :to="route.path"
          :exact="route.name === 'Home'")
        | {{ language === 'en-gb' ? route.name : route.nameFin }}
</template>

<script>
import routes from '@/router/routes.js'

export default {
  props: ['width'],
  data () {
    return {
      routes
    }
  },
  computed: {
    displayedRoutes () {
      return routes.filter(route => ['Home', 'Products', 'R & D', 'About'].includes(route.name))
    },
    language () {
      return this.$store.state.language
    }
  }
}
</script>

<style scoped>
  .active.nav-link {
    font-weight: 700;
    color: #495057;
  }
</style>
