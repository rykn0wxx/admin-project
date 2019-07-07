// https://vuex.vuejs.org/en/getters.html
export default {
  GET_USER: (state) => state.user,
  IS_LOGGEDIN: (state, getters, rootState, rootGetters) => !!state.user && !!rootGetters['auth/GET_TOKEN']
}
