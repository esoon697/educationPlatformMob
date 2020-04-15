<template>
  <div class="header-main">
    <!-- <mt-header title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> -->
    <slot name="left"></slot>
    <span class="centerPart ellipsis" :title="title">{{title}}</span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['title'],
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {
  },
  watch: {}
}
</script>
<style lang="less">
.header-main {
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  font-size: 14px;
  background-color: #fff;
  .centerPart{
    flex: 2;
    font-size: 18px;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: rgba(17,31,44,1);
    line-height: 50px;
    text-align: center;
  }
  .leftPart{
    flex: 1;
    line-height: 50px;
    text-align: left;
    .iconfont{
      font-size: 16px;
    }
  }
  .rightPart{
    flex: 1;
    line-height: 50px;
    text-align: right;
  }
}
</style>
