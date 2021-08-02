<template>
  <div id="app">
    <Navbar></Navbar>
    <Home></Home>
  </div>
</template>

<script>
import Navbar from './components/music-app/Navbar.vue'
import Home from './components/music-app/Home.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home
  }
}
</script>

<style>
#app {

}
</style>
