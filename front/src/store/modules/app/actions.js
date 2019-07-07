// https://vuex.vuejs.org/en/actions.html

export default {
  SET_NAVBAR_MODEL ({ commit }, payload) {
    commit('SET_NAVBAR_MODEL', payload)
  },
  SET_NAVBAR_MINI ({ commit }, payload) {
    commit('SET_NAVBAR_MINI', payload)
  },
  SET_TOPBAR_MODEL ({ commit }, payload) {
    commit('SET_TOPBAR_MODEL', payload)
  }
}
