<template>
  <div class="user-main">
    <!-- <div class="user-title">
      <img class="left" :src="base+'logo.png'" alt="">
      <div class="right">
        <p class="up">四川亚卓教育科技股份有限公司</p>
        <p class="down">中职德育课程</p>
      </div>
    </div> -->
    <div class="user-banner">
      <!-- <img v-lazy="base+'home-banner1.jpg'" alt="" lazy="loading"> -->
        <div class="swiper-box">
          <div class="swiper">
            <mt-swipe :auto="3000" :speed="800">
              <mt-swipe-item v-for="(banner, index) in banners" :key="index">
                <img class="home-banner" v-lazy="banner.url" alt="" lazy="loading">
              </mt-swipe-item>
              <!-- <mt-swipe-item>2</mt-swipe-item>
              <mt-swipe-item>3</mt-swipe-item> -->
            </mt-swipe>
          </div>
        </div>
    </div>
    <div class="search-box">
      <div class="search-outer">
        <input type="text" placeholder="请输入您要搜索的内容" @blur="showTabBar(true)" @focus="showTabBar(false)">
        <img src="../../assets/home-search.png" alt="">
      </div>
    </div>
    <div class="btn-group">
      <div class="nav-btn-box">
        <!-- <div class="nav-btn"></div> -->
        <img class="nav-btn" src="../../assets/home-icon1@2x.png" alt="">
        <p class="btn-name">公告</p>
      </div>
      <div class="nav-btn-box">
        <img class="nav-btn" src="../../assets/home-icon2@2x.png" alt="">
        <p class="btn-name">课程</p>
      </div>
      <div class="nav-btn-box">
        <img class="nav-btn" src="../../assets/home-icon3@2x.png" alt="">
        <p class="btn-name">个人中心</p>
      </div>
      <div class="nav-btn-box">
        <img class="nav-btn" src="../../assets/home-icon4@2x.png" alt="">
        <p class="btn-name">在线帮助</p>
      </div>
    </div>
    <!-- <div class="notice-box">
      <img class="notice-left" :src="base+'notice_left.png'">
      <div class="notice-content">
        <swiper ref="noticeSwiper" :options="swiperOptions">
          <swiper-slide v-for="n in 5" :key="n">
            <span class="notice" @click="showDetails">{{'你好呀'+n}}</span>
          </swiper-slide>
        </swiper>
      </div>
      <div class="notice-right">
        <i class="iconfont icon-right"></i>
      </div>
    </div> -->
    <div class="notice-box">
      <div class="childHeader-main">
        <!-- <div class="ch-left">{{chTitle}}</div> -->
        <img class="ch-left" src="../../assets/home-notice@2x.png" alt="">
        <div class="ch-right">全部</div>
      </div>
      <div class="notice-content">
        <swiper ref="noticeSwiper" :options="swiperOptions">
          <swiper-slide v-for="n in 5" :key="n">
            <span class="notice" @click="showDetails">{{'亚卓教育——中等职业学校数字媒体开学了'+n}}</span>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- <div class="train-box">
      <ChildHeader :chTitle="'培训'"></ChildHeader>
      <CourseItem v-for="n in 4" :key="n" :courseCount="1"></CourseItem>
    </div> -->
    <div class="course-box">
      <ChildHeader :chTitle="'课程'"></ChildHeader>
      <CourseItem v-for="n in 4" :key="n" :courseTime="'1:23:20'"></CourseItem>
    </div>
    <div class="rank-box">
      <ChildHeader :chTitle="'全员排行'">
      </ChildHeader>
      <div class="select-box">
        <div class="select-head" @click="selectChange">
          <input class="select-input" type="text" readonly="readonly" v-model="selectVal">
          <div class="select-icon"></div>
        </div>
        <ul class="select-body" v-show="isActive" @click="selectChange">
          <li>技术部</li>
          <li>课程部</li>
          <li>财务部</li>
        </ul>
      </div>
      <div class="rank-body">
        <div class="rank-title">
          <img :src="base+'rank_left.png'" alt="">
          <h3>我本月暂无学习排名</h3>
          <img class="rank-right" :src="base+'rank_left.png'" alt="">
        </div>
        <div class="rank-content">
          <div class="rank-item" v-for="n in 4" :key="n">
            <div class="user-avatar">
              <img class="avatar" :src="base+'rank-avatar1.jpg'" alt="">
              <img class="honor" :src="base+'rank'+n+'.png'" alt="" v-if="n<=3">
            </div>
            <span class="user-name">许云凡</span>
            <span class="user-time">2分钟</span>
          </div>
        </div>
      </div>
    </div>
    <div class="float-btns" v-show="showBtn">
      <img class="goTop-btn" :src="base+'goTop.png'" alt="" @click="goTop">
      <img class="add-btn" :src="base+'add_icon.png'" alt="">
    </div>
  </div>
</template>

<script>
import ChildHeader from './components/childHeader'
import CourseItem from './components/courseItem'
export default {
  components: {ChildHeader, CourseItem},
  props: {},
  data () {
    return {
      selectVal: '全部',
      isActive: false,
      showBtn: false,
      scrollTop: 0,
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
          disableOnInteraction: false
        },
        // 箭头配置
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        // 环状轮播
        loop: true,
        // loopedSlides: 3,
        // loopAdditionalSlides: 0,
        // 一个屏幕展示的数量
        slidesPerView: 3,
        // 间距
        // spaceBetween: 50,
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
      ]
    }
  },
  created () {
    // this.init()
    this.dingdingInt()
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.scrollToTop, true)
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop, true)
  },
  computed: {
    swiper () {
      return this.$refs.noticeSwiper.$swiper
    }
  },
  methods: {
    init () {
      // 获取token
      let token = this.$route.query.token
      if (token) {
        history.replaceState({}, 'educationPlatformMob', 'http://nys.yazhuokj.com/home')
        localStorage.setItem('token', token)
      }
      this.checkToken()
    },
    // 验证token是否失效
    checkToken () {
      // token验证接口
      let token = localStorage.getItem('token')
      console.log('token', token)
      if (this.isblank(token)) {
        this.$store.state.isLogin = false
      } else {
        this.$api.checkTk({
          jwt: token
        }).then(res => {
          if (res.code == 200 && res.data == 0) {
            // this.$router.push({path: '/study'})
            this.$store.state.isLogin = true
          } else {
            this.$store.state.isLogin = false
          }
        })
      }
    },
    selectChange () {
      let target = event.target
      console.log(target)
      if (target.innerHTML) {
        this.selectVal = target.innerHTML
      }
      console.log(this.isActive)
      this.isActive = !this.isActive
    },
    scrollToTop () {
      const _this = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      _this.scrollTop = scrollTop
      if (_this.scrollTop > 60) {
        _this.showBtn = true
      } else {
        _this.showBtn = false
      }
    },
    // 回到顶部
    goTop () {
      var timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    },
    showDetails (event) {
      let message = event.target.innerHTML
      console.log(event.target.innerHTML)
      this.$MessageBox({
        title: '通知详情',
        message: message,
        showCancelButton: true,
        // confirmButtonText: '',
        cancelButtonText: '',
        confirmButtonClass: 'confirm-button',
        cancelButtonClass: 'iconfont icon-close'
      })
    },
    dingdingInt () {
      let dd = this.$dd
      const host = window.location.host
      this.ipUrl = 'http://' + host + '/home'
      let that = this
      dd.ready(function () {
        var strs
        var url = location.search
        if (url.indexOf('?') !== -1) {
          var str = url.substr(1)
          strs = str.split('=')
          that.corpId = strs[1]
        }
        dd.runtime.permission.requestAuthCode({
          corpId: that.corpId,
          onSuccess: function (result) {
            console.log('res:::::', result)
            that.code = result.code
            that.postDingLogin()
          },
          onFail: function (err) {
            console.log(err)
          }
        })
      })
    },
    postDingLogin () {
      this.$api.postDingLogin({
        code: this.code,
        corpId: this.corpId,
        flag: 1
      }).then(res => {
        if (res.code === 200) {
          console.log(res)
          // window.location.href = this.ipUrl
          localStorage.setItem('token', res.token)
        } else {
          window.location.href = this.ipUrl
        }
      })
    },
    showTabBar (val) {
      this.$store.state.isShowTabBar = val
    }
  },
  watch: {}
}
</script>
<style lang="less">
.user-main{
  padding: 0 4%;
  .user-title{
    display: flex;
    padding: 16px 0;
    .left{
      width: 40px;
      height: 40px;
      margin-right: 13px;
    }
    .right{
      display: flex;
      flex-direction: column;
      .up{
        font-size:18px;
        font-family:Alibaba PuHuiTi;
        font-weight:bold;
        color:rgba(25,31,37,1);
      }
      .down{
        font-size:14px;
        font-family:Alibaba PuHuiTi;
        font-weight:400;
        color:rgba(99,114,128,1);
        line-height:26px;
      }
    }
  }
  .user-banner{
    width: 100%;
    // margin-top: 16px;
    // min-height: 200px;
    // img{
    //   width: 100%;
    // }
    .swiper-box{
      width: 100%;
      height: 200px;
      // height: 15%;
      background-color: #fff;
      padding: 4% 0;
      box-sizing: border-box;
      // border-top: 1px solid rgba(227,229,230,1);
      // border-bottom: 1px solid rgba(227,229,230,1);
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
        overflow: hidden;
        .home-banner{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .search-box{
    width: 100%;
    margin: 15px 0 20px;
    .search-outer{
      width: 100%;
      height: 29px;
      display: flex;
      align-items: center;
      border:1px solid #D2D2D2;
      border-radius:15px;
      box-sizing: border-box;
      overflow: hidden;
      padding: 0 10px;
      input{
        flex: 1;
        height: 100%;
        outline: none;
        padding-right: 10px;
        &::-webkit-input-placeholder{
          font-size:12px;
          font-family:AlibabaPuHuiTiL;
          font-weight:400;
          line-height: 1;
          color:rgba(147,149,153,1);
        }
        &:-moz-placeholder{
          font-size:12px;
          font-family:AlibabaPuHuiTiL;
          font-weight:400;
          line-height: 1;
          color:rgba(147,149,153,1);
        }
        &::-moz-placeholder{
          font-size:12px;
          font-family:AlibabaPuHuiTiL;
          font-weight:400;
          line-height: 1;
          color:rgba(147,149,153,1);
        }
        &:-ms-input-placeholder{
          font-size:12px;
          font-family:AlibabaPuHuiTiL;
          font-weight:400;
          line-height: 1;
          color:rgba(147,149,153,1);
        }
      }
    }
  }
  .btn-group{
    display: flex;
    justify-content: space-around;
    padding-bottom: 30px;
    border-bottom: 1px solid #EDEDEE;
    .nav-btn{
      width: 53px;
      height: 53px;
    }
    .btn-name{
      font-size:12px/1;
      font-family:Alibaba PuHuiTi;
      font-weight:bold;
      color:rgba(126,129,133,1);
      margin-top: 5px;
      text-align: center;
    }
  }
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
  //   .notice-content{
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
  .notice-box{
    width: 100%;
    height: 200px;
    overflow: hidden;
    box-sizing: border-box;
    .childHeader-main{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size:15px;
      font-family:Alibaba PuHuiTi;
      font-weight:400;
      padding: 20px 0 10px;
      .ch-left{
        height: 14px;
      }
      .ch-right{
        color: #0089FF;
        &:active{
          opacity: .8;
          color: #666;
        }
      }
    }
    // .notice-left{
    //   // flex: 1;
    //   width: 59.5px;
    //   height: 14px;
    // }
    .notice-content{
      height: calc(100% - 55px);
      display: flex;
      justify-content: center;
      overflow: hidden;
      .swiper-container{
        width: 100%;
      }
      .notice{
        display: inline-block;
        width: 100%;
        font-size: 15px;
        font-family:Alibaba PuHuiTi;
        // font-weight:bold;
        color:rgba(83,93,103,1);
        line-height: 48px;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0 10px;
        border-bottom: 1px solid #EDEDEE;
        box-sizing: border-box;
        cursor: pointer;
      }
    }
    .notice-right{
      .iconfont{
        font-size: 16px;
      }
    }
  }
  .course-box{
    border-bottom: 1px solid rgba(237,237,238,1);
  }
  .rank-box{
    .select-box{
      // position: relative;
      // left: 20%;
      padding-bottom: 20px;
      .select-head{
        width: 140px;
        height: 26px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border:1px solid rgba(228,229,229,1);
        padding: 0 10px;
        box-sizing: border-box;
        border-radius:13px;
        .select-input{
          width: 100%;
          height: 100%;
          outline: none;
          font-size:15px;
          font-family:Alibaba PuHuiTi;
          font-weight:400;
          color:rgba(126,129,133,1);
          border-right: 1px solid #E4E5E5;
          margin-right: 8px;
        }
      }
      .select-icon{
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 8px solid rgba(126,129,133,1);
        // background-color: rgba(126,129,133,1);
      }
      .select-body{
        width: 40%;
        position: absolute;
        // top: 30px;
        // transform: translateY(5%);
        box-shadow:0px 1px 3px 0px rgba(126,129,133,1);
        border-radius: 13PX;
        background-color: #fff;
        z-index: 3;
        li{
          text-align: center;
          height: 25px;
          line-height: 25px;
          color:rgba(126,129,133,1);
          // border-bottom: 1px solid #eee;
        }
      }
    }
    .rank-body{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .rank-title{
        display: flex;
        align-items: center;
        font-size:15px;
        font-family:Alibaba PuHuiTi;
        font-weight:400;
        color:rgba(126,129,133,1);
        margin-bottom: 20px;
        img{
          width: 15px;
        }
        .rank-right{
          transform: rotateY(180deg);
        }
      }
      .rank-content{
        display: flex;
        justify-content: space-between;
        width: 100%;
        .rank-item{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .user-avatar{
            position: relative;
            margin-bottom: 15px;
            .avatar{
              width: 56px;
              border-radius: 50%;
            }
            .honor{
              width: 23px;
              position: absolute;
              bottom: -10%;
              right: -10%;
            }
          }
          .user-name{
            font-size:15px;
            font-family:Alibaba PuHuiTi;
            font-weight:400;
            color:rgba(17,32,45,1);
            margin-bottom: 5px;
          }
          .user-time{
            font-size:12px;
            font-family:Alibaba PuHuiTi;
            font-weight:400;
            color:rgba(177,180,181,1);
          }
        }
      }
    }
  }
  .float-btns{
    position: fixed;
    bottom: 15%;
    right: 3%;
    display: flex;
    flex-direction: column;
    .goTop-btn{
      width: 52px;
      margin-bottom: 10px;
      opacity: .6;
    }
    .add-btn{
      width: 52px;
      opacity: .8;
    }
  }
  img[lazy=loading] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
  }
}
.icon-close{
  position: absolute;
  top: 0;
  right: 0;
  color: red;
  font-size: 32px;
  width: auto;
}
.confirm-button{
  font-size: 14px;
}
</style>
