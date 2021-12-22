import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:'',
  },
  mutations: {
    getUser (state, user) {
      state.user = user
    }
  },
  actions: {
    getUser (ctx, user) {
      ctx.commit('getUser', user)
    }
  },
  modules: {
  }
})
