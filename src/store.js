import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    added: [],
    addedMap: {}
  },
  mutations: {
    addToCheckLater (state, payload) {
      if (state.addedMap[payload]) return
      state.addedMap = { ...state.addedMap, [payload]: true }
      state.added = [ payload, ...state.added ]
    }
  }
})
