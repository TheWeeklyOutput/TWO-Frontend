import { log } from '../utils.js'
import * as muts from './mutation-types.js'
import * as acts from './action-types.js'

export default {
  state: {
    currentStyle: Math.round(Math.random()) + 1,
    styleSettings: {
      1: {        
        article: {
          sidebarDescriptionShown: true,
          sidebarImageStyle: 'no'
        },
        home: {
          descriptionShown: false
        },
        affix: {
          offset: {
            top: 40,
            bottom: 40,
          }
        }
      },
      2: {        
        article: {
          sidebarDescriptionShown: false,
          sidebarImageStyle: 'image-above'
        },
        home: {
          descriptionShown: false
        },
        affix: {
          offset: {
            top: 40,
            bottom: 40,
          }
        }


      },
      3: {        
        article: {
          sidebarDescriptionShown: false,
          sidebarImageStyle: 'image-above'
        },
        home: {
          descriptionShown: true
        },
        affix: {
          offset: {
            top: 0,
            bottom: 0,
          }
        }


      }
    }
  },
  actions: {
    [acts.SET_DESIGN_MATOMO] ({ state }, { design }) {    
    }

  },
  mutations: {
    [muts.SET_STYLE] (state, payload) {
      state.currentStyle = payload.payload
    }
  }
}
