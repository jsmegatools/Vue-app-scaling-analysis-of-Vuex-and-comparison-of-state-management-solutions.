<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  name: 'app',
  components: {
    toolbar: Toolbar
  }
}
</script>

<style>
@import 'assets/css/global.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%
}
</style>
