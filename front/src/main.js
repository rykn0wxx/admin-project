/**
 * Vue
 * @library
 */
// Lib imports
import Vue from 'vue'

// Application plugins
import '@/plugins/vuetify'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import VueAxios from 'vue-axios'
import meta from '@/plugins/meta'
import particles from '@/plugins/particles'
import VueAnimated from '@codekraft-studio/vue-animated'

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
sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mixins: [meta],
  render: h => h(App)
}).$mount('#app')
