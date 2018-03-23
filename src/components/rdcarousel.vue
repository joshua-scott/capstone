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

.carousel-control-next-icon {
    background-image : url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E")
}

</style>
