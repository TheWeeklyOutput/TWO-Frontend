import Vue from 'vue'
import Vuex from 'vuex'
import * as muts from './mutation-types'
import * as acts from './action-types'
import articleHandler from '../api/articlehandler'
import themeSwitcher from '../api/themeswitcher'
import { TitleList } from './titlelist'


import { log } from '../utils.js'

Vue.use(Vuex)

const state = {
  errors: '',
  messages: '',
  TitleList
}

const mutations = {
  [muts.UPDATE_MESSAGES] (state, messages) {
    log.info(muts.UPDATE_MESSAGES, '')
    log.dir(messages)
    state.messages = messages
  },
  [muts.UPDATE_ERRORS] (state, res) {
    log.error(muts.UPDATE_ERRORS, '')
    log.dir(res.data)
    state.errors = res.data
  },
  [muts.CLEAR_ERRORS] (state) {
    state.errors = ''
  },
  [muts.CLEAR_MESSAGES] (state) {
    state.messages = ''
  }
}

const actions = {
    // Actions
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    articleHandler,
    themeSwitcher
  }
})

export default store
