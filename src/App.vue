<template lang="pug">
  #app
    app-header
    navbar(:width="width")
    router-view
    app-footer
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

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
    appFooter: Footer
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    }
  },
  beforeMount () {
    this.$store.dispatch('getHomepageData')
    this.$store.dispatch('getCarousel')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getSubCategories')
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

</style>
