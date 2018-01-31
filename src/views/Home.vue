<template lang="pug">
  div
    appHeader
    navbar
    carousel
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  components: {
    appHeader: Header,
    Navbar,
    Carousel
  }
}
</script>

<style>

</style>
