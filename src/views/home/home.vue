<template>
  <div class="user-main">
    <div class="user-title">
      <img class="left" :src="base+'logo.png'" alt="">
      <div class="right">
        <p class="up">四川亚卓教育科技股份有限公司</p>
        <p class="down">中职德育课程</p>
      </div>
    </div>
    <div class="user-banner">
      <img v-lazy="base+'home-banner1.jpg'" alt="">
    </div>
    <div class="btn-group">
      <div class="home-btn">
        <div class="nav-btn"></div>
        <p class="btn-name">首页</p>
      </div>
      <div class="course-btn nav-btn">
        <div class="nav-btn"></div>
        <p class="btn-name">课程</p>
      </div>
      <div class="study-btn nav-btn">
        <div class="nav-btn"></div>
        <p class="btn-name">学习</p>
      </div>
    </div>
    <div class="train-box">
      <ChildHeader :chTitle="'培训'"></ChildHeader>
      <CourseItem v-for="n in 4" :key="n" :courseCount="1"></CourseItem>
    </div>
    <div class="course-box">
      <ChildHeader :chTitle="'课程'"></ChildHeader>
      <CourseItem v-for="n in 4" :key="n" :courseTime="'1:23:20'"></CourseItem>
    </div>
    <div class="rank-box">
      <ChildHeader :chTitle="'全员排行'">
        <div slot="rank-select" class="select-box">
          <!-- <select class="rank-select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select> -->
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
      </ChildHeader>
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
      scrollTop: 0
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.scrollToTop, true)
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop, true)
  },
  computed: {},
  methods: {
    init () {
      // 获取token
      let token = this.$route.query.token
      if (token) {
        history.replaceState({}, 'educationPlatformMob', 'http://nys.yazhuokj.com/home')
        localStorage.setItem('token', token)
      }
    },
    selectChange () {
      let target = event.target
      console.log(target.innerHTML)
      if (target.innerHTML) {
        this.selectVal = target.innerHTML
      }
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
    }
  },
  watch: {}
}
</script>
<style lang="less" scoped>
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
    min-height: 200px;
    img{
      width: 100%;
    }
  }
  .btn-group{
    display: flex;
    justify-content: space-around;
    padding: 20px 0 30px;
    border-bottom: 1px solid rgba(237,237,238,1);
    .nav-btn{
      width: 48px;
      height: 48px;
      border-radius: 13px;
      // border: 1px solid;
      box-shadow:0px 1px 6px 0px rgba(179,215,255,0.73);
    }
    .btn-name{
      font-size:12px/1;
      font-family:Alibaba PuHuiTi;
      font-weight:bold;
      color:rgba(126,129,133,1);
      margin-top: 12px;
      text-align: center;
    }
  }
  .train-box{}
  .course-box{
    border-bottom: 1px solid rgba(237,237,238,1);
  }
  .rank-box{
    .select-box{
      position: relative;
      left: 20%;
      .select-head{
        width: 100px;
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
          outline: none;
          font-size:15px;
          font-family:Alibaba PuHuiTi;
          font-weight:400;
          color:rgba(126,129,133,1);
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
        width: 90%;
        position: absolute;
        top: 30px;
        transform: translate(5%);
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
    }
    .add-btn{
      width: 52px;
    }
  }
}
</style>
