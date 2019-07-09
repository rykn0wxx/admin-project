/**
 * Vue
 * @library
 */
// Lib imports
import Vue from 'vue'

// Application plugins
import '@/sass/app.scss'
import '@/plugins/vuetify'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAnimated from '@codekraft-studio/vue-animated'
// import firebase from '@/plugins/firebase'
import meta from '@/plugins/meta'
import particles from '@/plugins/particles'

// Application imports
import App from './App'
import store from '@/store'
import router from '@/router'
import '@/components/global'

// Application implementation
Vue.use(particles)
Vue.use(VueAxios, axios)
Vue.use(VueAnimated, {
  functional: true,
  defaultDuration: 2000
})
// Vue.use(firebase)
sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mixins: [meta],
  render: h => h(App)
}).$mount('#app')
