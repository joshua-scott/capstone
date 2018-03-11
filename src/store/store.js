import Vue from 'vue'
import Vuex from 'vuex'
import Prismic from 'prismic-javascript'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    language: 'en',
    homepageData: {},
    otherpageData: {},
    prismicData: {},
    products: []
  },
  actions: {
    async loadAllData ({ commit }) {
      const homepageData = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const otherpageData = await axios.get('https://jsonplaceholder.typicode.com/posts')
      commit('setHomepageData', homepageData)
      commit('setOtherpageData', otherpageData)
    },
    async loadPrismic ({ commit }) {
      // https://prismic.io/docs/javascript/getting-started/integrating-with-an-existing-javascript-project
      try {
        const api = await Prismic.getApi('https://renotech.prismic.io/api/v2')
        const response = await api.query('') // Empty query to get all data
        console.log(response)
        console.log(response.results)
        const prismicData = response.results
        commit('setPrismicData', prismicData)
      } catch (err) {
        console.log('Error on loadPrismic action', err)
      }
    },
    async getProducts ({ commit }) {
      try {
        const api = await Prismic.getApi('https://renotech.prismic.io/api/v2')
        const response = await api.query(
          Prismic.Predicates.at('document.type', 'product')
          // { orderings: '[my.product.date desc]' }
        )
        const data = response.results
        console.log('data:')
        console.dir(data)

        let products = []

        data.forEach(obj => {
          console.log('object in data:')
          console.log({ obj })
          let product = []
          let p = obj.data
          product.name = p.product_name_and_number[0].text
          product.representative = p.product_representative
          product.image = p.repeatable_picture_field[0].picture_1.url
          product.descriptionHeading = p.product_description[0].text
          product.descriptionText = p.product_description[1].text

          console.log({ product })

          products.push(product)
        })

        commit('setProducts', products)
      } catch (err) {
        console.log('Error on getProducts action', err)
      }
    }
  },
  mutations: {
    toggleLanguage (state) {
      state.language = state.language === 'fi' ? 'en' : 'fi'
      console.log(`Language changed to ${state.language}`)
    },
    setHomepageData (state, data) {
      state.homepageData = data
    },
    setOtherpageData (state, data) {
      state.otherpageData = data
    },
    setPrismicData (state, data) {
      state.prismicData = data
    },
    setProducts (state, data) {
      state.products = data
    }
  }
})
