<template>
  <div class="tabBar-main">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="/home" @click="gotoNav('/home')">
        <img slot="icon" :src="selected=='/home'?base+'tabBar_cion1_active.png':base+'tabBar_cion1.png'">
        首页
      </mt-tab-item>
      <mt-tab-item id="/courses">
        <img slot="icon" :src="selected=='/courses'?base+'tabBar_cion2_active.png':base+'tabBar_cion2.png'">
        课程
      </mt-tab-item>
      <mt-tab-item id="/study" @click="gotoNav('/study')">
        <img slot="icon" :src="selected=='/study'?base+'tabBar_cion3_active.png':base+'tabBar_cion3.png'">
        学习
      </mt-tab-item>
      <mt-tab-item id="/user" @click="gotoNav('/user')">
        <img slot="icon" :src="selected=='/user'?base+'tabBar_cion3_active.png':base+'tabBar_cion3.png'">
        学习
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      selected: '/home'
    }
  },
  created () {},
  mounted () {
    this.$nextTick(() => {
      let nowPath = this.$route.path
      this.selected = nowPath
    })
  },
  computed: {},
  methods: {
    // gotoNav (path) {
    //   console.log(path)
    //   let nowPath = this.$route.path
    //   if (nowPath !== path) {
    //     this.$router.replace(path)
    //   }
    // }
  },
  watch: {
    selected (val) {
      switch (val) {
        case '/home':
          this.$router.push('/home')
          break
        case '/courses':
          this.$router.push('/courses')
          break
        case '/study':
          this.$router.push('/study')
          break
        case '/user':
          this.$router.push('/user')
          break
      }
    }
  }
}
</script>
<style lang="less" scoped>
.tabBar-main{
  // height: 50px;
  .tab-item{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 20px;
    height: 20px;
  }
}
</style>
