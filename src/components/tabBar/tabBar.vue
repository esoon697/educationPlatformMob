<template>
  <div class="tabBar-main">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="/home">
        <img slot="icon" :src="selected=='/home'?base+'tabBar_cion1_active.png':base+'tabBar_cion1.png'">
        首页
      </mt-tab-item>
      <mt-tab-item id="/courses">
        <img slot="icon" :src="selected=='/courses'?base+'tabBar_cion2_active.png':base+'tabBar_cion2.png'">
        课程
      </mt-tab-item>
      <mt-tab-item id="/study">
        <img slot="icon" :src="selected=='/study'?base+'tabBar_cion3_active.png':base+'tabBar_cion3.png'">
        学习
      </mt-tab-item>
      <mt-tab-item id="/user">
        <img slot="icon" :src="selected=='/user'?base+'tabBar_cion4_active.png':base+'tabBar_cion4.png'">
        我的
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
      this.selected = this.$route.path
    })
  },
  computed: {
    currentPath () {
      return this.$route.path
    }
  },
  methods: {},
  watch: {
    selected (val) {
      switch (val) {
        case '/home':
          this.$router.push('/home')
          this.selected = this.$route.path
          break
        case '/courses':
          this.$router.push('/courses')
          this.selected = this.$route.path
          break
        case '/study':
          this.$router.push('/study')
          this.selected = this.$route.path
          break
        case '/user':
          this.$router.push('/user')
          this.selected = this.$route.path
          break
      }
    },
    currentPath (val) {
      this.selected = val
    }
  }
}
</script>
<style lang="less">
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
  .mint-tab-item-icon{
    display: flex;
    justify-content: center;
  }
}
</style>
