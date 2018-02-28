import { log } from '../utils.js'
import * as muts from './mutation-types.js'
import * as acts from './action-types.js'

export default {
  state: {
    currentStyle: Math.round(Math.random()) + 1
  },
  actions: {
    [acts.SET_DESIGN_MATOMO] ({ state }, { design }) {    
    }

  },
  mutations: {
    [muts.SET_STYLE] (state, payload) {
      state.currentStyle = payload.payload
    }
  }
}
