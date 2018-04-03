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
          <b-nav-item v-for="( route, index ) in displayedRoutes" :key="index" :to="route.path" exact>
            {{ language === 'en-gb' ? route.name : route.nameFin }}
          </b-nav-item>
        </b-navbar-nav>

      <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <SearchBox></SearchBox>
          </b-nav-form> -->

          <b-navbar variant="faded" type="light">
            <b-navbar-brand href="#">
              <img class="flag" :src="flagImage">
            </b-navbar-brand>
            <b-nav-item-dropdown :text="languageText" right>
              <b-dropdown-item @click="setLanguage('en-gb')"><img :src="flags.gb" alt="GB flag" class="flag"> {{ languageEnglishText }}</b-dropdown-item>
              <b-dropdown-item @click="setLanguage('fi')"><img :src="flags.fi" alt="Finland flag" class="flag"> {{ languageFinnishText }}</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar>

          <!-- <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Sign in</b-dropdown-item>
            <b-dropdown-item href="#">Sign up</b-dropdown-item>
          </b-nav-item-dropdown> -->
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

    // gets the corresponding display to the current site language
    languageText () {
      return this.$store.state.language === 'fi' ? this.languageFinnishText : this.languageEnglishText
    },
    // displaying text of 'English' in chosen language
    languageEnglishText () {
      let english = this.$store.state.language === 'fi' ? 'Englanti' : 'English'
      return english
    },
    // displaying text of 'Finnish' in chosen language
    languageFinnishText () {
      let finnish = this.$store.state.language === 'fi' ? 'Suomi' : 'Finnish'
      return finnish
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

  .flag {
    max-width: 40px;
  }
</style>
