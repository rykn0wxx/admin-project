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

// Application imports
import App from './App'
import store from '@/store'
import router from '@/router'

// Application implementation
Vue.use(VueAxios, axios)
sync(store, router)

// import Vue from 'vue'
// import './plugins/vuetify'
// import App from './App.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mixins: [meta],
  render: h => h(App)
}).$mount('#app')
