import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: null,
        data: null,
        animations: []
    },
    mutations: {
        setAccessToken(state, token) {
            state.accessToken = token
        },
        setData(state, data) {
            state.data = data
        },
        pushPlayedAnimation(state, animation) {
            state.animations = state.animations.concat(animation)
        }
    }
})
