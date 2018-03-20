<template lang="pug">
  #app
    app-header
    navbar
    router-view
    app-footer
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    Navbar,
    appFooter: Footer
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

</style>
