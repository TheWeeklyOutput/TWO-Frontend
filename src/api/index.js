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
    [acts.GET_ARTICLES_BY_CATEGORIES] ({ state, dispatch, commit, getters }, { category }) {
      state.articles[category] = testArticles.articles[category]
      console.log(id)
    },
    [acts.GET_ARTICLE_BY_ID] ({ state, dispatch, commit, getters }, { id }) {
      state.articles.currentArticle = testArticles.articles.currentArticle
      console.log(id)      
    }
  },
  mutations: {
    // [muts.MUTATION] (state, arg) {
    // 
    // }
  }
}
