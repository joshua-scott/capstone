<template>
  <b-container style="margin-top: 30px">
    <b-alert show v-if="!product">
      {{ noProduct[lang] }} <router-link to="/products">{{ viewAll[lang] }}</router-link>
    </b-alert>
    <b-row v-else>
      <b-col xs="12" lg="6">
        <h2>{{ product.name }}</h2>
        <div v-html="product.description"></div>
        <p>Sold by the: {{ product.salesUnit }}</p>
        <p>Contact: {{ product.representative }}</p>
        <div class="document" v-if="product.document">
          <p>{{ lang === 'fi' ? 'Lataa ' : 'Download ' }}<b-link :href="product.document.url">{{ product.document.name }}</b-link></p>
        </div>
      </b-col>
      <b-col xs="12" lg="6">
        <b-img v-img fluid :src="product.image"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ['productNumber'],
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
    product () {
      const products = this.$store.state.products
      const language = this.$store.state.language
      return products.find(prod => {
        return prod.number === Number(this.productNumber) &&
          prod.language === language
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
