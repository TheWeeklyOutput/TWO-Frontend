import * as muts from './mutation-types.js'
import * as acts from './action-types.js'
import { log } from '../utils.js'
import testArticles from './articles.js'

export default {
  state: {
    articles: {
      highlights: [],
      topArticles: [],    
      mostShared: [],
      mostLiked: [],
      newest: [],
      currentArticle: {}    
    },
    categories: {}
  },
  getters: {
  },
  actions: {
    [acts.GET_ARTICLES_BY_CATEGORIES] ({ state, dispatch, commit, getters }, { categories }) {
      state.categories = testArticles.categories
      
      if(categories[0] === 'all') {
          state.articles = testArticles.articles
          state.categories.forEach (function(category) {
            state.articles[category.label] = testArticles.articles[category.label]
          })
      }
      categories.forEach (function(category) {
        state.articles[category] = testArticles.articles[category]
      })
    },
    [acts.GET_ARTICLE_BY_ID] ({ state, dispatch, commit, getters }, { category, id }) {
      const article = testArticles.articles[category].find(art => art.id === (id))
      state.articles.currentArticle = article      
    }
  },

}
