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
    this.$store.dispatch('loadAllData')
    this.$store.dispatch('loadPrismic')
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>

</style>
