<template>
  <div class="tabBar-main">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img v-if="selected=='首页'" slot="icon" :src="base+'tabBar_cion1_active.png'">
        <img v-else slot="icon" :src="base+'tabBar_cion1.png'">
        首页
      </mt-tab-item>
      <mt-tab-item id="课程">
        <img v-if="selected=='课程'" slot="icon" :src="base+'tabBar_cion2_active.png'">
        <img v-else slot="icon" :src="base+'tabBar_cion2.png'">
        课程
      </mt-tab-item>
      <mt-tab-item id="学习">
        <img v-if="selected=='学习'" slot="icon" :src="base+'tabBar_cion3_active.png'">
        <img v-else slot="icon" :src="base+'tabBar_cion3.png'">
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
      selected: '首页'
    }
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {},
  watch: {}
}
</script>
<style lang="less" scoped>
.tabBar-main{
  height: 50px;
  img{
    width: 20px;
    height: 20px;
  }
}
</style>
