import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:'',
    user_id:'',
  },
  mutations: {
    getUser (state, user) {
      state.user = user
    },
    getUserId(state,user_id){
      state.user_id = user_id
    }
  },
  actions: {
    getUser (ctx, user) {
      ctx.commit('getUser', user)
    },
    getUserId(ctx,user_id){
      ctx.commit('getUserId',user_id)
    }
  },
  modules: {
  }
})
