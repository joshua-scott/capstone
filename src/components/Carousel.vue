<template lang="pug">
  <b-container fluid>
    b-carousel(
      class="carousel"
      controls
      img-height="400"
      indicators
      :interval="5000")
      template(v-for="(slide, index) in slides")
        b-carousel-slide(
          :key="index"
          :img-src="slide.imageUrl"
          :caption="slide.heading"
          :text="slide.description")
  </b-container>
</template>

<script>
export default {
  computed: {
    slides () {
      const slides = this.$store.state.carouselItems
      const language = this.$store.state.language
      return slides.filter(slide => slide.language === language)
    }
  }
}
</script>

<style lang="scss" scoped>
  .carousel {
    margin-top: 30px;
    text-shadow: 1px 1px 2px #333;
  }
</style>
