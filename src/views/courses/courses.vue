<template>
  <div class="courses-main">
    <!-- <Header :title='"首页"'>
      <span class="leftPart" slot="left" @click="goBack()">
        <i class="iconfont icon-fanhui"></i>
      </span>
      <span class="rightPart" slot="right">登录注册</span>
    </Header> -->
    <CoursesNavBar/>
  </div>
</template>

<script>
// import Header from '../../components/header/header'
import CoursesNavBar from './components/coursesNavBar'
export default {
  components: {CoursesNavBar},
  props: {},
  data () {
    return {
    }
  },
  created () {
    // this.getEduInfo()
  },
  mounted () {},
  computed: {},
  methods: {
    goBack () {
      console.log('back')
    },
    getEduInfo () {
      this.$api.getEduInfo().then(res => {
        console.log(res)
        if (res.code == 200) {
          console.log(res.data)
        }
      })
    }
  },
  watch: {}
}
</script>
<style lang="less" scoped>
.courses-main{
  background:rgba(242,244,245,1);
}
</style>
