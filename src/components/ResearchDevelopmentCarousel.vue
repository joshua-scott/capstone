<template lang="pug">
  b-container
    b-carousel(
      class="rdcarousel"
      controls
      indicators
      :interval="5000")
      template(v-for="(slide, index) in slides")
        b-carousel-slide(
          :key="index"
          :img-src="slide.img")
</template>

<script>
export default {
  data () {
    return {
      slides: [
        { img: require('@/assets/r&d_images/rd-service-1.jpg') },
        { img: require('@/assets/r&d_images/rd-service-2.jpg') },
        { img: require('@/assets/r&d_images/rd-service-3.jpg') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .rdcarousel {
    margin-top: 30px;
    text-shadow: 1px 1px 2px #333;
  }

</style>
