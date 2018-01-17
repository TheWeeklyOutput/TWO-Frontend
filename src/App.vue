<template>
  <div v-if="loaded" id="app" :class="'style-' + themeSwitcher.currentStyle">
    <div class="site-wrapper">
      <Navbar v-on:click="test1 = false">
      </Navbar>

      <router-view></router-view>
    </div>
    <FooterBar></FooterBar>

    <style1></style1>
  
  </div>
</template>

<script>
  import FooterBar from './components/Footer'
  import Navbar from './components/Navbar'
  import Style1 from './styles/Style1'
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
      FooterBar,
      Navbar,
      Style1
    },
    created() {
      this.$store.dispatch(apiActs.SET_UP, {
        context: this,
      })
    },
    data() {
      return {
      } 
    },
    computed: {
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