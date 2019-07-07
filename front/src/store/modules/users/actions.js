// https://vuex.vuejs.org/en/actions.html
import { UserService } from '@/services/api'

export default {
  async SET_USER ({ commit }, payload) {
    try {
      const userResponse = await UserService.get(payload)
      commit('SET_USER', userResponse.data)
    } catch (error) {
      console.error(error)
    }
  }
}
