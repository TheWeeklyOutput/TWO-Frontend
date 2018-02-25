<template>
  <div id="app" :class="'style-' + themeSwitcher.currentStyle + ' ' + 'overflow-' + isOverflowVisible">
    <loading-overlay v-if="!loaded" :type="'nonesense'"></loading-overlay>
    <div class="site-wrapper">
      <Navbar v-on:click="test1 = false">
      </Navbar>

      <router-view id="router-link"></router-view>
    </div>
    <FooterBar></FooterBar>

    <style1></style1>
    <style2></style2>
  
  </div>
</template>

<script>
  import LoadingOverlay from './components/LoadingOverlay'
  import FooterBar from './components/Footer'
  import Navbar from './components/Navbar'
  import Style1 from './styles/Style1'
  import Style2 from './styles/Style2'
  import apiMixin from './mixins/api.js'
  import * as apiMuts from './api/mutation-types.js'
  import * as apiActs from './api/action-types.js'
  import themeSwitcherMixin from './mixins/themeswitcher.js'
  import { mapState } from 'vuex'

  export default {
    mixins: [
      apiMixin, 
      themeSwitcherMixin
    ],
    components: {
      LoadingOverlay,
      Navbar,
      FooterBar,
      Style1,
      Style2
    },
    created() {
      this.$store.dispatch(apiActs.SET_UP, {
        context: this,
      })
      console.log('dispatched')
    },
    computed: {
      isOverflowVisible() {
        if(!this.loaded) {
          return 'hidden'
        } else {
          return 'shown'
        }
      },
      ...mapState({
        loaded: state => state.api.loaded
      })
    }
  }
</script>

<style>
  
</style>

<style>
</style>