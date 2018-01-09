import { mapState } from 'vuex'
import * as muts from '../store/mutation-types.js'


export default {
  computed: {
    ...mapState({
        themeSwitcher: state => state.themeSwitcher
    })
  }
}
