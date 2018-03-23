import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import VueImg from 'v-img'
import * as VueGoogleMaps from 'vue2-google-maps'
import BackToTop from 'vue-backtotop'
import slugify from 'slugify'

import fontawesome from '@fortawesome/fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/fontawesome-free-brands'
import { faSpinner, faChevronUp } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faFacebook, faYoutube, faSpinner, faChevronUp)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BackToTop)
Vue.use(VueImg)
Vue.use(VueGoogleMaps, {
  load: { key: 'AIzaSyBAhIUWHFPvIsQVKeSemfaVf88fdQl4oCs' }
})

// A mixin is a way to have little 'helper functions' globally available on any Vue component
// This is an alternative to having a 'helpers' folder and importing functions in components (less boilerplate)
Vue.mixin({
  methods: {
    slug: str => {
      return slugify(str, {
        lower: true,
        remove: /[$*_+~.()'"!:@]/g
      })
    }
  }
})

// import '@/styles/normalize.css'
// import '@/styles/global.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
