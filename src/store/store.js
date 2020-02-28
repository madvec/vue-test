import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store ({
    state: {
        auth:localStorage.getItem('user')
    },
    getters: {
        isAuthenticated (state) {
            return state.auth !== null
        }
    }
});