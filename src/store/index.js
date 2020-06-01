import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS_TO_VUEX: (state, users) => {
      state.users = users
    }
  },
  actions: {
    GET_USERS_FROM_API({commit}) {
      return axios('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_USERS_TO_VUEX', response.data)
        })
    }
  },
  modules: {
  },
  getters: {
    USERS(state) {
      return state.users
    }
  }
})
