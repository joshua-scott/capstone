<template lang="pug">
  #app
    app-header
    navbar
    router-view
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    Navbar
  },
  beforeMount () {
    this.$store.dispatch('loadAllData')
    this.$store.dispatch('loadPrismic')
  }
}
</script>

<style>

</style>
