import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
  user: {
    name: localStorage.getItem("name"),
    authenticated: localStorage.getItem("authenticated"),
    token: localStorage.getItem("token")
  },
  teams: [/* {id, name} */],
  boards: [/* {id, name, description, teamId} */],
  isios: false,
  token: false
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
