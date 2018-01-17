import * as mainMuts from '../store/mutation-types.js'
import * as muts from './mutation-types.js'
import * as acts from './action-types.js'
import { log } from '../utils.js'
import testArticles from './articles.js'
import { TOGGLE_LOADING } from './mutation-types.js';

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
    state: {
      articles: {
        highlights: [],
        topArticles: [],    
        mostShared: [],
        mostLiked: [],
        newest: [],
        currentArticle: {}    
      },
      categories: {},
      isLoading: false
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
    },
    [acts.GENERATE_TEXT] ({ commit, dispatch }, { context, category }) {
      dispatch(acts.REST_CALL, {
        promise: context.$http.get('mangler/generate/' + category),
        action: acts.GENERATE_TEXT, context,
        onSuccess (res) {
          log.dir(res)
          commit(muts.UPDATE_CURRENT_ARTICLE, { article: res.body })
        }, onError (res) {}
      })
    },
    [acts.GET_ARTICLES_BY_CATEGORIES] ({ state, dispatch, commit, getters }, { categories }) {
      commit(TOGGLE_LOADING)
      state.categories = testArticles.categories
      
      if(categories[0] === 'all') {
          state.articles = testArticles.articles
          state.categories.forEach (function(category) {
            state.articles[category.slug] = testArticles.articles[category.slug]
          })
      }
      categories.forEach (function(category) {
        state.articles[category] = testArticles.articles[category]
      })
      commit(TOGGLE_LOADING)
      
    },
    [acts.GET_ARTICLE_BY_SLUG] ({ state, dispatch, commit, getters }, { category, slug }) {
      commit(TOGGLE_LOADING)
      
      const article = testArticles.articles[category].find(art => art.slug === (slug))
      state.articles.currentArticle = article   
      commit(TOGGLE_LOADING)
      
    },

    [acts.CHANGE_PAGE_TITLE] ({ state, dispatch, commit, getters }, { title }) {
      document.title = title
    }

  },
  mutations: {
    [muts.UPDATE_CURRENT_ARTICLE] (state, { article }) {
      state.currentArticle = {
        title: article.title,
        text: article.text,
        entities: article.entities,
        author: 'No Autor',
        imageURL: 'No Image'
      }
    },
    [muts.TOGGLE_LOADING] (state){
      state.isLoading = !state.isLoading
    }
  }
}
