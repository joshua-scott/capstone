import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

Vue.use(Vuex)

// eslint-disable-next-line
const dev = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  // State is where all the data is stored
  state: {
    language: 'en-gb',
    homepageData: {},
    products: [],
    carouselItems: []
    subCategories: []
    categories: [],
  },
  // Actions main job is to get data from somewhere else
  // and then commit the mutations defined below
  actions: {
    async getHomepageData ({ commit }) {
      const homepageData = await axios.get('https://jsonplaceholder.typicode.com/posts') // Just pretend data for now
      commit('setHomepageData', homepageData)
    },
    async getProducts ({ commit }) {
      try {
        const api = await Prismic.getApi('https://reno.prismic.io/api/v2')
        const response = await api.query(
          Prismic.Predicates.at('document.type', 'product'),
          { lang: '*' }
        )
        const data = response.results

        let products = []

        data.forEach(obj => {
          // if (dev) console.log({ obj })
          let product = {}
          const p = obj.data
          product.language = obj.lang
          product.name = p.product_name[0].text
          product.number = p.product_number
          product.description = PrismicDOM.RichText.asHtml(p.product_description)
          product.image = p.repeatable_picture_field[0].picture_1.url
          product.subCategory = p['sub-category'].id
          product.representative = p.product_representative
          product.salesUnit = p.sales_unit
          // if (dev) console.log({ product })

          // console.log({ product })

          products.push(product)
        })

        commit('setProducts', products)
      } catch (err) {
        console.log('Error on getProducts action', err)
      }
    },

    // gets all category type documents
    async getCategories ({ commit }) {
      try {
        let api = await Prismic.getApi('https://renotech.prismic.io/api/v2')
        await api.query(
          Prismic.Predicates.at('document.type', 'category'),
          { lang: '*' }
        ).then(function (response) {
          let data = response.results
          let categories = []
          data.forEach(obj => {
            let category = {}
            let c = obj.data
            category.language = obj.lang
            category.name = c.name[0].text
            category.image = c.logo.url
            category.description = c.description
            categories.push(category)
          })
          commit('setCategories', categories)
        })
      } 
      catch (err) {
        console.log('Error on getCategories action', err)
      }
    },

    // gets all sub-category type documents
    async getSubCategories ({ commit }) {
      try {
        let api = await Prismic.getApi('https://renotech.prismic.io/api/v2')
        await api.query(
          Prismic.Predicates.at('document.type', 'sub-category'), 
          { lang: '*' }
        ).then(function (response) {
          let data = response.results
          // console.log('sub category',data);
          
          let subCategories = []
          data.forEach(obj => {
            let subCategory = {}
            let s = obj.data
            subCategory.language = obj.lang
            subCategory.id = obj.id
            subCategory.category = s.category.slug
            subCategory.name = s.name[0].text
            subCategory.description = s.description
            
            subCategories.push(subCategory)
          })
          commit('setSubCategories', subCategories)
        })
      }
      catch (err) {
        console.log('Error on getSubCategories action', err)
      }
    },
    async getCarousel ({ commit }) {
      try {
        const api = await Prismic.getApi('https://reno.prismic.io/api/v2')
        const response = await api.query(
          Prismic.Predicates.at('document.type', 'homepage_carousel')
        )
        const data = response.results

        let carouselItems = []

        data.forEach(obj => {
          const i = obj.data

          // English
          let slideEng = {}
          slideEng.language = 'en-gb'
          slideEng.imageUrl = i.image.url
          slideEng.heading = i.heading__english_[0].text
          slideEng.description = i.description__english_[0].text
          carouselItems.push(slideEng)

          // Finnish
          let slideFin = {}
          slideFin.language = 'fi'
          slideFin.imageUrl = i.image.url
          slideFin.heading = i.heading__finnish_[0].text
          slideFin.description = i.description__finnish_[0].text
          carouselItems.push(slideFin)
        })

        commit('setCarousel', carouselItems)
      } catch (err) {
        console.log('Error on getCarousel action', err)
      }
    }
  },
  // Mutations are the only place we actually alter the state
  mutations: {
    toggleLanguage (state) {
      state.language = state.language === 'fi' ? 'en-gb' : 'fi'
      console.log(`Language changed to ${state.language}`)
    },
    setHomepageData (state, data) {
      state.homepageData = data
    },
    setProducts (state, data) {
      state.products = data
    },
    setCarousel (state, data) {
      state.carouselItems = data
    },
    setCategories (state, data) {
      state.categories = data
    },
    setSubCategories (state, data) {
      state.subCategories = data
    }
  }
})
