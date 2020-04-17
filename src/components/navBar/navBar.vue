<template>
  <div class="nav-main">
    <div class="navBar-box">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">个人中心</mt-tab-item>
        <mt-tab-item id="2">在线帮助</mt-tab-item>
      </mt-navbar>
    </div>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="swiper-box">
          <div class="swiper">
            <mt-swipe :auto="0">
              <mt-swipe-item>1</mt-swipe-item>
              <mt-swipe-item>2</mt-swipe-item>
              <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
        <div class="notice-box">
          <img class="notice-left" :src="base+'notice_left.png'">
          <div class="notice-mid">
            <swiper ref="noticeSwiper" :options="swiperOptions">
              <swiper-slide>
                <span class="notice">hello</span>
              </swiper-slide>
              <swiper-slide>
                <span class="notice">hello1</span>
              </swiper-slide>
              <swiper-slide>
                <span class="notice">hello2</span>
              </swiper-slide>
              <swiper-slide>
                <span class="notice">hello3</span>
              </swiper-slide>
              <swiper-slide>
                <span class="notice">hello4</span>
              </swiper-slide>
              <!-- 滚动条 -->
              <!-- <div class="swiper-scrollbar"></div> -->
              <!-- 下一项 -->
              <!-- <div class="swiper-button-next"></div> -->
              <!-- 上一项 -->
              <!-- <div class="swiper-button-prev"></div> -->
              <!-- 标页码 -->
              <!-- <div class="swiper-pagination"></div> -->
              <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            </swiper>
          </div>
          <div class="notice-right">
            <i class="iconfont icon-right"></i>
          </div>
        </div>
        <div class="content-outer-box" v-for="i in 3" :key="i">
          <div class="content-box">
            <div class="content-title">班主任成长梦工场</div>
            <div class="content-inner-box">
              <div class="content-card" v-for="n in 6" :key="n">
                <img class="card-top" :src="base+'card_eg.jpg'" alt="">
                <p class="card-mid">主题班会课（线上课程资源）</p>
                <div class="card-bottom">68学时</div>
              </div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
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
      }
    }
  },
  created () {},
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    // this.$nextTick(() => {
    //   this.swiper.slideTo(3, 1000, false)
    // })
  },
  computed: {
    swiper () {
      return this.$refs.noticeSwiper.$swiper
    }
  },
  methods: {},
  watch: {}
}
</script>
<style lang="less">
.nav-main{
  background-color: #fff;
  .navBar-box{
    // width: 50%;
    margin-bottom: 10px;
    // margin-bottom: 3%;
    .mint-navbar .mint-tab-item{
      .mint-tab-item-label{
        font-size:15px!important;
        font-family:Alibaba PuHuiTi!important;
        color:rgba(17,31,44,1);
      }
    }
    .is-selected{
      .mint-tab-item-label{
        font-weight:bold!important;
      }
    }
    @media screen and (min-width: 1200px){
      width: 50%;
    }
  }
  .swiper-box{
    width: 100%;
    height: 200px;
    // height: 15%;
    background-color: #fff;
    padding: 4%;
    box-sizing: border-box;
    border-top: 1px solid rgba(227,229,230,1);
    border-bottom: 1px solid rgba(227,229,230,1);
    @media screen and (min-width: 1200px){
      height: 360px;
    }
    @media screen and (min-width: 1460px){
      height: 500px;
    }
    .swiper{
      width: 100%;
      height: 100%;
      background-color: #aaa;
      border-radius: 10px;
    }
  }
  .notice-box{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    height: 44px;
    // overflow: hidden;
    padding: 0 4%;
    .notice-left{
      width: 59.5px;
      height: 14px;
    }
    .notice-mid{
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      // .swiper-slide{
      //   height: 44px!important;
      // }
      .notice{
        font-size: 18px;
        font-family:Alibaba PuHuiTi;
        font-weight:bold;
        color:rgba(83,93,103,1);
        line-height: 44px;
        text-align: center;
      }
    }
    .notice-right{
      .iconfont{
        font-size: 16px;
      }
    }
  }
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
}
</style>
