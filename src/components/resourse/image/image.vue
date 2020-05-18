<template>
  <div class="image-main" @click="imgPreview">
    <img v-if="url" v-lazy="url" alt="" lazy="loading">
    <!-- <VuePreview v-if="url" :src="url"/> -->
    <!-- <div v-if="url" class="img-box" v-lazy:background-image="url" lazy="loading"></div> -->
    <!-- <div v-if="url" class="img-box" :style="{backgroundImage:`url(${url})`}"></div> -->
    <div v-else class="img-bg">暂无数据</div>
  </div>
</template>

<script>
import VuePreview from '../../vuePreview//vuePreview'
export default {
  components: {VuePreview},
  props: ['url'],
  data () {
    return {
      // url: 'http://182.148.48.236:54321/source/educationBackServer/images/responsibility_01.png'
    }
  },
  created () {},
  mounted () {
    console.log(this.url)
  },
  computed: {},
  methods: {
    // 预览图片
    imgPreview () {
      console.log(this.$store.state.isPreview)
      let previewImgs = []
      previewImgs.push(this.url)
      this.$store.state.isPreview = true
      this.$store.state.previewImgs = previewImgs
    }
  },
  watch: {}
}
</script>
<style lang="less" scoped>
.image-main{
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  .img-box{
    width: 100%;
    height: 260px;
    background-color: #000;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  img{
    max-width: 100%;
    max-height: 300px;
  }
  .img-bg{
    width: 100%;
    height: 260px;
    background-color: #000;
    color: white;
    line-height: 260px;
    text-align: center;
    font-size:18px;
    font-family:Alibaba PuHuiTi;
    font-weight:bold;
  }
  // img[lazy=loading] {
  //   width: 100%;
  //   height: 100%;
  // }
}
</style>
