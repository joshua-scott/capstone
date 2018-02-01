import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    language: 'en',
    sampleData: {}
  },
  actions: {
    async loadSampleData ({ commit }) {
      const sampleData = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(sampleData)
      commit('setSampleData', sampleData.data)
    }
  },
  mutations: {
    toggleLanguage (state) {
      state.language = state.language === 'fi' ? 'en' : 'fi'
      console.log(`Language changed to ${state.language}`)
    },
    setSampleData (state, data) {
      state.sampleData = data
    }
  }
})
