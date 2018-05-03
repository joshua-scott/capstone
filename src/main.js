import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import VueImg from 'v-img'
import * as VueGoogleMaps from 'vue2-google-maps'
import slugify from 'slugify'

// Font Awesome icons
import fontawesome from '@fortawesome/fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp'
import faChevronCircleDown from '@fortawesome/fontawesome-free-solid/faChevronCircleDown'
import faChevronCircleRight from '@fortawesome/fontawesome-free-solid/faChevronCircleRight'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

fontawesome.library.add(
  faFacebook,
  faYoutube,
  faSpinner,
  faChevronUp,
  faChevronCircleDown,
  faChevronCircleRight,
  faSearch
)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
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
        remove: /[$*_+~.()'"!:@,]/g
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
