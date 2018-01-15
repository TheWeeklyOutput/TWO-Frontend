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
  import articleHandlerMixin from './mixins/articlehandler.js'
  import * as articleHandlerMuts from './api/articlehandler/mutation-types.js'
  import * as articleHandlerActs from './api/articlehandler/action-types.js'
  import themeSwitcherMixin from './mixins/themeswitcher.js'

  export default {
    mixins: [
      articleHandlerMixin, 
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
      this.$store.dispatch(articleHandlerActs.GET_ARTICLES_BY_CATEGORIES, {
          categories: ['all']
      })
    }
  }
</script>

<style>
  
</style>

<style>
</style>