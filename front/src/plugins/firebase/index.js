/**
 * Firebase
 * @library
 */
// Lib imports
import * as firebase from 'firebase'
import { appConfig } from '@/services/utils'

const AppConfig = appConfig

export default (Vue, options) => {
  if (options && options.isOffline) {
    delete options.isOffline
    const firebaseConfig = Object.assign({}, AppConfig.FIREBASE, (options && options.FIREBASE) || {})
    Vue.nextTick(function () {
      firebase.initializeApp(firebaseConfig)
    })
  }
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {
      return firebase
    }
  })
}
