<template>
  <div id="app">
    <router-view/>
    <TabBar v-if="isShowTabBar"/>
    <MyVuePreview v-if="isPreview"/>
  </div>
</template>

<script>
import TabBar from './components/tabBar/tabBar'
import MyVuePreview from './components/myVuePreview/myVuePreview'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {TabBar, MyVuePreview},
  data () {
    return {
      // isPreview: false
      isShowTabBar: true
    }
  },
  computed: {
    ...mapState(['isPreview'])
  },
  created () {
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('messageStore', JSON.stringify(this.$store.state))
    })
    // 在页面加载时读取localStorage里的状态信息
    localStorage.getItem('messageStore') && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem('messageStore'))))
  },
  mounted () {
    this.queryorIentation()
  },
  methods: {
    // 查询屏幕方向
    queryorIentation () {
      if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // pc端
        return
      }
      let that = this
      var mql = window.matchMedia('(orientation: portrait)')
      function onMatchMeidaChange (mql) {
        if (mql.matches) {
          // 竖屏
          that.isShowTabBar = true
        } else {
          // 横屏
          that.isShowTabBar = false
        }
      }
      onMatchMeidaChange(mql)
      mql.addListener(onMatchMeidaChange)
    }
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
