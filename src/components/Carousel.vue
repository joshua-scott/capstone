<template>
  <b-container>
    <b-carousel
      class="carousel"
      controls
      indicators
      :interval="5000"
    >
      <!-- v-for is not working right now -->
      <!-- <b-carousel-slide
        :v-for="slide in slides"
        :caption="slide.caption"
        :text="slides.text || 'No text'"
        :img-src="slide.imgSrc"
      >
        <h1>Hello!!!!</h1>
      </b-carousel-slide> -->

      <template v-for="(slide, index) in slides">
        <b-carousel-slide
          :key="index"
          :img-src="slide.img"
          :caption="slide.caption"
          :text="slide.text"
        ></b-carousel-slide>
      </template>

    </b-carousel>

  </b-container>
</template>

<script>
export default {
  data () {
    return {
      // slide: 0,
      sliding: true,
      slides: [
        { img: require('@/assets/product_images/1.jpg'), caption: 'Example product 1', text: 'Certainly a most wonderful product 12' },
        { img: require('@/assets/product_images/2.jpg'), caption: 'Example product 2', text: 'Certainly a most wonderful product 34' },
        { img: require('@/assets/product_images/3.jpg'), caption: 'Example product 3', text: 'Certainly a most wonderful product 56' },
        { img: require('@/assets/product_images/4.jpg'), caption: 'Example product 4', text: 'Certainly a most wonderful product 78' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .carousel {
    margin-top: 20px;
    text-shadow: 1px 1px 2px #333;
  }
</style>
