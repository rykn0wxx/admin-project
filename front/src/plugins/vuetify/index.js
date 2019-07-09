/**
 * Vuetify
 * @library
 */
// Lib imports
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import './app-theme.styl'

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
    'secondary-variant': '#5127c4',
    accent: '#00d4b7',
    'accent-light': '#53f2e2',
    'accent-variant': '#00b294',
    error: '#FF5630',
    info: '#6554C0',
    success: '#36B37E',
    warning: '#FFAB00',
    background: '#18191c',
    onlight: '#ECF0F1',
    ondark: '#050709',
    surface: '#303033',
    'surface-dp01': '#242528',
    'surface-dp02': '#28292c',
    'surface-dp03': '#2a2b2e',
    'surface-dp04': '#2d2e30',
    'surface-dp06': '#313235',
    'surface-dp08': '#343538',
    'surface-dp12': '#39393c',
    'surface-dp16': '#3a3b3e',
    'surface-dp24': '#3d3e40'
  }
})
