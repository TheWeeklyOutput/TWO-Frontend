import { mapState } from 'vuex'
import * as muts from '../store/mutation-types.js'

export default {
  computed: {
    ...mapState({
      articleHandler: state => state.articleHandler
    })
  }
}
