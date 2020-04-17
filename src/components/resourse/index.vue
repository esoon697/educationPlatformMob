<template>
  <div class="resourse-main">
    <swiper ref="noticeSwiper" :options="swiperOptions">
      <swiper-slide v-for="n in 5" :key="n">
        <Image v-if="n.type==0"/>
        <Video v-if="courrentType==1"/>
        <Task v-if="courrentType==2"/>
      </swiper-slide>
      <!-- <swiper-slide>
        <Image v-if="courrentType==0"/>
        <Video v-if="courrentType==1"/>
        <Task v-if="courrentType==2"/>
      </swiper-slide>
      <swiper-slide>
        <Image v-if="courrentType==0"/>
        <Video v-if="courrentType==1"/>
        <Task v-if="courrentType==2"/>
      </swiper-slide> -->
      <!-- 滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
      <!-- 下一项 -->
      <div class="swiper-button-next"></div>
      <!-- 上一项 -->
      <div class="swiper-button-prev"></div>
      <!-- 标页码 -->
      <!-- <div class="swiper-pagination"></div> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Image from '../resourse/image/image'
import Video from '../resourse/video/video'
import Task from '../resourse/task/task'
export default {
  components: {Image, Video, Task},
  // components: {Video, Task},
  props: {},
  data () {
    return {
      courrentType: 1,
      swiperOptions: {
        // height: 44,
        // 分页器配置
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // 设定初始化时slide的索引
        initialSlide: 0,
        // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        direction: 'horizontal',
        // 自动切换图配置
        autoplay: {
          delay: 3000,
          stopOnLastSlide: true,
          disableOnInteraction: true
        },
        // 箭头配置
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 环状轮播
        loop: true,
        // loopedSlides: 3,
        // loopAdditionalSlides: 0,
        // 一个屏幕展示的数量
        slidesPerView: 1,
        // 间距
        spaceBetween: 50,
        // 修改swiper自己或子元素时，自动初始化swiper
        observer: true,
        // 修改swiper的父元素时，自动初始化swiper
        observeParents: true
      }
    }
  },
  created () {},
  mounted () {},
  computed: {
    swiper () {
      return this.$refs.noticeSwiper.$swiper
    }
  },
  methods: {},
  watch: {}
}
</script>
<style lang="less" scoped>
</style>
