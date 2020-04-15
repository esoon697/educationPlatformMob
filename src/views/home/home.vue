<template>
  <div class="home-main">
    <Header :title='"首页"'>
      <span class="leftPart" slot="left" @click="goBack()">
        <i class="iconfont icon-fanhui"></i>
      </span>
      <span class="rightPart" slot="right">登录注册</span>
    </Header>
    <NavBar/>
  </div>
</template>

<script>
import Header from '../../components/header/header'
import NavBar from '../../components/navBar/navBar'
export default {
  components: {Header, NavBar},
  props: {},
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {
    goBack () {
      console.log('back')
    }
  },
  watch: {}
}
</script>
<style lang="less" scoped>
.home-main{
  background:rgba(242,244,245,1);
}
</style>
