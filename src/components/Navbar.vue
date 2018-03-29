<template>
  <b-container fluid role="navigation">
    <!-- b-nav(
      justified
      :tabs="width > 425"
      :vertical="width <= 425")
      b-nav-item(
        v-for="( route, index ) in displayedRoutes"
          :key="index"
          :to="route.path"
          :exact="route.name === 'Home'")
        | {{ language === 'en-gb' ? route.name : route.nameFin }}
    -->
    <b-navbar toggleable="md" type="light" variant="" class="edited-nav">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <router-link to="/">
          <b-img
            class="imgedit"
            src="@/assets/logo.jpg">
          </b-img>
        </router-link>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="nav-list">
          <b-nav-item v-for="( route, index ) in displayedRoutes" :key="index" :to="route.path" exact>
            {{ language === 'en-gb' ? route.name : route.nameFin }}
          </b-nav-item>
        </b-navbar-nav>

      <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <!-- <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
            <SearchBox></SearchBox>
          </b-nav-form>

          <b-nav-item-dropdown text="Langs" right>
            <b-dropdown-item @click="setLanguage('en-gb')">EN</b-dropdown-item>
            <b-dropdown-item @click="setLanguage('fi')">FI</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Sign in</b-dropdown-item>
            <b-dropdown-item href="#">Sign up</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
import routes from '@/router/routes.js'
import SearchBox from '@/components/SearchBox.vue'

export default {
  props: ['width'],
  data () {
    return {
      routes
    }
  },
  components: {
    SearchBox
  },
  computed: {
    language () {
      return this.$store.state.language
    },
    flagImage () {
      return require(`@/assets/flags/${this.$store.state.language === 'fi' ? 'gb' : 'fi'}.svg`)
    },
    displayedRoutes () {
      return routes.filter(route => ['Home', 'Products', 'R & D', 'About'].includes(route.name))
    }
  },
  methods: {
    setLanguage (newLanguage) {
      this.$store.commit('setLanguage', newLanguage)

      // If user changes language while viewing product subcategories, link to the new language version if possible.
      if (this.$route.params.subCategoryName) this.$router.push('/products')
    },
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
  .edited-nav {
    font-size:20px;
  }

  .nav-list {
    margin-left: 50px;
  }
</style>
