<template>
  <div id="app">
    <router-view/>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from './components/tabBar/tabBar'
export default {
  name: 'App',
  components: {TabBar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 50px;
}
</style>
