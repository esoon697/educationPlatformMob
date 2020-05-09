<template>
  <div class="user-main">
    <div class="user-head">
      <img class="user-avatar" :src="base+'rank-avatar1.jpg'" alt="">
      <div class="user-info">
        <p class="user-name">四川亚卓教育科技股份有限公司</p>
        <p class="user-course">共学0.07分钟</p>
      </div>
    </div>
    <div class="user-body">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">我的课程</mt-tab-item>
        <mt-tab-item id="2">我的作业</mt-tab-item>
        <mt-tab-item id="3">我的考试</mt-tab-item>
        <mt-tab-item id="4">我的成绩</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="myCourses-box">
            <div class="course-item" v-for="n in 7" :key="n">
              <div class="course-head">
                <img class="course-cover" :src="base+'card_eg.jpg'" alt="">
                <div class="course-count">8节课</div>
              </div>
              <p class="course-info">4招搞掂培训需求调查</p>
              <span class="course-pro">已完成1%</span>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <SqueezeBox/>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import SqueezeBox from '../../components/squeezeBox/squeezeBox'
export default {
  components: {SqueezeBox},
  props: [''],
  data () {
    return {
      selected: '1'
    }
  },

  computed: {},

  created () {},

  mounted () {},

  methods: {},

  watch: {}

}

</script>
<style lang='less'>
.user-main{
  padding: 0 4%;
  .user-head{
    display: flex;
    justify-content: flex-start;
    padding: 20px 0;
    .user-avatar{
      width: 65px;
      height: 65px;
      border-radius: 50%;
      margin-right: 11px;
    }
    .user-info{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      .user-name{
        font-size:18px;
        font-family:Alibaba PuHuiTi;
        font-weight:bold;
        color:rgba(25,31,37,1);
      }
      .user-course{
        font-size:12px;
        font-family:Alibaba PuHuiTi;
        font-weight:400;
        color:rgba(171,173,176,1);
      }
    }
  }
  .user-body{
    .mint-navbar{
      border-bottom: 1px solid rgba(237,237,238,1);
    }
    .mint-navbar .mint-tab-item{
      display: flex;
      justify-content: center;
      .mint-tab-item-label{
        font-size:14px;
        font-family:Alibaba PuHuiTi;
        font-weight:400;
        color:rgba(89,93,98,1);
      }
    }
    .is-selected{
      border-bottom: none!important;
      .mint-tab-item-label{
        font-weight:bold!important;
        position: relative;
        font-weight:bold!important;
        color:rgba(0,116,248,1)!important;
        &::after{
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          border-radius: 1.5px;
          background-color: rgba(0,116,248,1)!important;
          position: absolute;
          bottom: -80%;
          left: 0;
        }
      }
    }
    .myCourses-box{
      display: flex;
      flex-wrap: wrap;
      padding-top: 4%;
      .course-item{
        // flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 48%;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 5px 0px rgba(238,238,238,1);
        border-radius:10px;
        margin-bottom: 4%;
        &:nth-child(2n+1){
          margin-right: 4%;
        }
        .course-head{
          position: relative;
          width: 100%;
          .course-cover{
            width: 100%;
          }
          .course-count{
            width: 50px;
            height: 16px;
            background:rgba(0,137,255,1);
            border-radius:5px 0px 5px 0px;
            font-size:11px;
            font-family:Alibaba PuHuiTi;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height: 16px;
            text-align: center;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .course-info{
          font-size:15px;
          font-family:Alibaba PuHuiTi;
          font-weight:400;
          color:rgba(17,32,45,1);
          padding: 5%;
        }
        .course-pro{
          font-size:13px;
          font-family:Alibaba PuHuiTi;
          font-weight:400;
          color:rgba(126,129,133,1);
          padding: 5%;
        }
      }
    }
  }
}
</style>
