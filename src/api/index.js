import * as muts from './mutation-types.js'
import * as acts from './action-types.js'
import { log } from '../utils.js'
import testArticles from './articles.js'

export default {
  state: {
    articles: {
      topArticles: [],    
      mostShared: [],
      mostLiked: [],
      newest: [],
      currentArticle: {}    
    }
  },
  getters: {
  },
  actions: {
    [acts.GET_ARTICLES_BY_CATEGORIES] ({ state, dispatch, commit, getters }, { categories }) {
      categories.forEach (function(category) {
        state.articles[category] = testArticles.articles[category]
      })
    },
    [acts.GET_ARTICLE_BY_ID] ({ state, dispatch, commit, getters }, { category, id }) {
      // state.articles.currentArticle = testArticles.articles.currentArticle
      const article = testArticles.articles[category].find(art => art.id === (id))
      state.articles.currentArticle = article      
    }
  },
  mutations: {
    // [muts.MUTATION] (state, arg) {
    // 
    // }
  }
}
