<template>
  <div id="app">
    <router-view/>
    <TabBar v-if="isShowTabBar"/>
    <MyVuePreview v-if="isPreview"/>
    <!-- <div class="whole-loading" v-if="loading">loading...</div> -->
    <div class="whole-loading" v-if="loading">
      <img src="../static/imgs/loading_transparency.gif" alt="">
    </div>
  </div>
</template>

<script>
import TabBar from './components/tabBar/tabBar'
import MyVuePreview from './components/myVuePreview/myVuePreview'
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {TabBar, MyVuePreview},
  data () {
    return {
      // isPreview: false
      // isShowTabBar: true
    }
  },
  computed: {
    ...mapState(['isPreview', 'isShowTabBar']),
    ...mapGetters(['loading'])
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
          that.$store.state.isShowTabBar = true
        } else {
          // 横屏
          that.$store.state.isShowTabBar = false
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
  .whole-loading{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #000;
    // font-family: Alibaba PuHuiTi;
    // color: #7d848b;
    // font-size: 18px;
    z-index: 99999;
  }
}
.mint-toast-icon{
  font-size: 30px;
}
</style>
