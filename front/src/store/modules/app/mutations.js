// https://vuex.vuejs.org/en/mutations.html
export default {
  SET_NAVBAR_MODEL (state, payload) {
    state.navBar.model = payload
  },
  SET_NAVBAR_MINI (state, payload) {
    state.navBar.mini = payload
  },
  SET_TOPBAR_MODEL (state, payload) {
    state.topBar.model = payload
  }
}
