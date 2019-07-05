/**
 * Vuetify
 * @library
 */
// Lib imports
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  options: {
    customProperties: false
  },
  theme: {
    primary: '#264fc1',
    'primary-light': '#9aa7e0',
    'primary-variant': '#113dab',
    secondary: '#6b34d3',
    'secondary-light': '#b79de9',
    'secondary-variant': '##5127c4',
    accent: '#00d4b7',
    'accent-light': '#53f2e2',
    'accent-variant': '#00b294',
    error: '#FF5630',
    info: '#6554C0',
    success: '#36B37E',
    warning: '#FFAB00',
    background: '#18191c',
    onlight: '#ECF0F1',
    ondark: '#050709'
  }
})
