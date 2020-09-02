import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        width: 0
    },
    actions: {
        set_width({ commit }, width) {
            commit('set_width', width);
        },
    },
    mutations: {
        set_width(state, width) {
            state.width = width;
        },
    }
})