<template>
  <b-container style="margin-top: 30px">
    <b-alert show v-if="!product">
      {{ noProduct[lang] }} <router-link to="/products">{{ viewAll[lang] }}</router-link>
    </b-alert>
    <b-row v-else>
      <b-col xs="12" lg="6">
        <h2>{{ product.name }}</h2>
        <div v-html="product.description"></div>
        <p>{{ lang === 'fi' ? 'Myydään yksitellen:' : 'Sold by the:' }} {{ product.salesUnit }}</p>
        <p>{{ lang === 'fi' ? 'Yhteystiedot:' : 'Contact:' }} {{ product.representative }}</p>
        <div class="document" v-if="product.documents">
          <h5>{{ lang === 'fi' ? 'Asiakirjat:' : 'Documents:' }}</h5>
          <ul>
            <li v-for="( doc, i ) in product.documents" :key="i">
              <b-link :href="doc.url">{{ doc.name }}</b-link>
            </li>
          </ul>
        </div>
        <!-- <b-card bg-variant="dark" text-variant="white">
          <form name="feedback" method="POST" netlify>
          <h1 class="feed">{{ feedBack[lang] }}</h1>
          <b-form-group horizontal
                :label-cols="6"
                label-size="lg"
                label-class="text-lg-left"
                :label="name[lang]"
                label-for="input_lg">
          <b-form-input id="input_lg" size="sm" name="name"></b-form-input>
          </b-form-group>
          <b-form-group horizontal
                :label-cols="6"
                label-size="lg"
                :label="email[lang]"
                label-for="input_lg">
          <b-form-input id="input_lg" size="sm" name="email"></b-form-input>
          </b-form-group>
          <b-form-group horizontal
                :label-cols="6"
                label-size="lg"
                :label="productName[lang]"
                label-for="input_lg">
          <b-form-input id="input_lg" size="sm" name="product-name"></b-form-input>
          </b-form-group>
          <b-form-group horizontal
                :label-cols="6"
                label-size="lg"
                :label="message[lang]"
                label-for="input_lg">
          <b-form-input id="input_lg" size="lg" name="message"></b-form-input>
          </b-form-group>
          <b-button type="submit" style="margin-top: 20px,margin-bottom: 20px" variant="light">{{ send[lang] }}</b-button>
          </form>
        </b-card> -->
      </b-col>
      <b-col xs="12" lg="6">
        <b-img v-img fluid :src="product.image"></b-img>
      </b-col>
    </b-row>
     <form id="netlify-form-actual" name="feedback" method="post" form-name="feedback" data-netlify="true" netlify>
      <p>
        <label>Your Name: <input type="text" name="name"></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email"></label>
      </p>
      <p>
        <label>Your Email: <input type="text" name="product-name"></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
   
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
      },
      feedBack: {
        fi: 'Palaute',
        'en-gb': 'Feedback'
      },
      name: {
        fi: 'Nimi:',
        'en-gb': 'Name:'
      },
      email: {
        fi: 'Sähköposti:',
        'en-gb': 'E-mail:'
      },
      productName: {
        fi: 'Tuotteen Nimi:',
        'en-gb': 'Product Name:'
      },
      message: {
        fi: 'Viesti:',
        'en-gb': 'Message:'
      },
      send: {
        fi: 'Lähettää:',
        'en-gb': 'Submit'
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
.feed {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}
</style>
