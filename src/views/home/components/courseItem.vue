<template>
  <div class="courseItem-main">
    <div class="course-left">
      <img v-lazy="base+'card_eg.jpg'" alt="" lazy="loading">
      <div class="course-count" v-if="courseCount">{{courseCount}}节课</div>
      <div class="course-play" v-else>
        <img :src="base+'home_play_icon.png'" alt="">
      </div>
    </div>
    <div class="course-right">
      <p class="course-title">4招搞掂培训需求调查</p>
      <div class="course-content">
        <span>课程概述：通过本系列课程学习，...</span>
      </div>
      <div class="course-time" v-if="courseTime">
        <span>时长：1:23:20</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['courseCount', 'courseTime'],
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {},
  watch: {}
}
</script>
<style lang="less" scoped>
.courseItem-main{
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  .course-left{
    width: 40%;
    margin-right: 10px;
    position: relative;
    img{
      width: 100%;
    }
    .course-count{
      width: 50px;
      height: 18px;
      background:rgba(0,137,255,1);
      border-radius:5px 0px 5px 0px;
      font-size:11px;
      font-family:Alibaba PuHuiTi;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height: 18px;
      text-align: center;
      position: absolute;
      top: 0;
    }
    .course-play{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img{
        width: 24px;
      }
    }
  }
  .course-right{
    font-family:Alibaba PuHuiTi;
    font-weight:400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .course-title{
      font-size:15px/1;
      color:rgba(17,32,45,1);
    }
    .course-content{
      font-size:13px/1;
      color:rgba(126,129,133,1);
      margin: 16px 0;
    }
    .course-time{
      font-size:11px/1;
      color:rgba(0,137,255,1);
    }
  }
  img[lazy=loading] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
  }
}
</style>
