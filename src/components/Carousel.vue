<template lang="pug">
  b-container
    b-carousel(
      class="carousel"
      controls
      indicators
      :interval="5000")
      template(v-for="(slide, index) in slides")
        b-carousel-slide(
          :key="index"
          :img-src="slide.img"
          :caption="slide.caption"
          :text="slide.text")
</template>

<script>
export default {
  data () {
    return {
      slides: [
        { img: require('@/assets/product_images/1.jpg'), caption: 'First Featured Product', text: 'A short product description' },
        { img: require('@/assets/product_images/2.jpg'), caption: 'Second Featured Product', text: 'A short product description' },
        { img: require('@/assets/product_images/3.jpg'), caption: 'Third Featured Product', text: 'A short product description' },
        { img: require('@/assets/product_images/4.jpg'), caption: 'Final Featured Product', text: 'A short product description' }
      ]
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
