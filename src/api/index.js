import * as mainMuts from '../store/mutation-types.js'
import * as muts from './mutation-types.js'
import * as acts from './action-types.js'
import { log } from '../utils.js'

const apiCallbackFunction = ({ getters, commit }, { success, action, message, next }) => {
  const notificationMutation = success ? mainMuts.UPDATE_MESSAGES : mainMuts.UPDATE_ERRORS
  const notificationGetter = success ? getters.getMessagesFromRes : getters.getErrorsFromRes
  const logFunc = success ? log.success : log.error

  return (res) => {
    logFunc(action, message)
    commit(notificationMutation, notificationGetter(res))
    next(res)
  }
}

export default {
  state: {
    currentArticle: {
      title: '',
      text: '',
      author: '',
      imageURL: ''
    },
    topStoriesOfDay: [],
    newestStories: [],
  },
  getters: {
    getMessagesFromRes: () => (res) => {
      if (res.data) {
        return res.data.messages
      } else {
        return ''
      }
    },
    getErrorsFromRes: () => (res) => {
      if (res) {
        return res
      } else {
        return ''
      }
    }
  },
  actions: {
    [acts.REST_CALL] ({ commit, getters }, { promise, action, context, onSuccess, onError }) {
        promise.then(
          apiCallbackFunction({ commit, getters }, {
            success: true, action, message: 'REST Call Successful', next: onSuccess
          }), apiCallbackFunction({ commit, getters }, {
            success: false, action, message: 'Error:', next: onError
          })
        )
    },
    [acts.SEND_TEXT] ({ dispatch }, { context, text }) {
      dispatch(acts.REST_CALL, {
        promise: context.$http.post('corpora/add/', text),
        action: acts.SEND_TEXT, context,
        onSuccess (res) {
          log.dir(text)
        }, onError (res) {}
      })
    },
    [acts.GET_TEXT] ({ commit, dispatch }, { context, slug }) {
      dispatch(acts.REST_CALL, {
        promise: context.$http.get('corpora/get/' + slug),
        action: acts.GET_TEXT, context,
        onSuccess (res) {
          log.dir(res)
          commit(muts.UPDATE_CURRENT_ARTICLE, { article: res.body })
        }, onError (res) {}
      })
    }
  },
  mutations: {
    [muts.UPDATE_CURRENT_ARTICLE] (state, { article }) {
      state.currentArticle = {
        title: article.title,
        text: article.text,
        author: 'No Autor',
        imageURL: 'No Image'
      }
    }
  }
}
