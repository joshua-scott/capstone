<template lang="pug">
  #app
    appHeader
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
  }
}
</script>

<style>

</style>
