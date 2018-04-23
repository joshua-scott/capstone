<template>
  <b-container role="navigation">
    <b-navbar toggleable="lg" type="light" variant="" class="nav-main">

      <b-navbar-brand>
        <router-link to="/">
          <b-img src="@/assets/logo.jpg" class="renotech-logo"/>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav-collapse">

        <b-navbar-nav class="link-items">
          <template v-for="( route, index ) in displayedRoutes">
            <b-nav-item-dropdown v-if="route.name === 'R & D'" :key="index" text="R & D" class="m-md-2">
              <b-dropdown-header v-for="section in rdSections" :key="section"
              ><router-link :to="`/rd/${section.toLowerCase()}`">{{ section }}</router-link></b-dropdown-header>
            </b-nav-item-dropdown>
            <b-nav-item v-else
              :to="route.path" :key="index" class="m-md-2" exact>
              {{ language === 'en-gb' ? route.name : route.nameFin }}
            </b-nav-item>
          </template>
        </b-navbar-nav>

        <b-navbar-nav>
          <Categories></Categories>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <SearchBox></SearchBox>
          </b-nav-form> -->

          <b-navbar variant="faded" type="light">
            <img class="flag" :src="flagImage">
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
import Categories from '@/views/Categories'
// import SearchBox from '@/components/SearchBox.vue'

export default {
  data () {
    return {
      routes,
      flags: {
        fi: require('@/assets/flags/fi.svg'),
        gb: require('@/assets/flags/gb.svg')
      },
      rdSections: ['Team', 'Publications', 'Partners', 'Contact', 'News']
    }
  },
  components: {
    // SearchBox
    Categories
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

<style scoped lang="scss">
  #nav-collapse {
    text-align: center;

    nav {
      justify-content: center;

      img {
        margin-right: 0.4em;
      }
    }
  }

  .active.nav-link {
    font-weight: 700;
  }

  .router-link-exact-active{
    color: #6c757d !important;
    display: block;
padding: 0.25rem 0.5rem;
font-size: 1.5rem;
white-space: nowrap;
margin-bottom: 0;

  }
  a{
    color: #6c757d !important;
    display: block;
padding: 0.25rem 0.5rem;
font-size: 1.5rem;
white-space: nowrap;
margin-bottom: 0;
  }
  .nav-link{
    padding: 0.5rem 1.5rem;

  }

  .nav-main {
    font-size: 1.5em;
  }

  .link-items {
    margin: auto;
  }

  .flag {
    max-width: 40px;
  }

  @media screen and (max-width: 435px) {
    .nav-main {
      padding: 0;
    }
    .navbar-brand {
      width: 80%;
      max-width: 250px;
      margin-right: 0;
      .renotech-logo {
        width: 80%;
      }
    }
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
