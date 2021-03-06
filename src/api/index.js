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
    articles: [],
    currentArticle: null, 
    categories: [],
    loaded: false,
    categoryCount: 0,
    currentCategoryPage: 1
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
    [acts.SET_UP] ({ commit, dispatch, state }, { context }) {
      dispatch(acts.GET_CATEGORIES, { 
            context
        })
    },
    [acts.REST_CALL]({ commit, getters }, { promise, action, context, onSuccess, onError }) {
      promise.then(
        apiCallbackFunction({ commit, getters }, {
          success: true, action, message: 'REST Call Successful', next: onSuccess
        }), apiCallbackFunction({ commit, getters }, {
          success: false, action, message: 'Error:', next: onError
        })
      )
    },
    [acts.GET_CATEGORIES] ({ state, dispatch, commit }, { context }) {
      dispatch(acts.REST_CALL, {
        promise: context.$http.get('corpora/categories/'),
        action: acts.GET_CATEGORIES, context,
        onSuccess(res) {
          log.dir(res)
          state.categories = res.body
          state.categories.forEach((category) => {

            dispatch(acts.GET_CATEGORY_PAGE, { context, category: category.slug, page: 1 });
          })

          commit(muts.SET_LOADED, {
            status: false
          })

        }, onError(res) { 

        }
      })
    },
    [acts.GET_ARTICLE_BY_SLUG]({ commit, dispatch }, { context, slug }) {
      dispatch(acts.REST_CALL, {
        promise: context.$http.get('corpora/slug/' + slug + '/'),
        action: acts.GET_ARTICLE_BY_SLUG, context,
        onSuccess(res) {
          log.dir(res)
          commit(muts.UPDATE_CURRENT_ARTICLE, { article: res.body })
          commit(muts.SET_LOADED, {
            status: true
          })

        }, onError (res) {}
      })
    },
    [acts.GET_CATEGORY_PAGE] ({ commit, dispatch, state }, { context, category, page }) {
      dispatch(acts.REST_CALL, {
        promise: context.$http.get('corpora/' + category + '/' + page + '/'),
        action: acts.GET_CATEGORY_PAGE, context,
        onSuccess(res) {
          return new Promise((resolve, reject) => {

            log.dir(res)
            commit(muts.UPDATE_ARTICLES, { category, articles: res.body })
            resolve()
          })
        }, onError(res) {}
      })
    },
    [acts.CHANGE_PAGE_TITLE]({ state, dispatch, commit, getters }, { title }) {
      document.title = title
    }
  },
  mutations: {
    [muts.UPDATE_CURRENT_ARTICLE](state, { article }) {
      state.currentArticle = article
    },
    [muts.UPDATE_ARTICLES] (state, { category, articles }) {

        if (!(articles.hasOwnProperty(category))) {
          state.articles[category] = []
          if (state.categoryCount < state.categories.length) {
            state.categoryCount ++
          }
        }
        state.articles[category] = state.articles[category].concat(articles)      
    },
    [muts.SET_LOADED] (state, { status }) {
      state.loaded = status
    }
  }
}
