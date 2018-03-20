<template lang="pug">
  #app
    app-header
    navbar
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
  components: {
    appHeader: Header,
    Navbar,
    appFooter: Footer,
    FontAwesomeIcon
  },
  beforeMount () {
    this.$store.dispatch('getHomepageData')
    this.$store.dispatch('getCarousel')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getSubCategories')
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
