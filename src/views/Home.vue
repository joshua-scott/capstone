<template lang="pug">
<div>
    <carousel></carousel>
    <app-footer></app-footer>
</div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Carousel,
    appFooter: Footer
  }
}
</script>

<style>

</style>
