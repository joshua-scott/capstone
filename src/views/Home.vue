<template lang="pug">
<div>
    <carousel></carousel>
</div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
  components: {
    Carousel
  },
  computed: {
    // gets HomePage data in current language
    getData () {
      const language = this.$store.state.language
      const homePage = this.$store.state.homePages.filter(page => page.language === language)
      return homePage
    }
  }
}
</script>

<style>

</style>
