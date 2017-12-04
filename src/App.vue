<template>
  <div id="app">
    <Navbar>
    </Navbar>
    <router-view></router-view>
    <FooterBar></FooterBar>
  
  </div>
</template>

<script>
  import FooterBar from './components/Footer'
  import Navbar from './components/Navbar'
  
  export default {
    components: {
      FooterBar,
      Navbar
    }
  }
</script>

<style>
  
</style>

<style>
  @import url('https://fonts.googleapis.com/css?family=Unna');
  * {
    font-family: 'Unna', serif;
    font-weight: 100
  }
  
  body {
    font-size: 1em;
  }
  
  h1 {
    font-size: 1.25em;
  }
  
  h2 {
    font-size: .9375em;
  }
  
  h3 {
    font-size: .8125em;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }
  
  .fade-enter-active {
    transition-delay: .25s;
  }
  
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>