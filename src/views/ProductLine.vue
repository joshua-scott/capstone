<template>
  <b-container>
    <div v-if="productline">
      <b-jumbotron class="jumbotron-styling" text-variant="white" border-variant="dark">
        <h1 class="header-padding">
          {{ productline.name }}
        </h1>
        <!-- <h5>
          Some introductions
        </h5> -->
      </b-jumbotron>
      <p :class="description.type" v-for="description of productline.description" :key="description.text"> {{description.text}}</p>
      <hr>
      <b-row>
        <b-col>
          <p :class="size.type" v-for="size of productline.productSizes" :key="size.text">
            {{ size.text }}
          </p>
          <carousel :images="productline.images" class="edited-carousel"></carousel>
          <div class="video" v-html="productline.video">
          </div>
        </b-col>
        <b-col cols="5">
          <b-media v-show="document.url" class="b-media-margin" v-for="document of productline.documents" :key="document.name">
            <b-img slot="aside" src="https://image.freepik.com/free-icon/pdf-file-format-symbol_318-45340.jpg" width="64" height="64" alt="placeholder" />
            <h6 class="mt-0">{{ document.name }}</h6>
            <b-link :href="document.url">Download</b-link>
          </b-media>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
import carousel from '../components/CarouselProduct.vue'
export default {
  components: {carousel},
  props: ['productlineName'],
  data () {
    return {
      noProduct: {
        fi: 'Anteeksi, emme löytäneet tuotetta.',
        'en-gb': 'Sorry, we couldn\'t find the product you were looking for.'
      },
      viewAll: {
        fi: 'Takaisin tuotteisiin?',
        'en-gb': 'Back to products?'
      }
    }
  },
  computed: {
    lang () {
      return this.$store.state.language
    },
    productline () {
      const productlines = this.$store.state.productlines
      const language = this.$store.state.language
      // console.log(this.productlineName)

      // console.log(productlines.find(prod => {
      //   return this.slug(prod.name) === this.productlineName &&
      //     prod.language === language
      // }))

      return productlines.find(prod => {
        return this.slug(prod.name) === this.productlineName &&
          prod.language === language
      })
    }
  }
}
</script>

<style>
.jumbotron-styling{
  background-color:#263779;
  height:85px;
  padding:25px;
  padding-top:10px;
  color:white;
  border-radius:5px;
  text-align: center;
}
.heading2 {
  /* adds style for heading2 text */
  font-weight: bold;
  font-size: 1.5em;
}
.list-item {
  /* adds style for text as list-item */
  display: list-item;
  list-style-type: square;
  margin-left: 2vw;
}
.b-media-margin{
  margin-bottom:3%;
}
.video{
  margin-top:30px;
  margin-left:2.5%;
}
.edited-carousel{
  margin-left:0px;
  margin-bottom:30px;
}
.cover{
  padding:20px;
  background-color:black;
}
</style>
