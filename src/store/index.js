import Vue from 'vue'
import Vuex from 'vuex'
import * as muts from './mutation-types'
import * as acts from './action-types'
import api from '../api'
import { log } from '../utils.js'

Vue.use(Vuex)

const state = {
  errors: '',
  messages: ''
}

const mutations = {
    // Mutations
}

const actions = {
    // Actions
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    api
  }
})

export default store
