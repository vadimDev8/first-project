import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'



Vue.use(Vuex) 
export default new Vuex.Store({
    modules: {
        auth, info
    },
    state: {
        error: null,
        rep2: null
    },
    mutations: {
        setError(state, error) {
            state.error = error
        },
        clearError(state) {
            state.error = null
        },
        getRep(state, pbj) {
            state.rep2 = pbj
        }
    },
    getters: {
        error: state => state.error
    }
})

