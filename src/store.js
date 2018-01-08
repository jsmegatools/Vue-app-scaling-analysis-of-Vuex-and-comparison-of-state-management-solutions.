import Vue from 'vue'
import Vuex from 'vuex'
import Profiles from './mock_data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    added: [],
    addedMap: {},
    profilesMap: Profiles.reduce((memo, next) => ({ [next.id]: next, ...memo }), {})
  },
  getters: {
    added (state) {
      return state.added.map(id => {
        return state.profilesMap[id]
      })
    }
  },
  mutations: {
    addToCheckLater (state, payload) {
      if (state.addedMap[payload]) return
      state.addedMap = { ...state.addedMap, [payload]: true }
      state.added = [ payload, ...state.added ]
    },
    removeFromCheckLater (state, payload) {
      // This does not get noticed by Vuex, until we reassign it
      delete state.addedMap[payload]
      // Now it gets noticed
      state.addedMap = { ...state.addedMap }
      state.added.splice(state.added.indexOf(payload), 1)
      state.added = [ ...state.added ]
    }
  }
})
