import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    language: 'en-gb',
    homepageData: {},
    otherpageData: {},
    prismicData: {},
    products: [],
    categories: [],
    subCategories: []
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
        // console.log(response)
        // console.log(response.results)
        const prismicData = response.results
        commit('setPrismicData', prismicData)
      } catch (err) {
        console.log('Error on loadPrismic action', err)
      }
    },

    // gets all product type documents
    async getProducts ({ commit }) {
      try {
        const api = await Prismic.getApi('https://renotech.prismic.io/api/v2')
        const response = await api.query(
          Prismic.Predicates.at('document.type', 'product'),
          { lang: '*' }
          // { orderings: '[my.product.date desc]' }
        )
        const data = response.results
        // console.log('products:', data)

        let products = []

        data.forEach(obj => {
          // console.log('object in data:')
          // console.log({ obj })
          let product = {}
          const p = obj.data
          product.language = obj.lang
          product.subCategory = p['sub-category'].id
          product.name = p.product_name[0].text
          product.number = p.product_number
          product.representative = p.product_representative
          product.image = p.repeatable_picture_field[0].picture_1.url
          product.description = PrismicDOM.RichText.asHtml(p.product_description)
          product.salesUnit = p.sales_unit

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
    }
  },
  mutations: {
    toggleLanguage (state) {
      state.language = state.language === 'fi' ? 'en-gb' : 'fi'
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
    },
    setCategories (state, data) {
      state.categories = data
    },
    setSubCategories (state, data) {
      state.subCategories = data
    }
  }
})
