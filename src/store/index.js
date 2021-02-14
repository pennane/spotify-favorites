import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: null,
        data: null
    },
    mutations: {
        setAccessToken(state, token) {
            state.accessToken = token
        },
        setData(state, data) {
            state.data = data
        }
    }
})
