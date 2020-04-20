<template>
  <div class="resourse-main">
    <swiper ref="resourseSwiper" :options="swiperOptions">
      <swiper-slide v-for="(resourse, index) in resourses" :key="index">
        <ImageEl v-if="resourse.type==0" :url='resourse.url'/>
        <Video v-if="resourse.type==1" :url='resourse.url' :index='index'/>
        <Task v-if="resourse.type==2" :url='resourse.url'/>
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
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 上一项 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <!-- 下一项 -->
      <div class="swiper-button-next" slot="button-next">
        <!-- <img v-show="isLast" src="http://182.148.48.236:54321/source/educationPlatformMob/tabBar_cion1.png"> -->
      </div>
      <div class="nextSection" v-if="isLast"></div>
    </swiper>
      <!-- 标页码 -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <!-- <div class="nextSection" v-if="activeIndex===resourses.length"></div> -->
  </div>
</template>

<script>
import ImageEl from '../resourse/image/image'
import Video from '../resourse/video/video'
import Task from '../resourse/task/task'
// var active = 0
export default {
  components: {ImageEl, Video, Task},
  // components: {Video, Task},
  props: {},
  data () {
    return {
      courrentType: 1,
      isLast: false,
      resourses: [
        {
          url: this.base + 'courses-avatar1.jpg',
          type: 0
        },
        {
          // url: 'http://182.148.48.236:54321/source/video_audio/first.mp4',
          url: 'http://182.148.48.236:54321/source/video_audio/labone.mp4',
          type: 1
        },
        {
          url: 'http://182.148.48.236:54321/source/video_audio/first.mp4',
          type: 1
        },
        {
          url: this.base + 'courses-avatar2.jpg',
          type: 0
        },
        {
          url: this.base + 'courses-avatar3.jpg',
          type: 0
        }
      ],
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
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: true,
        //   disableOnInteraction: true
        // },
        // 箭头配置
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
          disabledClass: 'my-button-disabled'
        },
        // 滑到最后一个隐藏前进按钮
        on: {
          slideChangeTransitionEnd: function () {
            if (this.isEnd) {
              console.log(this.navigation)
              console.log(this.navigation.$nextEl)
              // this.navigation.$nextEl.removeClass('swiper-button-next')
              // this.navigation.$prevEl.removeClass('swiper-button-prev')
              // this.navigation.$nextEl.css('background', 'url("http://182.148.48.236:54321/source/educationPlatformMob/tabBar_cion1.png") no-repeat')
              // this.navigation.$nextEl.append('<img class="nextSection" src="http://182.148.48.236:54321/source/educationPlatformMob/tabBar_cion1.png" @click="nextSection">')
              // let nextSection = document.querySelector('.nextSection')
              // nextSection.addEventListener('on', nextSection, false)
              // active = 1
            } else {
              this.navigation.$nextEl.css('display', 'block')
            }
          }
        },
        // 环状轮播
        // loop: true,
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
  mounted () {
    // this.swiper.navigation.update()
    // console.log(this.isLast)
    console.log(this.swiper)
  },
  computed: {
    swiper () {
      return this.$refs.resourseSwiper.$swiper
    },
    activeIndex () {
      return this.$refs.resourseSwiper.$swiper.activeIndex
    }
  },
  methods: {
    nextSection () {
      alert('nextSection')
    }
  }
}
</script>
<style lang="less" scoped>
.my-button-disabled{
  display:none;
}
.swiper-button-next{
  outline: none;
}
.swiper-button-prev{
  outline: none;
}
.swiper-button-hidden{
  opacity: 0;
}
.nextSection{
  position: absolute;
  top: 1%;
  left: 1%;
  // transform: translate(-50%, -50%);
  // width: 45px;
  // height: 45px;
  // background: url(http://182.148.48.236:54321/source/educationPlatformMob/tabBar_cion1.png) no-repeat;
}
</style>
