import * as muts from './mutation-types.js'
import * as acts from './action-types.js'
import { log } from '../utils.js'

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
  },
  actions: {
    /* [acts.GET_ARTICLE] ({ state, dispatch, commit, getters }, { listType }) {
      let parser = require('rss-parser')
      parser.parseURL('https://www.reddit.com/.rss', function(err, parsed) {
        state.currentArticle.title = parsed.feed.title
        state.currentArticle.text = parsed.feed.
      })*/
  },
  mutations: {
    // [muts.MUTATION] (state, arg) {
    // 
    // }
  }
}
