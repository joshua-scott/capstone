import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: { key: 'AIzaSyBAhIUWHFPvIsQVKeSemfaVf88fdQl4oCs' }
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
