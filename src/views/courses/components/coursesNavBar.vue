<template>
  <div class="nav-main">
    <!-- <div class="coursesNavBar-box">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">个人中心</mt-tab-item>
        <mt-tab-item id="2">在线帮助</mt-tab-item>
      </mt-navbar>
    </div> -->
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- <div v-if="!coursesList.length" class="courses-bg">加载中...</div> -->
        <template>
          <div class="content-outer-box" v-for="(courses, index) in coursesList" :key="index">
            <div class="content-box">
              <div class="content-title">{{courses.courseTypeName}}</div>
              <div class="content-inner-box">
                <div class="content-card" v-for="(course, index) in courses.courseEventList" :key="index" @click="goCoursesDetails(course.courEventId)">
                  <img class="card-top" :src="course.coverUri" alt="">
                  <p class="card-mid">{{course.openName}}</p>
                  <div class="card-bottom">{{course.courHour}}学时</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="help-box">
          敬请期待
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: { Swiper, SwiperSlide },
  directives: {
    swiper: directive
  },
  props: {},
  data () {
    return {
      selected: '1',
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
        direction: 'vertical',
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
      },
      banners: [
        {
          id: 1,
          url: this.base + 'home-banner1.jpg'
        },
        {
          id: 2,
          url: this.base + 'home-banner2.jpg'
        },
        {
          id: 3,
          url: this.base + 'home-banner3.jpg'
        }
      ],
      coursesList: []
    }
  },
  created () {
    this.init()
  },
  mounted () {
    // console.log('Current Swiper instance object', this.swiper)
    // this.$nextTick(() => {
    //   this.swiper.slideTo(3, 1000, false)
    // })
  },
  computed: {
    swiper () {
      return this.$refs.noticeSwiper.$swiper
    }
  },
  methods: {
    init () {
      this.getEduInfo()
    },
    getEduInfo () {
      this.$api.getEduInfo().then(res => {
        console.log(res)
        if (res.code == 200) {
          console.log(res.data)
          this.coursesList = res.data
          this.$store.state.coursesList = res.data
        }
      })
    },
    // showDetails (event) {
    //   let message = event.target.innerHTML
    //   console.log(event.target.innerHTML)
    //   this.$MessageBox({
    //     title: '通知详情',
    //     message: message,
    //     showCancelButton: true,
    //     // confirmButtonText: '',
    //     cancelButtonText: '',
    //     confirmButtonClass: 'confirm-button',
    //     cancelButtonClass: 'iconfont icon-close'
    //   })
    // },
    goCoursesDetails (id) {
      console.log(id)
      this.$router.push({path: './courseDetails', query: {id: id}})
    }
  },
  watch: {}
}
</script>
<style lang="less" scoped>
.nav-main{
  background-color: #fff;
  .coursesNavBar-box{
    margin-bottom: 10px;
    // margin-bottom: 3%;
    .mint-navbar .mint-tab-item{
      display: flex;
      justify-content: center;
      .mint-tab-item-label{
        font-size:15px!important;
        font-family:Alibaba PuHuiTi!important;
        color:rgba(17,31,44,1);
      }
    }
    .is-selected{
      border-bottom: none!important;
      .mint-tab-item-label{
        font-weight:bold!important;
        position: relative;
        &::after{
          content: '';
          display: block;
          width: 80%;
          height: 3px;
          border-radius: 1.5px;
          background-color: #0089FF;
          position: absolute;
          bottom: -85%;
          left: 15%;
        }
      }
    }
    @media screen and (min-width: 1200px){
      width: 50%;
    }
  }
  // .swiper-box{
  //   width: 100%;
  //   height: 200px;
  //   // height: 15%;
  //   background-color: #fff;
  //   padding: 4%;
  //   box-sizing: border-box;
  //   border-top: 1px solid rgba(227,229,230,1);
  //   border-bottom: 1px solid rgba(227,229,230,1);
  //   @media screen and (min-width: 1200px){
  //     height: 360px;
  //   }
  //   @media screen and (min-width: 1460px){
  //     height: 500px;
  //   }
  //   .swiper{
  //     width: 100%;
  //     height: 100%;
  //     background-color: #aaa;
  //     border-radius: 10px;
  //     .home-banner{
  //       width: 100%;
  //       // max-height: 200px;
  //     }
  //   }
  // }
  // .notice-box{
  //   width: 100%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   height: 44px;
  //   // overflow: hidden;
  //   padding: 0 4%;
  //   box-sizing: border-box;
  //   .notice-left{
  //     // flex: 1;
  //     width: 59.5px;
  //     height: 14px;
  //   }
  //   .notice-mid{
  //     flex: 1;
  //     // max-width: 75%;
  //     height: 100%;
  //     display: flex;
  //     justify-content: center;
  //     overflow: hidden;
  //     .swiper-container{
  //       width: 100%;
  //     }
  //     .notice{
  //       display: inline-block;
  //       width: 100%;
  //       font-size: 18px;
  //       font-family:Alibaba PuHuiTi;
  //       font-weight:bold;
  //       color:rgba(83,93,103,1);
  //       line-height: 44px;
  //       text-align: center;
  //       white-space: nowrap;
  //       text-overflow: ellipsis;
  //       overflow: hidden;
  //       padding: 0 10px;
  //       box-sizing: border-box;
  //       cursor: pointer;
  //     }
  //   }
  //   .notice-right{
  //     .iconfont{
  //       font-size: 16px;
  //     }
  //   }
  // }
  .content-outer-box{
    padding: 4% 4% 0 4%;
    background-color: #F2F4F5;
    &:last-child{
      padding-bottom: 4%;
    }
    .content-box{
      width: 100%;
      background-color: #fff;
      border-radius: 3%;
      padding: 5%;
      box-sizing: border-box;
      .content-title{
        height: 35px;
        // line-height: 50px;
        box-sizing: border-box;
        font-size:16px;
        font-family:Alibaba PuHuiTi;
        font-weight:bold;
        color:rgba(18,31,44,1);
        border-bottom: 1px solid rgba(227,229,230,1);
      }
      .content-inner-box{
        width: 100%;
        margin-top: 5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .content-card{
          // flex: 1;
          width: 48%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-bottom: 5%;
          // &:last-child{
          //   margin-bottom: 0;
          // }
          .card-top{
            width: 100%;
          }
          .card-mid{
            font-family:Alibaba PuHuiTi;
            font-weight:bold;
            color:rgba(18,31,44,1);
            font-size:14px;
            line-height: 18px;
            margin: 5% 0;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .card-bottom{
            font-family:Alibaba PuHuiTi;
            font-weight: 400;
            color:rgba(125,132,139,1);
            font-size:13px;
          }
        }
      }
    }
  }
  // .courses-bg{
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   font-family: Alibaba PuHuiTi;
  //   color: #7d848b;
  //   font-size: 14px;
  //   height: 100vh;
  // }
  .help-box{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 360px;
    font-size: 24px;
    color: #333;
  }
}
// .icon-close{
//   position: absolute;
//   top: 0;
//   right: 0;
//   color: red;
//   font-size: 32px;
//   width: auto;
// }
// .confirm-button{
//   font-size: 14px;
// }
img[lazy=loading] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
}
</style>
