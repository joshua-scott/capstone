<template>
  <div id="app">
    <app-header :width="width" />
    <router-view />
    <app-footer />
    <back-to-top />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'

export default {
  name: 'App',
  data () {
    return {
      width: window.innerWidth
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    BackToTop
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    }
  },
  beforeMount () {
    this.$store.dispatch('getCarousel')
    this.$store.dispatch('getAboutPage')
    this.$store.dispatch('getRdPages')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getSubCategories')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getRdImages')
    this.$store.dispatch('getProductlines')
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
