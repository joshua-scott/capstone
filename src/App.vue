<template lang="pug">
  #app
    app-header(:width="width")
    navbar(:width="width")
    router-view
    app-footer
    //- adds a global top-scroller
    <back-to-top bottom="50px" right="50px" visibleOffset="50px">
      <button type="button" class="btn btn-info btn-to-top">
        <font-awesome-icon icon="chevron-up"></font-awesome-icon>
      </button>
    </back-to-top>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'App',
  data () {
    return {
      width: window.innerWidth
    }
  },
  components: {
    appHeader: Header,
    Navbar,
    appFooter: Footer,
    FontAwesomeIcon
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    }
  },
  beforeMount () {
    this.$store.dispatch('getCarousel')
    this.$store.dispatch('getAboutPage')
    this.$store.dispatch('getRdPage')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getSubCategories')
    this.$store.dispatch('getProducts')
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
  /* in your css */
  .btn-to-top {
    width: 60px;
    height: 60px;
    padding: 10px 16px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
    background-color: black;
  }
</style>
