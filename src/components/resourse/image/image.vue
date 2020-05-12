<template>
  <div class="image-main">
    <img v-if="url" :src="url" alt="">
    <div v-else class="img-bg">暂无数据</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['url'],
  data () {
    return {
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
.image-main{
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    max-width: 100%;
    max-height: 300px;
  }
  .img-bg{
    // width: 100px;
    max-height: 300px;
    background-color: #000;
    color: white;
    line-height: 300px;
    text-align: center;
    font-size:18px;
    font-family:Alibaba PuHuiTi;
    font-weight:bold;
  }
}
</style>
