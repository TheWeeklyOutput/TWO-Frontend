<template>
  <div id="app" :class="'style-' + themeSwitcher.currentStyle">
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
    data() {
      return {
      } 
    },
    created() {
      this.$store.dispatch(apiActs.GET_ARTICLES_BY_CATEGORIES, {
          categories: ['all']
      })
    }
  }
</script>

<style>
  
</style>

<style>
</style>