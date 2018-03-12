<template>
  <div id="app" :class="'style-' + themeSwitcher.currentStyle + ' ' + 'overflow-' + isOverflowVisible">
    <transition name="fade">
      <loading-overlay v-if="!loaded" :type="'quality output'"></loading-overlay>
    </transition>
    <div class="site-wrapper">
      <Navbar v-on:click="test1 = false">
      </Navbar>
      
      <div id="router-link">
        <transition name="fade">
          <router-view></router-view>
        </transition>

      </div>
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
        loaded: state => state.api.loaded,
      })
    }
  }
</script>

<style>
  .fade-enter-active {
    transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-leave-active {
    transition: all 0.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .fade-enter, .fade-leave-to {
      opacity: 0;
  }

</style>

<style>
</style>