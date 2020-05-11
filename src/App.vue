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
  components: {TabBar, MyVuePreview},
  created () {
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('messageStore', JSON.stringify(this.$store.state))
    })
    // 在页面加载时读取localStorage里的状态信息
    localStorage.getItem('messageStore') && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem('messageStore'))))
  }
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
