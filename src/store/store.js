import Vue from 'vue'
import Vuex from 'vuex'
import prismic from 'prismic-javascript'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    language: 'en',
    homepageData: {},
    otherpageData: {},
    prismicData: {}
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
        const api = await prismic.getApi('https://renotech.prismic.io/api/v2')
        const response = await api.query('') // Empty query to get all data
        console.log(response)
        console.log(response.results)
        const prismicData = response.results
        commit('setPrismicData', prismicData)
      } catch (err) {
        console.log('Error on loadPrismic action', err)
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
    }
  }
})
