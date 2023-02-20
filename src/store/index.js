import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tabName: 'Гематологические анализаторы и реагенты'
    },
    getters: {

    },
    mutations: {
        changeTab(state, n) {
            state.tabName = n
        }
    },
    actions: {},
    modules: {}
})