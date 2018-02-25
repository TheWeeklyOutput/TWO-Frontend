import { log } from '../utils.js'
import * as muts from './mutation-types.js'
import * as acts from './action-types.js'

export default {
  state: {
    currentStyle: 1
  },
  mutations: {
    [muts.SET_STYLE] (state, payload) {
      console.log(payload)
    }
  }
}
