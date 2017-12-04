<template>
  <div id="app">
    <Navbar v-on:click="test1 = false">
    </Navbar>
    <router-view></router-view>
    <FooterBar></FooterBar>

    <style1></style1>
  
  </div>
</template>

<script>
  import FooterBar from './components/Footer'
  import Navbar from './components/Navbar'
  import Style1 from './styles/Style1'
  
  export default {
    components: {
      FooterBar,
      Navbar,
      Style1
    },
    data() {
      return {
      } 
    }
  }
</script>

<style>
  
</style>

<style>
</style>