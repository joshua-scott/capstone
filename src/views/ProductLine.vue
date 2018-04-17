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
      <b-row>
        <b-col cols="9">
          <h3>{{ productline.productSizes[0].text}}</h3>
          <p v-for="size of productline.productSizes" :key="size.text">
            {{ size.text }}
          </p>
          <div>
            <b-embed type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/Q_I2ZWUcrJ0?list=PLZS9OI300UE-yPTFpfRN9HsZJ2GzjgsKX&amp;ecver=1"
            allowfullscreen>
            </b-embed>
          </div>
        </b-col>
        <b-col>
          <b-media class="b-media-margin" v-for="document of productline.documents" :key="document.name">
            <b-img slot="aside" src="http://www.iconarchive.com/download/i86107/graphicloads/filetype/pdf.ico" width="64" height="64" alt="placeholder" />
            <h5 class="mt-0">{{ document.name }}</h5>
            <b-link :href="document.url">Download</b-link>
          </b-media>
        </b-col>
      </b-row>
    </div>
  </b-container>

</template>
<script>
export default {
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
  opacity:0.6;
  max-height:200px;
}
.header-padding{
}
.b-media-margin{
  margin-bottom:5px;
}
</style>
