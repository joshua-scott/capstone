<template>
  <b-container fluid role="navigation">
    <b-navbar toggleable="md" type="light" variant="" class="edited-nav">

      <b-navbar-brand>
        <router-link to="/">
          <b-img src="@/assets/logo.jpg" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="nav-list">
          <b-nav-item
            v-for="( route, index ) in displayedRoutes"
            :key="index" :to="route.path" exact>
            {{ language === 'en-gb' ? route.name : route.nameFin }}
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <SearchBox></SearchBox>
          </b-nav-form> -->

          <b-navbar variant="faded" type="light">
            <b-navbar-brand href="#">
              <img class="flag" :src="flagImage">
            </b-navbar-brand>
            <b-nav-item-dropdown :text="language === 'fi' ? 'Suomi' : 'English'" right>
              <b-dropdown-item @click="setLanguage('en-gb')"><img :src="flags.gb" alt="GB flag" class="flag"> English</b-dropdown-item>
              <b-dropdown-item @click="setLanguage('fi')"><img :src="flags.fi" alt="Finland flag" class="flag"> Suomi</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar>

        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </b-container>
</template>

<script>
import routes from '@/router/routes.js'
// import SearchBox from '@/components/SearchBox.vue'

export default {
  data () {
    return {
      routes,
      flags: {
        fi: require('@/assets/flags/fi.svg'),
        gb: require('@/assets/flags/gb.svg')
      }
    }
  },
  components: {
    // SearchBox
  },
  computed: {
    language () {
      return this.$store.state.language
    },
    flagImage () {
      return require(`@/assets/flags/${this.$store.state.language === 'fi' ? 'fi' : 'gb'}.svg`)
    },
    displayedRoutes () {
      return routes.filter(route => ['Home', 'Products', 'R & D', 'About'].includes(route.name))
    }
  },
  methods: {
    setLanguage (newLanguage) {
      this.$store.commit('setLanguage', newLanguage)
      if (this.$route.params.subCategoryName) this.$router.push('/products')
    },
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

  .flag {
    max-width: 40px;
  }
</style>
