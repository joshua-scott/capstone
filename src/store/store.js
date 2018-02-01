import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    language: 'en',
    homepageData: {},
    otherpageData: {}
  },
  actions: {
    async loadAllData ({ dispatch, commit }) {
      const homepageData = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const otherpageData = await axios.get('https://jsonplaceholder.typicode.com/posts')
      commit('setHomepageData', homepageData)
      commit('setOtherpageData', otherpageData)
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
    }
  }
})
