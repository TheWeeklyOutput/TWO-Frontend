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
        }
      },
      2: {        
        article: {
          sidebarDescriptionShown: false,
          sidebarImageStyle: 'image-above'
        },
        home: {
          descriptionShown: false
        }

      },
      3: {        
        article: {
          sidebarDescriptionShown: false,
          sidebarImageStyle: 'image-above'
        },
        home: {
          descriptionShown: true
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
