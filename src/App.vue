<template>
  <div id="app">
    <router-view/>
    <TabBar/>
    <!-- <MyVuePreview/> -->
  </div>
</template>

<script>
import TabBar from './components/tabBar/tabBar'
import MyVuePreview from './components/myVuePreview/myVuePreview'
export default {
  name: 'App',
  components: {TabBar, MyVuePreview}
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 55px;
}
.mint-toast-icon{
  font-size: 30px;
}
</style>
