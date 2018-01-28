import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    language: 'en'
  },
  mutations: {
    toggleLanguage (state) {
      state.language = state.language === 'fi' ? 'en' : 'fi'
      console.log(`Language changed to ${state.language}`)
    }
  }
})
