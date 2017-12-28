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
      state.added.unshift(payload)
      // state.added = [ payload, ...state.added ]
    },
    removeFromCheckLater (state, payload) {
      delete state.addedMap[payload]
      state.added.splice(state.added.indexOf(payload), 1)
      state.added = [ ...state.added ]
    }
  }
})
