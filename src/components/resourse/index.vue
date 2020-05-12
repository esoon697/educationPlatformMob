<template>
  <div class="resourse-main">
    <i class="iconfont icon-xingzhuang"></i>
    <swiper ref="resourseSwiper" :options="swiperOptions">
      <template  v-if="resourses.length">
        <swiper-slide v-for="(resourse, index) in resourses" :key="index">
          <!-- 图片资源组件 -->
          <ImageEl v-if="resourse.studyType==1" :url='resourse.resourceUri'/>
          <!-- 视频资源组件 -->
          <Video v-if="resourse.studyType==2" :url='resourse.resourceUri' :index='index'/>
          <!-- 互动资源组件 -->
          <Task v-if="resourse.studyType==3" :url='resourse.resourceUri' :taskType="resourse.activeType" :index="index"/>
          <div class="resourse-bg" v-if="resourse.studyType===null">暂无数据</div>
        </swiper-slide>
      </template>
      <div v-else class="resourse-bg">暂无数据</div>
      <!-- 滚动条 -->
      <div class="swiper-scrollbar" slot="scrollbar"></div>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
    <!-- 标页码 -->
    <!-- <div class="swiper-pagination"></div> -->
    <!-- 上一项 -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-prev"></div> -->
    <!-- 下一项 -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-button-next"></div> -->
    <div class="btn-group">
      <div ref="prevBtn" class="prev-btn" @click="prev">上一个</div>
      <div ref="nextBtn" class="next-btn" @click="next">下一个</div>
    </div>
    <!-- <transition name="fade-bg">
      <div v-show="isActive" class="swiper-bg" @click="getActive('')">
      </div>
    </transition> -->
  </div>
</template>

<script>
import ImageEl from '../resourse/image/image'
import Video from '../resourse/video/video'
import Task from '../resourse/task/task'
import { mapState } from 'vuex'
export default {
  components: {ImageEl, Video, Task},
  props: {},
  data () {
    return {
      courrentType: 1,
      // isLast: false,
      // resourses: [],
      resourses: [
        {
          resourceUri: this.base + 'home-banner1.jpg',
          studyType: 0
        },
        {
          // resourceUri: 'http://182.148.48.236:54321/source/video_audio/first.mp4',
          resourceUri: 'http://182.148.48.236:54321/source/video_audio/labone.mp4',
          studyType: 1
        },
        {
          resourceUri: this.base + 'home-banner2.jpg',
          studyType: 0
        },
        {
          studyType: 2,
          taskType: 0
        },
        {
          resourceUri: 'http://182.148.48.236:54321/source/video_audio/first.mp4',
          studyType: 1
        },
        {
          studyType: 2,
          taskType: 1
        },
        {
          studyType: 2,
          taskType: 0
        },
        {
          resourceUri: this.base + 'home-banner3.jpg',
          studyType: 0
        }
      ], // 选中章节process数据
      swiperOptions: {
        // 分页器配置
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // 滚动条配置
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
          draggable: true
        },
        // 设定初始化时slide的索引
        initialSlide: 0,
        // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        // direction: 'horizontal',
        // 自动切换图配置
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: true,
        //   disableOnInteraction: true
        // },
        // 箭头配置
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        //   hideOnClick: true,
        //   disabledClass: 'my-button-disabled'
        // },
        // 滑到最后一个隐藏前进按钮
        // on: {
        //   slideChangeTransitionEnd: function () {
        //     if (this.isEnd) {
        //       console.log(this.navigation)
        //       console.log(this.navigation.$nextEl)
        //       // this.navigation.$nextEl.removeClass('swiper-button-next')
        //       // this.navigation.$prevEl.removeClass('swiper-button-prev')
        //     } else {
        //       this.navigation.$nextEl.css('display', 'block')
        //     }
        //   }
        // },
        // 自适应内容高度
        autoHeight: true,
        // height: window.innerHeight,
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
      // currentChapterId: null // 当前选中的章节Id
    }
  },
  created () {
    // this.$nextTick(() => {
    //   this.init()
    // })
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  computed: {
    // 获取swiper对象
    swiper () {
      return this.$refs.resourseSwiper.$swiper
    },
    // isLast () {
    //   console.log('this.swiper.activeIndex', this.swiper.activeIndex)
    //   console.log('this.resourses.length - 1', this.resourses.length - 1)
    //   return this.swiper.activeIndex == this.resourses.length - 1
    // },
    ...mapState(['processInfo', 'currentChapterId', 'currentProcessId']) // state中formData对象
  },
  methods: {
    // 初始化页面
    init () {
      this.resources = this.processInfo
      console.log('this.resourcesssssssssss', this.resources)
      this.swiper.scrollbar.$dragEl.css('background', '#0089FF')
      let activeIndex = this.resourses.findIndex(e => {
        console.log(e.processId)
        console.log(this.currentProcessId)
        return e.processId == this.currentProcessId
      })
      console.log('activeIndex', activeIndex)
      this.swiper.slideTo(activeIndex, 1000, false)
    },
    // 每页轮播切换结束时
    // slideChangeTransitionStart () {
    //   console.log(this.swiper.activeIndex)
    //   if (this.swiper.activeIndex === this.resourses.length - 1) {
    //     this.isLast = true
    //     console.log('isLast', this.isLast)
    //   } else {
    //     this.isLast = false
    //   }
    // },
    // 上一页
    prev () {
      this.swiper.slidePrev()
    },
    // 下一页
    next () {
      // 接口调用
      this.isLast = this.swiper.activeIndex == this.resourses.length - 1
      if (this.isLast) {
        this.$MessageBox.confirm('该章节已学习完，是否进入下一章?').then(action => {
          this.getNextChapterInfo()
          // this.$Toast({
          //   message: '登录已过期，请重新登录',
          //   iconClass: 'iconfont icon-yellow-warning',
          //   duration: 3000
          // })
          // console.log('formData', this.formData)
        }).catch(error => {
          console.log(error)
        })
      } else {
        this.swiper.slideNext()
        this.setStudyProcessLog()
      }
    },
    // 获取process数据
    getProcessInfo () {
      this.$api.getProcessInfo({
        chapterId: this.currentChapterId
      }).then(res => {
        if (res.code == 200) {
          console.log('this.$store.state.processInfooooooooo', res.data)
          // this.$store.state.processInfo = res.data
          this.resourses = res.data
        }
      })
    },
    // 记录ProcessId
    setStudyProcessLog () {
      let activeIndex = this.swiper.activeIndex
      if (this.resourses.length || this.resourses[activeIndex]) {
        this.currentProcessId = this.resourses[activeIndex].processId
        console.log('this.currentProcessIdddddddd', this.currentProcessId)
      }
      this.$api.setStudyProcessLog({
        courseEventId: this.courEventId,
        chaId: this.currentChapterId,
        processId: this.currentProcessId
      }).then(res => {
        if (res.code) {
          console.log(res.code)
        }
      })
    },
    // 获取下一个章节数据
    getNextChapterInfo () {
      this.$api.getQueryProcessList({
        chapterId: this.currentChapterId
      }).then(res => {
        if (res.code == 200) {
          console.log(res.data)
        }
      })
    }
  },
  watch: {
    currentChapterId (val) {
      // this.resourses = val
      // console.log('val', val)
      this.getProcessInfo()
    },
    processInfo (val) {
      this.resourses = val
      console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
.resourse-main{
  position: relative;
  // .swiper-wrapper{
  //   width: 100%;
  //   height: 100%;
  // }
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
  .btn-group{
    display: flex;
    justify-content: center;
    padding: 2% 0;
    border-bottom: 1px solid #F2F4F5;
    .prev-btn, .next-btn{
      padding: 8px 15px;
      background-color: #aaa;
      border-radius: 3px;
      cursor: pointer;
      &:active{
        background-color: #aaa;
        opacity: .8;
      }
    }
    .prev-btn{
      background-color: #EFEFEF;
      color: #7D848B;
      margin-right: 5%;
    }
    .next-btn{
      background-color: #0089FF;
      color: #FFFFFF;
    }
  }
  .swiper-bg{
    width: 100%;
    height: 100vh;
    // height: calc(100vh-48.5px);
    position: absolute;
    background:rgba(0,0,0,1);
    opacity:0.5;
    z-index: 2;
  }
  .resourse-bg{
    width: 100%;
    min-height: 200px;
    background-color: #000;
    color: white;
    line-height: 200px;
    text-align: center;
    font-size:18px;
    font-family:Alibaba PuHuiTi;
    font-weight:bold;
  }
  .fade-bg-enter-active{
    transition: all .5s
  }
  .fade-bg-enter{
    // transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
