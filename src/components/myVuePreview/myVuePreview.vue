<template>
  <div class="previewSwiper-main" v-if="bigshow" @click="bigshow=false"       >
    <swiper ref="previewSwiper" :options="previewOptions" style="height: 100%;padding:0">
      <swiper-slide v-for="(img, index) in imgList" :key="index" style="margin:0">
        <div class="swiper-zoom-container">
          <img :src="img.url">
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: [],
  data () {
    return {
      previewOptions: {
        // 分页器配置
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable: true
        },
        // 设定初始化时slide的索引
        initialSlide: 0,
        // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        direction: 'horizontal',
        zoom: true,
        // 自适应内容高度
        // autoHeight: true,
        width: window.innerWidth
        // slide高度
        // height: window.innerHeight,
        // 一个屏幕展示的数量
        // slidesPerView: 1,
        // 间距
        // spaceBetween: 50,
        // 修改swiper自己或子元素时，自动初始化swiper
        // observer: true,
        // 修改swiper的父元素时，自动初始化swiper
        // observeParents: true
      },
      imgList: [
        {
          url: this.base + 'home-banner1.jpg'
        },
        {
          url: this.base + 'home-banner2.jpg'
        },
        {
          url: this.base + 'home-banner3.jpg'
        }
      ],
      bigshow: true
    }
  },
  created () {},
  mounted () {},
  computed: {
    swiper () {
      return this.$refs.previewSwiper.$swiper
    }
  },
  methods: {
    clickpicture () {
      this.bigshow = true
    },
    toggle () {
      alert('11')
      this.swiper.zoom.toggle()
    },
    touchMove () {
      console.log(event)
    }
  },
  watch: {}
}
</script>
<style lang="less">
.previewSwiper-main{
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10000;
  background-color: black;
  .swiper-container{
    // width: 100%;
    // height: 100vh;
    // background-color: black;
  }
  .swiper-wrapper{
    // width: 100%;
    // height: 100vh;
    // background-color: black;
    .swiper-slide{
      // width: 100%;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      // .swiper-zoom-container{
      //   width: 100%;
      //   img{
      //     width: 100%;
      //   }
      // }
    }
  }
  .swiper-pagination{
    font-size: 16px;
    color: #fff;
  }
}
</style>
